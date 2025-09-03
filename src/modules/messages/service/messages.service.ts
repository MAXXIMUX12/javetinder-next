import { Injectable } from '@nestjs/common';
import { Repository } from '../repository/repository';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Message } from './entities/message.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class MessagesService {
    constructor(private readonly repo: Repository) {}

    
}
