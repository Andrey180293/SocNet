export const updateObjectInArray = (
  array,
  actionId,
  objPropname,
  newObjProps
) => {
  return array.map((item) => {
    if (item[objPropname] === actionId) {
      return { ...item, ...newObjProps };
    }
    return item;
  });
};
