import { AddAccountDTO } from '@app/presentation/dtos/account/add-accoubnt.dto';
import { ClientProxyProvider } from '@app/shared/providers/client-proxy.provider';
import { Body, Controller, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('account')
export class AccountController {
  constructor(private readonly clientProxyProvider: ClientProxyProvider) {}

  @Post()
  handleAddAccount(
    @Body() addAccountDTO: AddAccountDTO,
  ): Observable<ClientProxy> {
    return this.clientProxyProvider
      .handleUser()
      .emit('add.account', addAccountDTO);
  }
}
