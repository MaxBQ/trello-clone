import { createContext, useContext, FC, ReactNode } from "react";

type Task = {
	id: string;
	text: string;
};

type List = {
	id: string;
	list: string;
	task: Task[];
};

export type AppState = {
	lists: List[];
};

type AppStateContextProps = {
	lists: List[];
	getTasksBayListId(id: string): Task[];
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
			list: "To Do",
			task: [{ id: "c0", text: "Generate app scaffold" }],
		},
		{
			id: "1",
			list: "In Progress",
			task: [{ id: "c2", text: "Learn Typescript" }],
		},
		{
			id: "2",
			list: "Done",
			task: [{ id: "c3", text: "Begin to use static typing" }],
		},
	],
};

export const AppStateProvider: FC<AppSPChildren> = ({ children }) => {
	const { lists } = appData;

	const getTasksBayListId = (id: string) => {
		return lists.find((list) => list.id === id)?.task || [];
	};

	return (
		<AppStateContext.Provider value={{ lists, getTasksBayListId }}>
			{children}
		</AppStateContext.Provider>
	);
};
