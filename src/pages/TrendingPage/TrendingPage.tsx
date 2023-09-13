import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonPage,
  IonRow,
  IonText,
} from '@ionic/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../redux/store';
import { getHashtags } from '../../redux/menu/menu.actions';
import { hideAppTabs } from '../../redux/home/layout.slice';
import { BackToHomeHeader } from '../../components/BackToHomeHeader';

export const TrendingPage = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const hashTagsData = useSelector(
    (state: AppState) => state.menu.hashtags.data
  );

  useEffect(() => {
    appDispatch(hideAppTabs());
  }, [appDispatch]);

  useEffect(() => {
    appDispatch(getHashtags());
  }, [appDispatch]);

  return (
    <IonPage>
      <BackToHomeHeader title="Trending" />

      <IonContent>
        <IonGrid>
          <IonCard color="light">
            <IonRow class="ion-padding">
              <IonCol class="ion-text-start">HASHTAG NAME</IonCol>
              <IonCol class="ion-text-end">TAG REQUEST</IonCol>
            </IonRow>
          </IonCard>
          {hashTagsData.map((hashtag) => (
            <IonItem class="ion-margin-end" key={hashtag.id}>
              <IonCol>
                <IonRow>
                  <IonCol class="ion-text-start">
                    <IonText color="primary">
                      <b>{hashtag.name}</b>
                    </IonText>
                  </IonCol>
                  <IonCol class="ion-text-end">{hashtag.count}</IonCol>
                </IonRow>
              </IonCol>
            </IonItem>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
