export const getFormatedDate = (timestamp: number) => {
  const date = new Date(1000 * timestamp);

  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
