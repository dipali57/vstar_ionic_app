import React, { useEffect } from 'react';
import {
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonItem,
  IonLabel,
  IonPage,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../../redux/store';
import { UserProfile } from '../../../api/types/UserProfile';
import { setSelectedUserProfile } from '../../../redux/Post/selectPostOption.slice';
import { getUserProfilesList } from '../../../redux/common/common.actions';
import { AppBackButton } from '../../../components/AppBackButton';

export const PostRecipientPage: React.FC = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const authorizedUserId = useSelector(
    (state: AppState) => state.auth.authorizedUserData.data[0].id
  );

  const userProfilesRequest = useSelector(
    (state: AppState) => state.common.userProfiles.apiState
  );

  const userProfilesList = useSelector(
    (state: AppState) => state.common.userProfiles.data
  );

  useEffect(() => {
    if (userProfilesRequest !== 'loaded') {
      appDispatch(getUserProfilesList());
    }
  }, [appDispatch, userProfilesRequest]);

  const handleRecipientClick = (user: UserProfile) => {
    appDispatch(setSelectedUserProfile(user));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <AppBackButton path="/post/type" />
          </IonButtons>
          <IonTitle>Select Recipients</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {userProfilesList.map(
          (user) =>
            user.id !== authorizedUserId && (
              <IonItem
                key={user.id}
                class="ion-margin-top"
                routerLink="/post/compile"
                onClick={() =>
                  handleRecipientClick({
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    mpin: user.mpin,
                    bu: user.bu,
                    team: user.team,
                  })
                }
              >
                <IonAvatar slot="start">
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <IonLabel>{user.name}</IonLabel>
              </IonItem>
            )
        )}
      </IonContent>
    </IonPage>
  );
};
