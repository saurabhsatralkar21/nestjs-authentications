import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "Saurabh",
            username: "saurabh",
            password: "password"
        },
        {
            id: 2,
            name: "James",
            username: "james",
            password: "password"
        }
    ];
}
