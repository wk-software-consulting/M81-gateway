import { forwardRef, Module } from '@nestjs/common';
import { AccountModule } from '@app/module/account/account.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    forwardRef(() => AccountModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
