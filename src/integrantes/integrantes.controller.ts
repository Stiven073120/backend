import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { IntegrantesService } from './integrantes.service';
import { Integrante } from '@prisma/client';

@Controller('integrantes')
export class IntegrantesController {
  constructor(private readonly integrantesService: IntegrantesService) {}

  @Post()
  async create(@Body() data: Omit<Integrante, 'id'>): Promise<Integrante> {
    return this.integrantesService.create(data);
  }

  @Get()
  async findAll(): Promise<Integrante[]> {
    return this.integrantesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Integrante | null> {
    return this.integrantesService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Integrante>,
  ): Promise<Integrante> {
    return this.integrantesService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Integrante> {
    return this.integrantesService.remove(+id);
  }
}
