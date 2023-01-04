import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class GiftEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({nullable:true})
    description: string

    @Column({nullable:true})
    url: string

    @Column({nullable:true})
    imageUrl: string

    @Column({default: false})
    isReserved: boolean
}