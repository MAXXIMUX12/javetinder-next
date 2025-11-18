import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesController } from './controller/messages.controller';
import { MessagesGateway } from './gateway/messages.gateway';
import { MessagesService } from './service/messages.service';
import { MessagesRepository } from './repository/messges.repository';
import { Message, MessageSchema } from './entity/message.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }])],
  controllers: [MessagesController],
  providers: [MessagesGateway, MessagesService, MessagesRepository]
})

export class MessagesModule {}
