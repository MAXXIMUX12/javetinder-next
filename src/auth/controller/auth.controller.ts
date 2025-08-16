import { Controller, Post, Body } from '@nestjs/common';
import { RequestLogin } from '../dto/auth.dto.request';
import { AuthService } from '../service/auth.service';
import { RequestRegister } from '../dto/auth.dto.request';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post("login")
    postlogon(@Body() body: RequestLogin): string{
        console.log(body)
        return this.authService.login(body)
    }

    @Post("register")
    postregiter(@Body() body: RequestRegister): string{
        console.log(body)
        return this.authService.register(body)
    }
}