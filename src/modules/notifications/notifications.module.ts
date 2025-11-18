import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsService } from './service/notifications.service';
import { NotificationsRepository } from './repository/notifications.repository';
import { NotificationSchema } from './entity/notification.entity';
import { NotificationsController } from './controller/notifications.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'notifications', schema: NotificationSchema },]),],
  providers: [NotificationsService, NotificationsRepository],
  controllers: [NotificationsController],
  exports: [NotificationsService]
})
export class NotificationsModule {}
