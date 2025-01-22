import { Injectable, Inject, forwardRef } from "@nestjs/common"
import { AuthService } from "src/auth/auth.service"
import { Repository } from "typeorm"
import { User } from "./user.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { CreateUserDto } from "./dtos/create-user.dto"

// export interface User {
//     id: number,
//     name: string,
//     email: string,
//     gender: string,
//     password: string,
//     isMarried: boolean
// }

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    getAllusers() {
        return this.userRepository.find()
    }

    public async createUser(userDto: CreateUserDto) {
        // Validate if a user exist with the given email
        const user = await this.userRepository.findOne({
            where: { email: userDto.email }
        })
        // Handle the error / exception
        if (user) {
            return 'The user with the given email alreday exists!'
        }
        // Create that user

        let newUser = this.userRepository.create(userDto)
        newUser = await this.userRepository.save(newUser)
        return newUser
    }
}