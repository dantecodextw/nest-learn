import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly userService: UserService) { }

    tweets: { text: String, date: Date, userId: Number }[] = [
        { text: 'Hello world!', date: new Date('2025-01-20'), userId: 1 },
        { text: 'NestJS is great!', date: new Date('2025-01-19'), userId: 2 },
        { text: 'Learning TypeScript is fun!', date: new Date('2025-01-18'), userId: 3 },
        { text: 'Building APIs made easy.', date: new Date('2025-01-17'), userId: 1 },
        { text: 'Testing is essential.', date: new Date('2025-01-16'), userId: 2 },
        { text: 'Error handling is important.', date: new Date('2025-01-15'), userId: 3 },
        { text: 'Decorators are powerful.', date: new Date('2025-01-14'), userId: 1 },
        { text: 'Dependency injection rocks!', date: new Date('2025-01-13'), userId: 2 },
        { text: 'Let’s write clean code.', date: new Date('2025-01-12'), userId: 3 },
        { text: 'Modular design is key.', date: new Date('2025-01-11'), userId: 1 }
    ];

    getTweets(userId: Number) {
        const user = this.userService.getUserById(userId)
        const tweets = this.tweets.filter(data => data.userId === userId)

        // return {
        //     tweets,
        //     author: user.name
        // }
        return tweets.map(data => {
            return { ...data, author: user.name }
        })
    }
}
