import styled from "styled-components";

type AddItemButtonProps = {
  dark?: boolean;
};
interface DragPreviewContainerProps {
  isHidden?: boolean;
}

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;
export const ColumnTitle = styled.div`
  padding: 6px 18px 12px;
  font-weight: bold;
`;
export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;
export const NewItemFromContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #5cca44;
  border-radius: 3px;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  align-items: center;
  cursor: pointer;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  border: none;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
