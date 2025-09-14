import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// estructura de los datos que van a estar dentro de la coleccion
@Schema()
export class UsersEntity {
    @Prop()
    userName: string;
    @Prop()
    email: string;
    @Prop()
    password: string;
    @Prop()
    dateOfBirth: string
}
export const UsersSchema = SchemaFactory.createForClass(UsersEntity);