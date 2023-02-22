import { Exclude } from 'class-transformer';
import { UserStatus } from 'src/auth/user-status.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  @Exclude({ toPlainOnly: true }) // パスワードをレスポンスから外す
  password: string;

  @Column()
  status: UserStatus;

  // 1対多
  @OneToMany(() => Item, (item) => item.user)
  items: Item[];
}
