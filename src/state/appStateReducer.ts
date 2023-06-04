import { nanoid } from "nanoid";
import { Action } from "./actions";
import { findItemIndexById } from "../utils/arrayUtils";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  task: Task[];
};

export type AppState = {
  lists: List[];
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({ id: nanoid(), text: action.payload, task: [] });
      break;
    }
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);
      draft.lists[targetListIndex].task.push({ id: nanoid(), text });
      break;
    }
    default: {
      break;
    }
  }
};
