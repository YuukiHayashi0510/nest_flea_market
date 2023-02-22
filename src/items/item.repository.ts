import { Item } from 'src/entities/item.entity';
import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item-status.enum';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  async createItem(createItemDto: CreateItemDto, user: User): Promise<Item> {
    const { name, price, description } = createItemDto;
    const date = new Date().toISOString();
    const item = this.create({
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
      createdAt: date,
      updatedAt: date,
      user,
    });

    await this.save(item);

    return item;
  }
}
