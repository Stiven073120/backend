import { Module } from '@nestjs/common';
import { IntegrantesService } from './integrantes.service';
import { IntegrantesController } from './integrantes.controller';

@Module({
  providers: [IntegrantesService],
  controllers: [IntegrantesController],
})
export class IntegrantesModule {}
