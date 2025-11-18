import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserFeedEntity } from '../home-entity/userfeed.entity';

@Injectable()
export class HomeRepository {
    constructor(@InjectModel('userfeed') private readonly feedModel: Model<UserFeedEntity>) {}

    async getAllUsers() {
        let response2 = await this.feedModel.find().exec(); 
        return response2
    }

    async updateLike(targetId: string, like: boolean) {
        let response3 = this.feedModel.updateOne({_id: targetId}, {like}).exec();
        return response3;
    }
}
