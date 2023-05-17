import { FileEntity } from 'src/nestjs/entities/file.entity'
import { ProductEntity } from 'src/product/entities/product.entity'
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '../role/role.enum'
import { LinkEntity } from './link.entity'

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 30,
  })
  username: string

  @Column()
  password_digest: string

  @Column()
  fullName: string

  @Column()
  email: string

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Customer,
  })
  role: Role

  @Column({ nullable: true })
  phoneNumber: string

  @Column({ nullable: true })
  address: string

  @OneToOne(() => FileEntity, { eager: true, cascade: true, nullable: true })
  @JoinColumn()
  picture: FileEntity

  //Business:

  @Column({ type: 'boolean' })
  isBusiness: boolean

  @Column({ nullable: true })
  storeName: string

  @Column({ nullable: true })
  storeAddress: string

  @Column({ nullable: true })
  storeEmail: string

  @Column({ nullable: true })
  storeType: string

  @Column({ nullable: true })
  storeCategory: string

  @OneToOne(() => FileEntity, { eager: true, cascade: true, nullable: true })
  @JoinColumn()
  storeLogo: FileEntity

  @OneToMany(() => LinkEntity, (storeLinks) => storeLinks.user, { eager: true, cascade: true, nullable: true, onDelete:'SET NULL' })
  @JoinColumn()
  storeLinks: LinkEntity[]

  @Column({ nullable: true })
  commerceRegisterNumber: string

  @Column({ nullable: true })
  nifNumber: string

  @OneToMany(() => ProductEntity, (products) => products.user, { eager: true, cascade: true, onDelete:'SET NULL'})
  @JoinColumn()
  products: ProductEntity[]
}
