import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilterController } from './controller/filter.controller';
import { FilterService } from './service/filter.service';
import { FilterRepository } from './repository/filter.repository';
import { UserSchema } from '../user/user-entity/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),],
  controllers: [FilterController],
  providers: [FilterService, FilterRepository]
})
export class FilterModule {}
