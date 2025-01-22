import { Controller, Get, Param, Post, Query, ParseIntPipe, DefaultValuePipe, Body, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) { }
    @Get()
    getAllusers() {
        return this.userService.getAllusers()
    }

    // @Get(':id')
    // getUserById(@Param('id', ParseIntPipe) id: number): User {

    //     console.log(typeof id);

    //     return this.userService.getUserById(id)
    // }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user)
    }
}
