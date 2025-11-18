import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { AuthRepository } from './repository/auth.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './entity/user.entity';
import { UserModule } from '../user/user.module';


@Module({
  //conxion a la coleccion de la base de datos
  imports: [MongooseModule.forFeature([{name: "users", schema: UsersSchema}])],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository]
})
export class AuthModule {}
