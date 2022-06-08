import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateNoteDTO, UpdateNoteDTO } from './dto/note.dto';
import { NotesService } from './notes.service';

@ApiTags('Notes')
@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.notesService.findOne(id);
  }

  @Post()
  createNote(@Body() newNote: CreateNoteDTO) {
    return this.notesService.createNote(newNote);
  }

  @Put(':id')
  updateNote(@Param('id') id: number, @Body() updatedNote: UpdateNoteDTO) {
    return this.notesService.updateNote(id, updatedNote);
  }

  @Delete(':id')
  deleteNote(@Param('id') id: number) {
    return this.notesService.deleteNote(id);
  }
}
