import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserFeedEntity {
    @Prop({ required: true })
    userName: string;
    @Prop({ required: true })
    career: string;
    @Prop({ required: true })
    images: [string];
    @Prop({ required: true })
    age: number;
    @Prop({ required: true })
    description: string;
    @Prop({ default: false })
    like: boolean;
}
export const UserFeedSchema = SchemaFactory.createForClass(UserFeedEntity);