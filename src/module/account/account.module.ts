import { AccountController } from '@app/presentation/account/controllers/account.controller';
import { ClientProxyModule } from '@app/shared/providers/client-proxy.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ClientProxyModule],
  controllers: [AccountController],
})
export class AccountModule {}
