import { Injectable } from '@nestjs/common';
import { PrismaClient, Todo } from '@prisma/client';

@Injectable()
export class TodosService {
  private prisma = new PrismaClient();

  async create(data: Omit<Todo, 'id'>): Promise<Todo> {
    return this.prisma.todo.create({ data });
  }

  async findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async findOne(id: number): Promise<Todo | null> {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<Todo>): Promise<Todo> {
    return this.prisma.todo.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Todo> {
    return this.prisma.todo.delete({ where: { id } });
  }
}
