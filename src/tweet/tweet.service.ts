import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetService {
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
        return this.tweets.filter(data => data.userId === userId)
    }
}
