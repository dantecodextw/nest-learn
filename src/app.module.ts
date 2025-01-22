import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.entity';

@Module({
  imports: [
    UsersModule,
    TweetModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        // entities: [User],
        autoLoadEntities: true,

        synchronize: true,
        url: "postgresql://nestjs_owner:npg_EhC6iey9jXtq@ep-young-night-a1tr98tb.ap-southeast-1.aws.neon.tech/nestjs?sslmode=require"
        // host: 'localhost',
        // port: 5432,
        // username: 'postgres',
        // password: "password",
        // database: 'nestjs'
      })
    }),
    ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
