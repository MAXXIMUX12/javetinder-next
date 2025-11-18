export class CreateNotificationRequest {
  userId: string;
  title: string;
  description: string;
}

export class MarkAsReadRequest {
  id: string;
}

export class DeleteNotificationRequest {
  id: string;
}
