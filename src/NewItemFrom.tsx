import React, { useState } from "react";
import { useFocus } from "./utils/useFocus";
import { NewItemFromContainer, NewItemButton, NewItemInput } from "./styles";

type NewItemFromProps = {
	onAdd(text: string): void;
};

export const NewItemFrom = ({ onAdd }: NewItemFromProps) => {
	const [text, setText] = useState("");
	const inputRef = useFocus();

	const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			onAdd(text);
		}
	};

	return (
		<NewItemFromContainer>
			<NewItemInput
				ref={inputRef}
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyPress={handleAddText}
			/>
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
