type Item = {
  id: string;
};

export const findItemIndexById = <TItem extends Item>(
  item: TItem[],
  id: string
) => {
  return item.findIndex((item: TItem) => item.id === id);
};
