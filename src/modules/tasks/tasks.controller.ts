import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './interfaces/task.interface';

const tasks: Task[] = [
  { id: 1, description: 'tarea 1', completed: false },
  { id: 2, description: 'tarea 2', completed: true },
  { id: 3, description: 'tarea 3', completed: false },
];

@Controller('api/tasks')
export class TasksController {
  @Get()
  getAll(): Task[] {
    return tasks;
  }
  @Get(':id')
  getOne(@Param('id') id: number): Task {
    return tasks.find((task: Task) => task.id === id);
  }
}
