export const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDay()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};
