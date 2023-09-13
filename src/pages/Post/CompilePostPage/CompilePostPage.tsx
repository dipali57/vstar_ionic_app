import React from 'react';
import {
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonButton,
  IonPage,
  IonText,
  IonAvatar,
  IonChip,
  IonLabel,
  IonTextarea,
  IonItem,
  IonCard,
  IonRow,
  IonCol,
  IonCardTitle,
  TextareaCustomEvent,
  useIonRouter,
  IonToast,
  IonIcon,
  IonGrid,
  IonImg,
  IonActionSheet,
  IonCardContent,
  IonList,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AppDispatch, AppState } from '../../../redux/store';
import { postStar } from '../../../redux/Post/post.actions';
import {
  setStarTypeToInitial,
  setUserProfileToInitial,
} from '../../../redux/Post/selectPostOption.slice';
import { AppBackButton } from '../../../components/AppBackButton';
import { cameraOutline, close, trash } from 'ionicons/icons';
import { useCamera, UserPhoto } from './hooks/useCamera';
import './CompilePostPage.css';
import { STAR_TYPE_ICON_MAP } from '../../../constants/starTypeMap';
import { AddLocation } from './AddLocation';
import { store } from '../../../utils/ClientStorage';

export const CompilePostPage: React.FC = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const [comment, setComment] = useState<string | null | undefined>();
  const [showError, setShowError] = useState<boolean>(false);

  const { photos, takePhoto, deletePhoto } = useCamera();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  const [photoLoading, setPhotoLoading] = useState(false);

  const router = useIonRouter();

  const authorizedUserId = useSelector(
    (state: AppState) => state.auth.authorizedUserData.data[0].id
  );

  const selectedUser = useSelector(
    (state: AppState) => state.post.selectedStarOptions.selectedUserProfiles
  );

  const selectedStarType = useSelector(
    (state: AppState) => state.post.selectedStarOptions.selectedStarType
  );

  const location = useSelector(
    (state: AppState) => state.post.locationState.data
  );
  const placeName = `${location.city}, ${location.principalSubdivision} ,${location.countryCode}`;

  const handleTextAreaChange = (e: TextareaCustomEvent) => {
    setComment(e.detail.value);
  };

  const handlePostClick = () => {
    if (comment) {
      appDispatch(
        postStar({
          senderId: String(authorizedUserId),
          receiverId: selectedUser?.id,
          starType: selectedStarType?.id,
          comment: String(comment),
          time: Date.now(),
          location: {
            lat: location.latitude as number,
            lng: location.longitude as number,
            placeName: placeName,
          },
        })
      );
      store.set('time', String(Date.now()));
      appDispatch(setStarTypeToInitial());
      appDispatch(setUserProfileToInitial());
      router.push('/home', 'back');
    } else {
      setShowError(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <AppBackButton path="/post/recipient" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY>
        <IonCol>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonText class="ion-margin-end" color="medium">
                  To
                </IonText>
                <IonItem class="ion-wrap">
                  <IonLabel>
                    <IonChip>
                      <IonAvatar>
                        <img
                          alt="Silhouette of a person's head"
                          src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        />
                      </IonAvatar>
                      <IonText color="medium">{selectedUser?.name}</IonText>
                    </IonChip>
                  </IonLabel>
                </IonItem>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList lines="none">
                <IonCard>
                  <IonItem color="light">
                    <IonIcon
                      size="large"
                      icon={
                        STAR_TYPE_ICON_MAP[Number(selectedStarType?.id)]
                          ?.icon || 'star'
                      }
                      color={
                        STAR_TYPE_ICON_MAP[Number(selectedStarType?.id)]
                          ?.color || 'primary'
                      }
                    />
                    <IonCardTitle class="ion-padding-horizontal ion-padding-vertical">
                      {selectedStarType?.name}
                    </IonCardTitle>
                  </IonItem>
                </IonCard>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard class="ion-padding">
                <IonTextarea
                  placeholder="Type something here"
                  autoGrow={true}
                  rows={6}
                  color="dark"
                  value={comment}
                  onIonInput={handleTextAreaChange}
                ></IonTextarea>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <AddLocation />
            <IonCol class="ion-text-end ion-margin-end ion-margin-top">
              <IonIcon
                onClick={() => {
                  takePhoto();
                  setPhotoLoading(true);
                }}
                icon={cameraOutline}
                size="large"
              ></IonIcon>
            </IonCol>
          </IonRow>
          <IonGrid class="ion-no-padding">
            {photoLoading && (
              <IonCardContent class="ion-card">
                <IonImg
                  onClick={() => {
                    setPhotoToDelete(photos);
                  }}
                  src={photos?.webviewPath}
                  class="ion-img"
                />
              </IonCardContent>
            )}
          </IonGrid>
          <IonRow class="ion-margin-top">
            <IonCol>
              <IonButton
                size="default"
                fill="solid"
                expand="full"
                shape="round"
                onClick={handlePostClick}
              >
                <IonText class="ion-padding">Post</IonText>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonCol>
        <IonToast
          isOpen={showError}
          message="Please enter comment"
          duration={3000}
          color="danger"
        ></IonToast>
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (photoToDelete?.webviewPath) {
                  deletePhoto(photoToDelete);
                  setPhotoLoading(false);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};
