import { useEffect } from 'react';
import { hideAppTabs } from '../../redux/home/layout.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { AppAccordion } from '../../components/AppAccordion';
import { GettingStartedContent, OtherStuffsContent } from './HelpContent';
import { BackToHomeHeader } from '../../components/BackToHomeHeader';

export const HelpPage = () => {
  const appDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    appDispatch(hideAppTabs());
  }, [appDispatch]);

  return (
    <IonPage>
      <BackToHomeHeader title="Trending" />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <AppAccordion
                title={GettingStartedContent.title}
                items={GettingStartedContent.items}
              ></AppAccordion>
              <AppAccordion
                title={OtherStuffsContent.title}
                items={OtherStuffsContent.items}
              ></AppAccordion>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
