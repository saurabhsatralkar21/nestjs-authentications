import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authServe: AuthService) {
        super(); // config, when the authentication strategy will be from 3rd party provider
    }

    async validate(username:string, password: string): Promise<any>{
        const user = await this.authServe.validaUser(username, password);

        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }
}