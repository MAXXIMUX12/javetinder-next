import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersEntity } from '../entity/user.entity';

@Injectable()
export class AuthRepository {
    //query - ubicarse en la coleccion - db.users
    constructor(@InjectModel("users") private readonly userModel: Model<UsersEntity>) {}
    async getEmail(email: string): Promise<any> {
        let response = await this.userModel.find({ email }).exec();
        return response;
    }
}