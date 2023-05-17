import { DataSource, Repository } from 'typeorm'
import { LinkEntity } from '../entities/link.entity'
import { Injectable } from '@nestjs/common'
import { User } from '../entities/user.entity'
import { plainToInstance } from 'class-transformer'

@Injectable()
export class LinkRepository extends Repository<LinkEntity> {
  constructor(private dataSource: DataSource) {
    super(LinkEntity, dataSource.createEntityManager())
  }

  async createUserLinks(id: number, ...links: [string, string]): Promise<LinkEntity[]> {
    const userRepo = this.dataSource.getRepository(User)
    const user = await userRepo.findOneBy({ id: id })
    let result: LinkEntity[]
    if (user) {
      links.forEach(async (e) => {
        result.push(
          await this.save(
            plainToInstance(LinkEntity, {
              title: e[0],
              url: e[1],
              user: user,
            })
          )
        )
      })
    }
    return result
  }

  async updateUserLinks(id: number, ...links: [string, string]) {
    const userRepo = this.dataSource.getRepository(User)
    const user = await userRepo.findOneBy({ id: id })
    if (user) {
      links.forEach((e) => {
        user.storeLinks.push(
          plainToInstance(LinkEntity, {
            title: e[0],
            url: e[1],
            user: user,
          })
        )
      })
    }
  }
}
