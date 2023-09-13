import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../../redux/store';
import { useEffect } from 'react';
import { StarType } from '../../../api/types/StarType';
import { setSelectedStarType } from '../../../redux/Post/selectPostOption.slice';
import { getStarType } from '../../../redux/common/common.actions';
import { hideAppTabs } from '../../../redux/home/layout.slice';
import { arrowBackOutline } from 'ionicons/icons';
import { STAR_TYPE_ICON_MAP } from '../../../constants/starTypeMap';

export const PostTypePage = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const starTypeRequest = useSelector(
    (state: AppState) => state.common.starType.apiState
  );

  const starTypeList = useSelector(
    (state: AppState) => state.common.starType.data
  );

  useEffect(() => {
    if (starTypeRequest !== 'loaded') {
      appDispatch(getStarType());
    }
  }, [appDispatch, starTypeRequest]);

  useEffect(() => {
    appDispatch(hideAppTabs());
  }, [appDispatch]);

  const handleSelectStarTypeClick = (value: StarType) => {
    appDispatch(setSelectedStarType(value));
  };

  const router = useIonRouter();

  const handleBackClick = () => {
    router.push('/home', 'back');
  };

  return (
    <IonPage>
      <IonRouterOutlet id="main"></IonRouterOutlet>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={handleBackClick}>
              <IonIcon icon={arrowBackOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Select Type</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {starTypeList.map((type, index) => (
            <IonItem
              key={type.id}
              class="ion-margin-top ion-margin-end"
              routerLink="/post/recipient"
              onClick={() =>
                handleSelectStarTypeClick({
                  id: type.id,
                  name: type.name,
                  description: type.description,
                })
              }
            >
              <IonIcon
                slot="start"
                size="large"
                icon={STAR_TYPE_ICON_MAP[type.id]?.icon || 'star'}
                color={STAR_TYPE_ICON_MAP[type.id]?.color || 'primary'}
              />
              <IonLabel>
                <h4>{type.name}</h4>
                <p>{type.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
