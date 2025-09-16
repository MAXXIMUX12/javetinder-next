import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// debo continuar escribiendo la estructura
export class Message {
  _id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: Date;
  isRead: boolean;
}