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
    return { ...checklistItem, done: !checklistItem.done };
};

const updateChecklistDate = (
    checklistItem: ChecklistItem,
    dueDate: Date
): ChecklistItem => {
    return { ...checklistItem, dueDate: dueDate };
};

export {
    ChecklistItem,
    Checklist,
    checklistItemFactory,
    toggleChecklistItem,
    updateChecklistDate,
};
