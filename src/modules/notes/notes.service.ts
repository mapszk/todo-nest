import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDTO, UpdateNoteDTO } from './dto/note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private notesRepository: Repository<Note>,
  ) {}

  async findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  async findOne(id: number): Promise<Note> {
    return this.notesRepository.findOne(id);
  }

  async createNote(newNote: CreateNoteDTO): Promise<Note> {
    const note = this.notesRepository.create(newNote);
    const saved = await this.notesRepository.save(note);
    return saved;
  }

  async updateNote(id: number, updatedNote: UpdateNoteDTO): Promise<Note> {
    const note = await this.notesRepository.findOne(id);
    this.notesRepository.merge(note, updatedNote);
    const updated = await this.notesRepository.findOne(id);
    return updated;
  }

  async deleteNote(id: number): Promise<void> {
    await this.notesRepository.delete(id);
  }
}
