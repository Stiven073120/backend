import { Injectable } from '@nestjs/common';
import { PrismaClient, Integrante } from '@prisma/client';

@Injectable()
export class IntegrantesService {
  private prisma = new PrismaClient();

  async create(data: Omit<Integrante, 'id'>): Promise<Integrante> {
    return this.prisma.integrante.create({ data });
  }

  async findAll(): Promise<Integrante[]> {
    return this.prisma.integrante.findMany();
  }

  async findOne(id: number): Promise<Integrante | null> {
    return this.prisma.integrante.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<Integrante>): Promise<Integrante> {
    return this.prisma.integrante.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Integrante> {
    return this.prisma.integrante.delete({ where: { id } });
  }
}
