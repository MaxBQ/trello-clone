import { useState } from "react";
import { NewItemFromContainer, NewItemButton, NewItemInput } from "./styles";

type NewItemFromProps = {
	onAdd(text: string): void;
};

export const NewItemFrom = ({ onAdd }: NewItemFromProps) => {
	const [text, setText] = useState("");

	return (
		<NewItemFromContainer>
			<NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
			<NewItemButton
				onClick={() => {
					onAdd(text);
				}}
			>
				Create
			</NewItemButton>
		</NewItemFromContainer>
	);
};
