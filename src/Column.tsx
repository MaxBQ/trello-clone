import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
	text: string;
	id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
	const { getTasksBayListId } = useAppState();
	const tasks = getTasksBayListId(id);
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{tasks.map((task) => (
				<Card text={task.text} key={task.id} id={task.id} />
			))}
			<AddNewItem
				toggleButtonText='+ Add another list'
				onAdd={console.log}
				dark
			/>
		</ColumnContainer>
	);
};
