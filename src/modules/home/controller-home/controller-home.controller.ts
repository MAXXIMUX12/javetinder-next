import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ServiceHomeService } from '../service-home/service-home.service';
import { LikeDto } from '../home-dto/home.dto';

@Controller('controller-home')
export class ControllerHomeController {
    constructor(private readonly homeService: ServiceHomeService) {}

    @Get(":userId")
    async getUsers(@Param('userId') userId: string) {
        return await this.homeService.getUsers(userId);
    }

    @Post("like/:userId")
    async likeUser(@Param('userId') userId: string, @Body() body: LikeDto,) {
        return this.homeService.likeUser(userId, body.targetUserId);
    }
}
