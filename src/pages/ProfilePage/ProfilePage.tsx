import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonImg,
  IonLabel,
  IonPage,
  IonSegment,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStarType,
  getUserProfilesList,
} from '../../redux/common/common.actions';
import { AppDispatch, AppState } from '../../redux/store';
import './ProfilePage.css';
import {
  getReceivedStar,
  getSendStar,
} from '../../redux/profile/profile.actions';
import { StarCard } from '../../components/StarCard/StarCard';
import { getStarName } from '../../utils/getStarName';
import { getUserName } from '../../utils/getUserName';
import { getBuName } from '../../utils/getBuName';
import { getTeamName } from '../../utils/getTeamName';
import { AppHeader } from '../../components/AppHeader/AppHeader';

export const ProfilePage: React.FC = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const [selectedTab, setSelectedTab] = useState('received');

  const authorizedUserId = useSelector(
    (state: AppState) => state.auth.authorizedUserData.data[0].id
  );

  const authorizedUserName = useSelector(
    (state: AppState) => state.auth.authorizedUserData.data[0].name
  );

  const authorizedUserEmail = useSelector(
    (state: AppState) => state.auth.authorizedUserData.data[0].email
  );

  const starTypeRequest = useSelector(
    (state: AppState) => state.common.starType.apiState
  );

  const userProfilesRequest = useSelector(
    (state: AppState) => state.common.userProfiles.apiState
  );

  const starTypeData = useSelector(
    (state: AppState) => state.common.starType.data
  );

  const userProfileData = useSelector(
    (state: AppState) => state.common.userProfiles.data
  );

  const receiverData = useSelector(
    (state: AppState) => state.profile.received.data
  );

  const senderData = useSelector((state: AppState) => state.profile.send.data);

  const handleSendClick = () => {
    setSelectedTab('send');
  };
  const handleReceivedClick = () => {
    setSelectedTab('received');
  };

  useEffect(() => {
    if (starTypeRequest === 'initial') {
      appDispatch(getStarType());
    }
  }, [appDispatch, starTypeRequest]);

  useEffect(() => {
    if (userProfilesRequest === 'initial') {
      appDispatch(getUserProfilesList());
    }
  }, [appDispatch, userProfilesRequest]);

  useEffect(() => {
    appDispatch(getReceivedStar({ receiverId: authorizedUserId }));
  }, [appDispatch, authorizedUserId]);

  useEffect(() => {
    appDispatch(getSendStar({ senderId: authorizedUserId }));
  }, [appDispatch, authorizedUserId]);

  const dataList = selectedTab === 'received' ? receiverData : senderData;

  return (
    <IonPage>
      <AppHeader title="Profile" />
      <IonContent class="page-container-bg" fullscreen>
        <IonCard class="ion-text-center">
          <IonImg alt="background" src="assets/icon/bg.png" />
          <IonAvatar class="avatar-img">
            <IonImg src="assets/icon/profile.jpeg" alt="Profile Image"></IonImg>
          </IonAvatar>
          <IonCardHeader class="ion-margin-vertical"></IonCardHeader>
          <div className="ion-margin-vertical">
            <IonCardContent>
              <IonCardTitle color="primary" slot="end">
                <b>{authorizedUserName}</b>
              </IonCardTitle>
              <IonCardSubtitle>{authorizedUserEmail}</IonCardSubtitle>
              <IonCardSubtitle color="dark">
                {getBuName(userProfileData, authorizedUserId)} |&nbsp;
                {getTeamName(userProfileData, authorizedUserId)}
              </IonCardSubtitle>
            </IonCardContent>
          </div>
        </IonCard>

        <IonSegment value={selectedTab}>
          <IonButton
            color={selectedTab === 'received' ? 'primary' : 'dark'}
            shape="round"
            onClick={handleReceivedClick}
          >
            <IonLabel>Received</IonLabel>
          </IonButton>
          <IonButton
            color={selectedTab === 'send' ? 'primary' : 'dark'}
            shape="round"
            onClick={handleSendClick}
          >
            <IonLabel>Send</IonLabel>
          </IonButton>
        </IonSegment>
        <div className="ion-text-center">
          {dataList.map((item) => {
            const userId =
              selectedTab === 'received' ? item.senderId : item.receiverId;
            return (
              <StarCard
                key={item.id}
                primaryUserId={userId}
                primaryUserName={getUserName(userProfileData, userId)}
                time={item.time}
                starTypeId={item.starType}
                starType={getStarName(starTypeData, item.starType)}
                comment={item.comment}
                bu={getBuName(userProfileData, userId)}
                team={getTeamName(userProfileData, userId)}
              />
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};
