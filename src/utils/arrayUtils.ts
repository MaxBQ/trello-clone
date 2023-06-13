type Item = {
  id: string;
};

export const findItemIndexById = <TItem extends Item>(
  item: TItem[],
  id: string
) => {
  return item.findIndex((item: TItem) => item.id === id);
};

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemIndex(array, from), item, to);
};
export function removeItemIndex<TItem>(array: TItem[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
export function insertItemAtIndex<TItem>(
  array: TItem[],
  item: TItem,
  index: number
) {
  return [...array.slice(0, index), item, ...array.slice(index)];
}
