import { Injectable } from "@nestjs/common"

export interface User {
    id: number,
    name: string,
    email: string,
    gender: string,
    isMarried: boolean
}

@Injectable()
export class UserService {
    users: User[] = [
        { id: 1, name: 'john', email: 'john@gmail.com', gender: 'male', isMarried: false },
        { id: 2, name: 'Alice', email: 'Alice@gmail.com', gender: 'female', isMarried: true },
        { id: 3, name: 'Bob', email: 'Bob@gmail.com', gender: 'male', isMarried: false },
        { id: 4, name: 'Eve', email: 'Eve@gmail.com', gender: 'female', isMarried: true }
    ]
    getAllusers(): User[] {
        return this.users
    }

    getUserById(id: number): User {
        return this.users.find(data => data.id === id)
    }

    createUser(user: User): void {
        this.users.push(user)
    }
}