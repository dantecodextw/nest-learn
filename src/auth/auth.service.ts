import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor() { }

    isAuthenticated: Boolean = false

    login(email: String, password: String) {

    }
}
