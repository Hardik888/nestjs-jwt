import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { AuthService, Userinfo } from './auth.service'
import { JwtStrategy } from "./jwt.strategy";


@Controller()
export class AuthController {
    constructor
        (private authService: AuthService,
            private jwtStrategy: JwtStrategy) { }
    @Post('/auth')
    async authenticate(@Body() body: Userinfo): Promise<any> {
        const isauth = this.authService.authenticate(body);
        if (!isauth) {
            throw HttpStatus.BAD_REQUEST
        }
        return isauth
    }

}