import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'

@Entity('Link')
export class LinkEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  title: string

  @Column()
  url: string

  @ManyToOne(() => User, (User) => User.storeLinks, {onDelete:'CASCADE'})
  user: User
}
