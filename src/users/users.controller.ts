import { Controller, Get, Param, Post, Query, ParseIntPipe, DefaultValuePipe, Body, ValidationPipe } from "@nestjs/common";
import { User, UserService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) {

    }
    @Get()
    getAllusers(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ): User[] {

        console.log(limit, page);

        // if (query.gender) return userService.getAllusers().filter(data => data.gender === query.gender)


        return this.userService.getAllusers()
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): User {

        console.log(typeof id);

        return this.userService.getUserById(id)
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {

        return 'A new user has been created!'
    }
}
