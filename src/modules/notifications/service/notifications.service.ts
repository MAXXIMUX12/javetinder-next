import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repository/notifications.repository';
import { CreateNotificationRequest, MarkAsReadRequest, DeleteNotificationRequest } from '../dto/notifications.request.dto';

@Injectable()
export class NotificationsService {
    constructor(private readonly notificationRepository: NotificationsRepository) {}

    async list(userId: string) {
        return this.notificationRepository.findByUser(userId);
    }

    async create(body: CreateNotificationRequest) {
        return this.notificationRepository.create(body);
    }

    async markAsRead(body: MarkAsReadRequest) {
        return this.notificationRepository.markAsRead(body.id);
    }

    async delete(body: DeleteNotificationRequest) {
        return this.notificationRepository.delete(body.id);
    }
}
