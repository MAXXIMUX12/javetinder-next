import { Controller, Post, Body, Put } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { RequestLogin, RequestRecoverPassword, RequestUpdatePassword } from '../dto/auth.dto.request';
import { RequestRegister } from '../dto/auth.dto.request';
import { ResponseLogin, ResponseLogout, ResponseRecoverPassword, ResponseRegister, ResponseUpdatePassword } from '../dto/auth.response.dto';

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

    @Post('logout')
    async logout(): Promise<ResponseLogout> {
        return this.authService.logout();
    }

    @Put('update-password')
    async updatePassword(@Body() body: RequestUpdatePassword): Promise<ResponseUpdatePassword> {
        return this.authService.updatePassword(body);
    }

    @Post('recover-password')
    async recoverPassword(@Body() body: RequestRecoverPassword): Promise<ResponseRecoverPassword> {
        return this.authService.recoverPassword(body);
    }
}