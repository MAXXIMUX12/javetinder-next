import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from '../entity/message.entity';

@Injectable()
export class MessagesRepository {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}
  
  create(data: Partial<Message>) {
    const msg = new this.messageModel(data);
    return msg.save();
  }

  findConversation(user1: string, user2: string) {
    return this.messageModel.find({
      $or: [
        { senderId: user1, receiverId: user2 },
        { senderId: user2, receiverId: user1 },
      ],
    }).sort({ createdAt: 1 });
  }


  markAsRead(id: string) {
    return this.messageModel.findByIdAndUpdate(id, { read: true }, { new: true });
  }  

}