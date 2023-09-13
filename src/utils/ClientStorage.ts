import { Preferences } from '@capacitor/preferences';

type ClientStorageReturnType = {
  set: (key: string, value: string) => void;
  get: (key: string) => Promise<string | null>;
  remove: (key: string) => void;
};

export const store: ClientStorageReturnType = {
  set: async (key: string, value: string) => {
    await Preferences.set({
      key: key,
      value: value,
    });
  },
  get: async (key: string) => {
    const { value } = await Preferences.get({ key: key });
    return value;
  },
  remove: async (key: string) => {
    await Preferences.remove({ key: key });
  },
};
