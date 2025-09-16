import { Controller,  Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from '../service/messages.service';
import { CreateMessageDto } from '../dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Post()
    create(@Body() dto: CreateMessageDto) {
        return this.messagesService.create(dto);
    }

    @Get(':conversationId')
    findByConversation(@Param('conversationId') conversationId: string) {
        return this.messagesService.findByConversation(conversationId);
  }
}