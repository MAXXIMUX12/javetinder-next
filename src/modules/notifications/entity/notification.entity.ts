import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Types, Document} from 'mongoose';

@Schema( { timestamps: true } )

export class Notification extends Document{
    @Prop({ type: Types.ObjectId, ref: 'users', required: true })
    userId: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ default: false })
    isRead: boolean;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);