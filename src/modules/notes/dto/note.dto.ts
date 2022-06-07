export class CreateNoteDTO {
  readonly title: string;
  readonly description?: string;
  readonly color?: string;
}

export class UpdateNoteDTO {
  readonly title?: string;
  readonly description?: string;
  readonly color?: string;
}
