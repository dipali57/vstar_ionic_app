import { IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { AppBackButton } from './AppBackButton';

export type BackToHomeHeaderProps = {
  title?: string;
};

export const BackToHomeHeader = ({ title }: BackToHomeHeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <AppBackButton path="/home" />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
