import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useSelector } from 'react-redux';
import './AppHeader.css';
import { AppState } from '../../redux/store';

export type AppHeaderProps = {
  title: string;
};

export const AppHeader = ({ title }: AppHeaderProps) => {
  const showAppHeader = useSelector(
    (state: AppState) => state.home.layout.showAppHeader
  );

  return (
    <IonHeader class={showAppHeader ? 'show-app-header' : 'hide-app-header'}>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
