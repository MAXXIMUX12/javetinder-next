import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/modules/user/user-entity/user.schema';
import { UpdateProfileRequestDto } from '../dto/updprofile.request.dto';

@Injectable()
export class ProfileService {
    constructor(@InjectModel('users') private readonly userModel: Model<User>) {}

    async getProfile(userId:string) {
        const user = await this.userModel.findById(userId);

        if (!user) throw new NotFoundException('Usuario no encontrado');

        return user;
    }

    async updateProfile(userId: string, body: UpdateProfileRequestDto) {
        const updated = await this.userModel.findByIdAndUpdate(userId, body, { new: true });

        if(!updated) {throw new NotFoundException("User not found");}

        return updated;
    }

    async deleteAccount(userId: string) {
        const deleted = await this.userModel.findByIdAndDelete(userId);

        if (!deleted) {throw new NotFoundException("User not found")};

        let response = {
            message: "Account deleted correctly"
        };
        return response
    }
}
