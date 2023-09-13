import {
  IonButton,
  IonContent,
  IonLabel,
  IonPage,
  IonSegment,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../redux/store';
import { getUserProfilesList } from '../../redux/common/common.actions';
import { LeaderBoardCard } from './LeaderBoardCard/LeaderBoardCard';
import { LeaderBoardTable } from './LeaderBoardTable/LeaderBoardTable';
import { hideAppTabs } from '../../redux/home/layout.slice';
import { getUserName } from '../../utils/getUserName';
import { getSenderRank } from '../../redux/leaderBoard/senderRank.actions';
import { getReceiverRank } from '../../redux/leaderBoard/receiverRank.actions';
import { UserRank } from './types/UserRank';
import { BackToHomeHeader } from '../../components/BackToHomeHeader';

export const LeaderBoardPage: React.FC = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const [selectedTab, setSelectedTab] = useState('received');

  const handleSendClick = () => {
    setSelectedTab('send');
  };
  const handleReceivedClick = () => {
    setSelectedTab('received');
  };

  const senderRankData = useSelector(
    (state: AppState) => state.leaderBoard.sender.data
  );

  const receiverRankData = useSelector(
    (state: AppState) => state.leaderBoard.receiver.data
  );
  const userProfilesRequest = useSelector(
    (state: AppState) => state.common.userProfiles.apiState
  );

  const userProfileData = useSelector(
    (state: AppState) => state.common.userProfiles.data
  );

  useEffect(() => {
    if (userProfilesRequest === 'initial') {
      appDispatch(getUserProfilesList());
    }
  }, [appDispatch, userProfilesRequest]);

  useEffect(() => {
    appDispatch(getSenderRank());
  }, [appDispatch]);

  useEffect(() => {
    appDispatch(getReceiverRank());
  }, [appDispatch]);

  useEffect(() => {
    appDispatch(hideAppTabs());
  }, [appDispatch]);

  const userData = selectedTab === 'send' ? senderRankData : receiverRankData;
  const userRank: UserRank[] = userData.map((user, i) => {
    return {
      userId: user.userId,
      userName: getUserName(userProfileData, user.userId),
      starCount: user.starCount,
      rank: i + 1,
    };
  });

  return (
    <IonPage>
      <BackToHomeHeader title="LeaderBoard" />
      <IonContent class="page-container-bg">
        <IonSegment value={selectedTab} class="ion-padding-top">
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
        <LeaderBoardCard users={userRank.slice(0, 3)} />
        {userRank.slice(3).length > 0 && (
          <LeaderBoardTable users={userRank.slice(3)} />
        )}
      </IonContent>
    </IonPage>
  );
};
