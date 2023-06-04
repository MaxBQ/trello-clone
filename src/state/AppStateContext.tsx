import { createContext, useContext, FC, ReactNode, Dispatch } from "react";
import { useImmerReducer } from "use-immer";
import { Task, List, AppState, appStateReducer } from "./appStateReducer";
import { Action } from "./actions";
type AppStateContextProps = {
  lists: List[];
  getTasksBayListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

type AppSPChildren = {
  children: ReactNode;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const useAppState = () => {
  return useContext(AppStateContext);
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      task: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      task: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      task: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

export const AppStateProvider: FC<AppSPChildren> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;
  const getTasksBayListId = (id: string) => {
    return lists.find((list) => list.id === id)?.task || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksBayListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
