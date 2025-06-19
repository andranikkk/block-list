/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const SessionInfo = createParamDecorator(
  (_, ctx: ExecutionContext) => ctx.switchToHttp().getRequest().session,
);
