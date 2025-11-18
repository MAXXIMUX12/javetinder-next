import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/modules/user/user-entity/user.schema';

@Injectable()
export class FilterRepository {
    constructor(@InjectModel('users') private readonly userModel: Model<User>) {}

    async setFilter(userId: string, path: string, value: string) {
        return this.userModel.findByIdAndUpdate(userId, {[path]: value}, {new: true});
    }

    async removeFilter(userId: string, path: string) {
        return this.userModel.findByIdAndUpdate(userId, { $unset: { [path]: '' }  }, {new: true});
    }
}
