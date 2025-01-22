import { timestamp } from "rxjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 100,
        nullable: true
    })
    firstName: string;

    @Column({
        type: "varchar",
        length: 100,
        nullable: true
    })
    lastName: string;

    @Column({
        type: "varchar",
        nullable: true,
        length: 10
    })
    gender: string;

    @Column({
        type: 'timestamp',
        nullable: true
    })
    dateOfBirth: Date

    @Column({
        type: 'text',
        nullable: true
    })
    bio: string

    @Column({
        type: 'text',
        nullable: true
    })
    profileImage: string
}