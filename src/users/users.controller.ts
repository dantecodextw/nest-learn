import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { User, UserService } from "./users.service";

@Controller('users')
export class UsersController {
    @Get()
    getAllusers(@Query() query: any): User[] {
        const userService = new UserService()
        if (query.gender) return userService.getAllusers().filter(data => data.gender === query.gender)


        return userService.getAllusers()
    }

    @Get(':id')
    getUserById(@Param() param: any): User {
        const userService = new UserService()
        return userService.getUserById(param)
    }

    @Post()
    createUser() {
        const userService = new UserService()

    }
}
