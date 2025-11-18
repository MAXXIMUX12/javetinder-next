import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { MessagesModule } from './modules/messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/user/user.module';
import { FilterModule } from './modules/filter/filter.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ProfileModule } from './modules/profile/profile.module';


@Module({
  // conexion a la base de datos mongo
  imports: [
    AuthModule, 
    HomeModule, 
    UserModule, 
    MessagesModule, 
    FilterModule,
    ProfileModule,
    NotificationsModule,
    MongooseModule.forRoot('mongodb://db:27017', {
    user: "user",
    pass: "pass",
    //nombre de la base de datos
    dbName: "javeTinderDataBase"
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
