import { Controller, Get, Param, Patch, Delete, Post, Body } from '@nestjs/common';
import { NotificationsService } from '../service/notifications.service';
import { CreateNotificationRequest, MarkAsReadRequest, DeleteNotificationRequest } from '../dto/notifications.request.dto';
import { NotificationResponse } from '../dto/notifications.response.dto';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly service: NotificationsService) {}

    @Get(':userId')
    async list(@Param('userId') userId: string) {
        return this.service.list(userId);
    }

    @Post()
    async create(@Body() body: CreateNotificationRequest) {
        return await this.service.create(body);
    }

    @Patch('read')
    markAsRead(@Body() body: MarkAsReadRequest) {
        return this.service.markAsRead(body);
    }

    @Delete()
    delete(@Body() body: DeleteNotificationRequest) {
        return this.service.delete(body);
    }
}
