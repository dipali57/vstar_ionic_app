export const getTabBarStyles = (
  show: boolean
):
  | {
      [key: string]: string;
    }
  | undefined => {
  return show
    ? {
        transition: 'opacity 0.5s, height 0.5s',
        opacity: '1',
      }
    : {
        transition: 'opacity 0.5s, height 0.5s',
        opacity: '0',
        height: '0px',
      };
};
