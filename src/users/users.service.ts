export interface User {
    id: number,
    name: string,
    age: number,
    gender: string,
    isMarried: boolean
}

export class UserService {
    users: User[] = [
        { id: 1, name: 'john', age: 28, gender: 'male', isMarried: false },
        { id: 2, name: 'Alice', age: 34, gender: 'female', isMarried: true },
        { id: 3, name: 'Bob', age: 25, gender: 'male', isMarried: false },
        { id: 4, name: 'Eve', age: 42, gender: 'female', isMarried: true }
    ]
    getAllusers(): User[] {
        return this.users
    }

    getUserById({ id }): User {
        return this.users.find(data => data.id === +id)
    }

    createUser(user: User): void {
        this.users.push(user)
    }
}