import { Controller,  Get, Post, Body, Param, Query } from '@nestjs/common';
import { MessagesService } from '../service/messages.service';
import { SendMessageRequest } from '../dto/mesages.request.dto';
import { MessageResponse } from '../dto/mesages.response.dto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Post()
    async sendMessage(@Body() body: SendMessageRequest): Promise<any> {
        return this.messagesService.sendMessage(body);
    }

    @Get()
    async getConversation(
        @Query('user1') user1: string,
        @Query('user2') user2: string,
    ) {
        return this.messagesService.getConversation(user1, user2);
  }
}