import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor() { }

    @Post()
    login(@Body() user: { email: String, password: String }) {

    }
}
