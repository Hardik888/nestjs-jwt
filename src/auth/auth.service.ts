import { Injectable, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export type Userinfo = {
    username: string
    password: string
}
@Injectable()
export class AuthService {
    private readonly username = "hardik"
    private readonly password = "sai"
    private readonly id = "asdasd-ASDaSDASD=as21312j3i"
    constructor(private jwtService: JwtService) { }

    authenticate(payload: Userinfo) {
        const { username, password } = payload;
        if (username === this.username && password === this.password) {

            const signedpayload = {
                username: this.username,
                sub: this.id
            }
            return {
                access_token: this.jwtService.sign(signedpayload)
            }
        }
        return null;
    }

}