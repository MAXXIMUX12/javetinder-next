import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersEntity } from '../entity/user.entity';

@Injectable()
export class AuthRepository {
    //query - ubicarse en la coleccion - db.users
    constructor(@InjectModel("users") private readonly userModel: Model<UsersEntity>) {}

    async createUser(user: any) {
        return await this.userModel.create(user);
    }

    async getEmail(email: string): Promise<any> {
        let response = await this.userModel.findOne({ email }).exec();
        return response;
    }

    async updatePassword(email: string, newPassword: string) {
        let responsepass = await this.userModel.updateOne( { email }, { password: newPassword }).exec();
        return responsepass;
    }

    async getId(id: string): Promise<any> {
        let responseid = await this.userModel.findById(id).exec();
        return responseid;
    }

    async softDelete(id: string) {
        return this.userModel.findByIdAndUpdate(id, {active: false}).exec();
    }

    async updateProfile(id: string, payload: Partial<UsersEntity>) {
        return this.userModel.findByIdAndUpdate(id, payload, { new: true }).exec();
    }
}