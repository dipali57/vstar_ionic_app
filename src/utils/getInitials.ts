export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((x) => x.charAt(0))
    .join('')
    .substr(0, 2)
    .toUpperCase();
};
