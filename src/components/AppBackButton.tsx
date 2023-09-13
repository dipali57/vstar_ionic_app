import { IonButton, IonIcon, useIonRouter } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React from 'react';

export type AppBackButtonProps = {
  path: string;
};

export const AppBackButton = ({ path }: AppBackButtonProps) => {
  const router = useIonRouter();

  const handleBackClick = () => {
    router.push(path, 'back', 'replace');
  };

  return (
    <IonButton onClick={handleBackClick}>
      <IonIcon icon={arrowBackOutline}></IonIcon>
    </IonButton>
  );
};
