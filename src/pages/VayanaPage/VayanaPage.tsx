import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { hideAppTabs } from '../../redux/home/layout.slice';
import { AppAccordion } from '../../components/AppAccordion';
import { FaqContent } from './FaqContent';
import { BackToHomeHeader } from '../../components/BackToHomeHeader';

export const VayanaPage = () => {
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    appDispatch(hideAppTabs());
  }, [appDispatch]);

  return (
    <IonPage>
      <BackToHomeHeader title="Vayana" />
      <IonContent>
        <IonImg
          src="assets/vayanalogo.svg"
          class="ion-margin-vertical ion-padding"
        ></IonImg>
        <IonCard class="ion-no-">
          <IonCardHeader class="ion-text-left">
            <IonText color="dark">
              <h3>India’s largest network for trade financing.</h3>
            </IonText>
          </IonCardHeader>
          <IonCardContent class="ion-text-justify ion-padding-horizontal ion-padding-bottom">
            <IonText>
              At Vayana, our aim is to accelerate the GDP growth of supply
              chains by unlocking affordable and easily accessible trade credit
              for every member of the supply chain. Our name, Vayana, is
              inspired from the Sanskrit word for ‘weaving’. By making trade
              credit available smoothly, we ensure that all the different
              threads of a supply chain remain harmoniously woven together.
            </IonText>
          </IonCardContent>
        </IonCard>

        <div className="ion-padding">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Important Links</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ul>
            <li>
              <IonItem
                lines="none"
                button
                class="ion-no-padding"
                href="https://vayana.com/"
              >
                <IonLabel class="ion-padding-horizontal ion-text-wrap">
                  <IonText color="primary">Vayana Website</IonText>
                </IonLabel>
              </IonItem>
            </li>
            <li>
              <IonItem
                lines="none"
                button
                class="ion-no-padding"
                href="https://apps.paybooks.in/"
              >
                <IonLabel class="ion-padding-horizontal ion-text-wrap">
                  <IonText color="primary">Payroll Portal </IonText>
                </IonLabel>
              </IonItem>
            </li>
            <li>
              <IonItem
                lines="none"
                button
                class="ion-no-padding"
                href="https://www.paramounttpa.com/"
              >
                <IonLabel class="ion-padding-horizontal ion-text-wrap">
                  <IonText color="primary">Insurance Portal</IonText>
                </IonLabel>
              </IonItem>
            </li>
          </ul>
        </div>
        <AppAccordion
          title={FaqContent.title}
          items={FaqContent.items}
        ></AppAccordion>
      </IonContent>
    </IonPage>
  );
};
