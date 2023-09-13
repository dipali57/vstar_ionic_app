import { useDispatch, useSelector } from 'react-redux';
import { store } from '../utils/ClientStorage';
import { AppDispatch, AppState } from '../redux/store';
import { autoLoginUser } from '../redux/auth/auth.actions';
import { useEffect } from 'react';

export const useAuthorized = () => {
  console.log('authorized function call');
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    store.get('email').then((value) => {
      if (value) {
        appDispatch(autoLoginUser({ email: value }));
      }
    });
  }, [appDispatch]);

  const authUserData = useSelector(
    (state: AppState) => state.auth.authorizedUserData.data
  );
  console.log('data', authUserData[0]?.id);
  return !!authUserData[0]?.id;
};
