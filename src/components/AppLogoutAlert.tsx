import { IonAlert, IonPage } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { toggleAlertState } from '../redux/common/logoutAlert.slice';
import { logout } from '../redux/auth/authorized.slice';
import { useHistory } from 'react-router';

export type AppLogoutAlertProps = {
  isOpen: boolean;
};

export const AppLogoutAlert = ({ isOpen }: AppLogoutAlertProps) => {
  const appDispatch = useDispatch<AppDispatch>();

  const history = useHistory();

  const handleCancelClick = () => {
    appDispatch(toggleAlertState(false));
  };

  const handleConfirmClick = () => {
    appDispatch(logout());
    appDispatch(toggleAlertState(false));
    history.push('/auth/login');
  };

  return (
    <IonPage>
      <IonAlert
        isOpen={isOpen}
        subHeader="Are you sure to logout ?"
        backdropDismiss={false}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: handleCancelClick,
          },
          {
            text: 'Confirm',
            role: 'confirm',
            handler: handleConfirmClick,
          },
        ]}
      ></IonAlert>
    </IonPage>
  );
};
