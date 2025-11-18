import { SubscribeMessage, WebSocketGateway, MessageBody, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from '../service/messages.service';

@WebSocketGateway({
  cors: { origin: '*' },
})

export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private activeUsers = new Map<string, string>(); // userId -> socketId

  constructor(private messageService: MessagesService) {}

  handleConnection(socket: Socket) {
    console.log("Cliente conectado:", socket.id);
  }

  handleDisconnect(socket: Socket) {
    const userId = [...this.activeUsers.entries()]
      .find(([_, sId]) => sId === socket.id)?.[0];

    if (userId) {
      this.activeUsers.delete(userId);
    }

    console.log("Cliente desconectado:", socket.id);
  }

  @SubscribeMessage('register')
  registerUser(socket: Socket, @MessageBody() data: { userId: string }) {
    this.activeUsers.set(data.userId, socket.id);
    console.log(`Usuario registrado: ${data.userId} → ${socket.id}`);
  }

  @SubscribeMessage('send_message')
  async handleMessage (socket: Socket, @MessageBody() dto: { senderId: string; receiverId: string; content: string },) {
    // Guardar en Mongo
    const savedMessage = await this.messageService.sendMessage(dto);

    // Buscar el socket del receptor
    const receiverSocket = this.activeUsers.get(dto.receiverId);

    if (receiverSocket) {
      // Enviar mensaje inmediato
      this.server.to(receiverSocket).emit('new_message', savedMessage);
    }

    return savedMessage;
  }
}
