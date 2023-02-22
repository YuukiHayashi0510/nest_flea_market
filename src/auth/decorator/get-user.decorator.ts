import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// 実行中の流れに関するものを取得するExecutionCtx
export const GetUser = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
