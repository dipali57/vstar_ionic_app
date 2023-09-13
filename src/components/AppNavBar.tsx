import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuToggle,
} from '@ionic/react';
import {
  chevronDownOutline,
  help,
  logOutOutline,
  mailOpenOutline,
  pricetagsOutline,
  schoolOutline,
  shieldOutline,
} from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import React from 'react';
import { toggleAlertState } from '../redux/common/logoutAlert.slice';

export const AppNavBar: React.FC = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const handleLogoutClick = () => {
    appDispatch(toggleAlertState(true));
  };

  return (
    <IonMenuToggle autoHide={false}>
      <IonList lines="full">
        <IonItem routerLink="/leader-board">
          <IonIcon icon={schoolOutline} size="large" slot="start"></IonIcon>
          <IonLabel>Leader board</IonLabel>
        </IonItem>
        <IonItem routerLink="/trending">
          <IonIcon icon={pricetagsOutline} size="large" slot="start"></IonIcon>
          <IonLabel>Trending</IonLabel>
        </IonItem>
        <IonItem routerLink="/vayana">
          <IonIcon
            icon={chevronDownOutline}
            size="large"
            slot="start"
          ></IonIcon>
          <IonLabel>Vayana</IonLabel>
        </IonItem>
        <IonItem routerLink="/about-vstar">
          <IonIcon icon={shieldOutline} size="large" slot="start"></IonIcon>
          <IonLabel>About VStars</IonLabel>
        </IonItem>
        <IonItem routerLink="/help">
          <IonIcon icon={help} size="large" slot="start"></IonIcon>
          <IonLabel>Help</IonLabel>
        </IonItem>
        <IonItem routerLink="/feedback">
          <IonIcon icon={mailOpenOutline} size="large" slot="start"></IonIcon>
          <IonLabel>Feedback</IonLabel>
        </IonItem>
        <IonItem onClick={handleLogoutClick}>
          <IonIcon icon={logOutOutline} size="large" slot="start"></IonIcon>
          <IonLabel>Logout</IonLabel>
        </IonItem>
      </IonList>
    </IonMenuToggle>
  );
};
