import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { MessagesModule } from './modules/messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // conexion a la base de datos mongo
  imports: [AuthModule, MessagesModule, MongooseModule.forRoot('mongodb://db:27017', {
    user: "user",
    pass: "pass",
    //nombre de la base de datos
    dbName: "javeTinderDataBase"
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
