import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// estructura de los datos que van a estar dentro de la coleccion
@Schema()
export class UsersEntity {
    @Prop({ required: true,  unique: true })
    userName: string;
    @Prop({ required: true, unique: true })
    email: string;
    @Prop({ required: true, minlength: 8 })
    password: string;
    @Prop({ required: true })
    dateOfBirth: string
    @Prop({ required: true })
    faculty: string;
    @Prop({ required: true })
    career: string;
    @Prop()
    gender?: string;
    @Prop({ default: [] })
    photos: string[]; 
    @Prop({ default: '' })
    description: string;
    @Prop({ default: false })
    lookingForSeriousRelationship: boolean;
    @Prop({ default: [] })
    likes: string[];    // userIds liked by this user
    @Prop({ default: [] })
    matches: string[]; // ids of matched users
    @Prop({ default: true })
    active: boolean;
}
export const UsersSchema = SchemaFactory.createForClass(UsersEntity);