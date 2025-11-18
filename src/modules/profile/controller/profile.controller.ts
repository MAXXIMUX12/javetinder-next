import { Controller, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { ProfileService } from '../service/profile.service';
import { UpdateProfileRequestDto } from '../dto/updprofile.request.dto';
import { UpdateProfileResponseDto } from '../dto/updProfilr.response.dto';
import { GetProfileResponseDto } from '../dto/getProfile.response.dto';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Get("id")
    async getProfile(@Param('id') userId: string,): Promise<GetProfileResponseDto> {
        const user = await this.profileService.getProfile(userId);
        return user as GetProfileResponseDto;
    }

    @Put(":id")
    async updateProfile(@Param('id') userId: string, @Body() body: UpdateProfileRequestDto): Promise<UpdateProfileResponseDto> {
        return await this.profileService.updateProfile(userId, body) as UpdateProfileResponseDto;
    }

    @Delete(":id")
    async deleteAccount(@Param('id') userId: string) {
        return this.profileService.deleteAccount(userId);
    }
}
