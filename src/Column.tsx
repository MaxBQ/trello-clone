import { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
	text?: string;
	children?: React.ReactNode;
};

export const Column: FC<ColumnProps> = ({ text, children }) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{children}
			<AddNewItem
				toggleButtonText='+ Add another list'
				onAdd={console.log}
				dark
			/>
		</ColumnContainer>
	);
};
