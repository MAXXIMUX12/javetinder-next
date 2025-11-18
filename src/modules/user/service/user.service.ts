import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user-entity/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async findAll() {
        return this.userModel.find().exec();
    }

    async getID(id: string) {
        return this.userModel.findById(id);
    }

    async updateMatch(id: string, like: boolean) {
    return this.userModel.findByIdAndUpdate(
      id,
      { like },
      { new: true }
    );
  }
}
