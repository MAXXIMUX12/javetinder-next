import { Controller } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UpdateProfileRequestDto } from 'src/modules/profile/dto/updprofile.request.dto';

@Controller('users')
export class UserController {}
