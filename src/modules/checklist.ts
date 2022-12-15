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
    checklistItem.done = !checklistItem.done;
    return checklistItem;
};

const changeChecklistDate = (
    checklistItem: ChecklistItem,
    dueDate: Date
): ChecklistItem => {
    checklistItem.dueDate = dueDate;
    return checklistItem;
};

export {
    ChecklistItem,
    Checklist,
    checklistItemFactory,
    toggleChecklistItem,
    changeChecklistDate,
};
