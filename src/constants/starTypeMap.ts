import { colorFilter, handRight, happy, ribbon, rocket } from 'ionicons/icons';

export const STAR_TYPE_ICON_MAP: {
  [key: string]: {
    icon: string;
    color: string;
  };
} = {
  1: {
    icon: handRight,
    color: 'tertiary',
  },
  2: {
    icon: ribbon,
    color: 'danger',
  },
  3: {
    icon: colorFilter,
    color: 'primary',
  },
  4: {
    icon: rocket,
    color: 'warning',
  },
  5: {
    icon: happy,
    color: 'success',
  },
};
