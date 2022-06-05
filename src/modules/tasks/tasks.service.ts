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

  findAll() {
    return this.tasksRepository.find();
  }

  findOne(id: number) {
    return this.tasksRepository.findOneBy({ id });
  }

  createTask(newTask: CreateTaskDTO) {
    const task = this.tasksRepository.create(newTask);
    return this.tasksRepository.save(task);
  }

  async updateTask(id: number, updatedTask: UpdateTaskDTO) {
    const task = await this.tasksRepository.findOneBy({ id });
    this.tasksRepository.merge(task, updatedTask);
    return this.tasksRepository.save(task);
  }

  async deleteTask(id: number) {
    await this.tasksRepository.delete(id);
    return true;
  }
}
