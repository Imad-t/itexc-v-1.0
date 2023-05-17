import { FileEntity } from 'src/nestjs/entities/file.entity'
import { User } from 'src/users/entities/user.entity'
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm'

@Entity('products')
export class ProductEntity {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  category: string

  @Column({ type: 'text' })
  type: string

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'integer' })
  price: number

  @Column({ type: 'text' })
  description: string

  @Column({ type: 'integer' })
  quantity: number

  @Column({ type: 'date' })
  lastUpdate: Date

  @ManyToOne(() => User, (User) => User.products, { onDelete: 'CASCADE' })
  user: User

  @OneToOne(() => FileEntity, { eager: true, cascade: true, nullable: true, onDelete:'SET NULL' })
  @JoinColumn()
  picture: FileEntity

  //bi-directional relation requires FileEntity to have property 'product'.
  @OneToMany(() => FileEntity, (album) => album.product , { eager: true, cascade: true, nullable: true , onDelete:'SET NULL' })
  @JoinColumn()
  album: FileEntity[]

  @BeforeInsert()
  @BeforeUpdate()
  setUpdateTime() {
    this.lastUpdate = new Date()
  }
}
