import {
  IonPage,
  IonTitle,
  IonContent,
  IonItem,
  IonRow,
  IonCol,
  IonGrid,
  IonCardContent,
  IonLabel,
} from '@ionic/react';
import { hideAppTabs } from '../../redux/home/layout.slice';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BackToHomeHeader } from '../../components/BackToHomeHeader';
export const AboutPage: React.FC = () => {
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    appDispatch(hideAppTabs());
  }, [appDispatch]);

  return (
    <IonPage>
      <BackToHomeHeader title="About VStars" />
      <IonContent>
        <IonTitle class="ion-text-center">
          <h1>
            <b>VStars</b>
          </h1>
        </IonTitle>
        <IonItem class="ion-padding-vertical ion-margin-end">
          <IonGrid>
            <IonRow>
              <IonCol size="auto"></IonCol>
              <IonCol>
                <IonRow>
                  <b>Version id</b>
                </IonRow>
                <IonRow class="ion-margin-horizontal">1.0.0</IonRow>
              </IonCol>
              <IonCol>
                <IonRow>
                  <b>Last Released Date</b>
                </IonRow>
                <IonRow class="ion-margin-horizontal">1 Apr 2023</IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
        <IonCardContent class="ion-padding ion-margin-end">
          <IonTitle>What's New</IonTitle>
          <ul>
            <IonLabel>
              <li>Added functionality to display trending cards.</li>
            </IonLabel>
            <div className="ion-margin-vertical">
              <IonLabel>
                <li> Added functionality to display a leader board.</li>
              </IonLabel>
            </div>
            <div className="ion-margin-vertical">
              <IonLabel>
                <li>
                  Implemented a feature that allows users to submit feedback
                </li>
              </IonLabel>
            </div>
            <div className="ion-margin-vertical">
              <IonLabel>
                <li>
                  Added a help page that contains information to assist users
                  with the product.
                </li>
              </IonLabel>
            </div>
          </ul>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};
