type ChecklistItem = {
    description: string;
    done: boolean;
    dueDate?: Date;
};

type Checklist = Array<ChecklistItem>;

const checklistItemFactory = (
    description: string,
    done: boolean,
    dueDate?: Date
): ChecklistItem => {
    return {
        description,
        done,
        dueDate,
    };
};

const toggleChecklistItem = (checklistItem: ChecklistItem): ChecklistItem => {
    const newChecklistItem = { ...checklistItem };
    newChecklistItem.done = !newChecklistItem.done;
    return newChecklistItem;
};

const updateChecklistDate = (
    checklistItem: ChecklistItem,
    dueDate: Date
): ChecklistItem => {
    const newChecklistItem = { ...checklistItem };
    newChecklistItem.dueDate = dueDate;
    return newChecklistItem;
};

export {
    ChecklistItem,
    Checklist,
    checklistItemFactory,
    toggleChecklistItem,
    updateChecklistDate,
};
