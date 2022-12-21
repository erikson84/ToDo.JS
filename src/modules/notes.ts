type Note = {
    description: string;
    update: (note: Note, description: string) => Note;
};

type NoteList = Array<Note>;

const update = (note: Note, description: string): Note => {
    return { description: `${note.description}\n${description}`, update };
};

const noteFactory = (description: string): Note => {
    return { description, update };
};

export { Note, NoteList, noteFactory };
