import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOne(id);
  }

  createTask(newTask: CreateTaskDTO): Promise<Task> {
    const task = this.tasksRepository.create(newTask);
    return this.tasksRepository.save(task);
  }

  async updateTask(id: number, updatedTask: UpdateTaskDTO): Promise<Task> {
    const task = await this.tasksRepository.findOne(id);
    this.tasksRepository.merge(task, updatedTask);
    return this.tasksRepository.save(task);
  }

  async deleteTask(id: number): Promise<boolean> {
    await this.tasksRepository.delete(id);
    return true;
  }
}
