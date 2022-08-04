import { Column } from "./Column";
import { Card } from "./Card";

import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";

export const App = () => {
	return (
		<AppContainer>
			<AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
		</AppContainer>
	);
};
