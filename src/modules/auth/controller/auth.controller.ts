import { Controller, Post, Body } from '@nestjs/common';
import { RequestLogin } from '../dto/auth.dto.request';
import { AuthService } from '../service/auth.service';
import { RequestRegister } from '../dto/auth.dto.request';
import { ResponseLogin } from '../dto/auth.response.dto';
import { ResponseRegister } from '../dto/auth.response.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post("login")
    async postlogin(@Body() body: RequestLogin): Promise<ResponseLogin>{
        console.log(body)
        return await this.authService.login(body)
    }

    @Post("register")
    async postregiter(@Body() body: RequestRegister): Promise<ResponseRegister>{
        console.log(body)
        return await this.authService.register(body)
    }
}