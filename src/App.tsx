import { FC, PropsWithChildren } from "react";
import { Column } from "./Column";
import { Card } from "./Card";
import { AppContainer } from "./styles";

export const App: FC<PropsWithChildren> = ({ children }) => {
	return <AppContainer>{children}Columns will go here</AppContainer>;
};
