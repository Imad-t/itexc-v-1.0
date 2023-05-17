import { ProductEntity } from 'src/product/entities/product.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'text', nullable: true })
  name?: string | null

  @Column({ type: 'text' })
  url?: string

  // TODO why expose here ?
  @Column({ nullable: true })
  mimetype?: string

  @Column({ nullable: true })
  size?: number

  @ManyToOne(() => ProductEntity, (product) => product.album, { nullable: true, onDelete: 'CASCADE' })
  product: ProductEntity
}
