type Note = {
    description: string;
};

const noteFactory = (description: string): Note => {
    return { description };
};

export { Note, noteFactory };
