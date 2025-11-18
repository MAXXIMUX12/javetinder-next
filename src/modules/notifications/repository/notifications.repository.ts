import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notification } from '../entity/notification.entity';
import { Model } from 'mongoose';

@Injectable()
export class NotificationsRepository {
    constructor(@InjectModel('notificationes') private notificationModel: Model<Notification>) {}

    async findByUser(userId: string) {
        return this.notificationModel.find({ userId }).sort({ createdAt: -1 });
    }

    async create(data: Partial<Notification>) {
        const notif = new this.notificationModel(data);
        return notif.save();
    }

    async markAsRead(id: string) {
        return this.notificationModel.findByIdAndUpdate(
            id,
            { isRead: true },
            { new: true },
        );
    }

    async delete(id: string) {
        return this.notificationModel.findByIdAndDelete(id);
    }
}
