import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfileController } from './controller/profile.controller';
import { ProfileService } from './service/profile.service';
import { UserSchema } from '../user/user-entity/user.schema';

@Module({
  imports: [MongooseModule.forFeature([ {name: "users", schema: UserSchema}])],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
