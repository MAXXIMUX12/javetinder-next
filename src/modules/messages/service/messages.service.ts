import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../repository/messges.repository';
import { SendMessageRequest } from '../dto/mesages.request.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly messageRepository: MessagesRepository) {}

  async sendMessage(body: SendMessageRequest) {
    return this.messageRepository.create(body);
  }

  async getConversation(user1: string, user2:string)  {
    return this.messageRepository.findConversation(user1, user2);
  }
  
}
