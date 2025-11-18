import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../user/user-entity/user.schema'


@Injectable()
export class ServiceHomeService {
    constructor(@InjectModel(User.name) private userModel: Model<User>,) {}

    async getUsers(currentUserId: string) {
        return await this.userModel.find({ _id: { $ne: currentUserId } }).lean();
    }

    async likeUser(currentUserId: string, targetUserId: string) {
        if (currentUserId === targetUserId) {
            throw new Error("No puedes hacerte like a ti mismo");
        }

        const currentUser = await this.userModel.findById(currentUserId);
        const targetUser = await this.userModel.findById(targetUserId);

        if (!currentUser || !targetUser) {
            throw new NotFoundException("Usuario no encontrado");
        }

        // Agregar Like
        if (!currentUser.likes.includes(targetUserId)) {
            currentUser.likes.push(targetUserId);
            await currentUser.save();
        }

        // Ambos usurios se dieron like
        const isMatch = targetUser.likes.includes(currentUserId);

        if (isMatch) {
            if (!currentUser.matches.includes(targetUserId)) {
                currentUser.matches.push(targetUserId);
                targetUser.matches.push(currentUserId);

                await currentUser.save();
                await targetUser.save();
            }

            return {
                match: true,
                message: "¡It's match!",
            };
        }

        return {
            match: false,
            message: "Liken sent, waiting for response"
        };
    }
}
