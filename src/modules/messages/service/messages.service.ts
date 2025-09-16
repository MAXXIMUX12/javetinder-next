import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../repository/repository';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message } from '../entity/message.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class MessagesService {
  constructor(private readonly repo: MessagesRepository) {}

  async create(dto: CreateMessageDto): Promise<Message> {
    const newMessage: Message = {
      _id: randomUUID(),
      ...dto,
      createdAt: new Date(),
      isRead: false,
    };
    return this.repo.create(newMessage);
  }

  async findByConversation(conversationId: string): Promise<Message[]> {
    return this.repo.findByConversation(conversationId);
  }
}
