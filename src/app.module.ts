import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [ItemsModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
