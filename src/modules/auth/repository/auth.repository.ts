import { Injectable } from '@nestjs/common';

let userData = [{
    email: "isa@gmail.com",
    password: "123"
},
{
    email: "isa1@gmail.com",
    password: "1234"
},]

@Injectable()
export class AuthRepository {
    getEmail(email: string): any {
        let response = userData.find((user) => user.email === email)
        return response;
    }
}