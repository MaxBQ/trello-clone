import { NewItemFrom } from "./NewItemFrom";
import { useState } from "react";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
	onAdd(text: string): void;
	toolingButtonText: string;
	dark?: boolean;
};

export const AddNewItem = (props: AddNewItemProps) => {
	const [showFrom, setShowFrom] = useState(false);
	const { onAdd, toolingButtonText, dark } = props;

	if (showFrom) {
		return (
			<NewItemFrom
				onAdd={(text) => {
					onAdd(text);
					setShowFrom(false);
				}}
			/>
		);
	}

	return (
		<AddItemButton dark={dark} onClick={() => setShowFrom(true)}>
			{toolingButtonText}
		</AddItemButton>
	);
};
