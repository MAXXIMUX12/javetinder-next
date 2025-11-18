import { Module } from '@nestjs/common';
import { ServiceHomeService } from './service-home/service-home.service';
import { ControllerHomeController } from './controller-home/controller-home.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/user-entity/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [ServiceHomeService],
  controllers: [ControllerHomeController]
})
export class HomeModule {}
