import { SetMetadata } from '@nestjs/common';

export const Role = (...statuses: string[]) =>
  SetMetadata('statuses', statuses);
// key value形式でメタデータに登録
