import { Injectable } from '@nestjs/common';
import { Message } from '../entity/message.entity';

@Injectable()
export class MessagesRepository {
  private messages: Message[] = [];

  async create(message: Message): Promise<Message> {
    this.messages.push(message);
    return message;
  }

  async findByConversation(conversationId: string): Promise<Message[]> {
    return this.messages.filter(m => m.conversationId === conversationId);
  }
}