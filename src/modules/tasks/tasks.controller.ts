import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('api/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDTO) {
    return this.tasksService.createTask(newTask);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() updatedTask: UpdateTaskDTO) {
    return this.tasksService.updateTask(id, updatedTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(id);
  }
}
