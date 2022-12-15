type Note = {
    description: string;
};

type NoteList = Array<Note>;

const noteFactory = (description: string) => {
    return { description };
};

export { Note, NoteList, noteFactory };
