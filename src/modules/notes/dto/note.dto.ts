export class CreateNoteDTO {
  title: string;
  description?: string;
  color?: string;
}

export class UpdateNoteDTO {
  title?: string;
  description?: string;
  color?: string;
}
