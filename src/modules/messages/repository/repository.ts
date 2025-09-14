import { Injectable } from '@nestjs/common';
// import { Message } from './entities/message.entity';

@Injectable()
export class Repository {
    private messages: any[] = [];

    async create(message: any): Promise<any> {
        this.messages.push(message);
        return message;
    }
    async findByConversation(conversationId: string): Promise<any[]> {
        return this.messages.filter(m => m.conversationId === conversationId);
  }
}