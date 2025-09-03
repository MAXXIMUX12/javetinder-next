export class CreateMessageDto {
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
}