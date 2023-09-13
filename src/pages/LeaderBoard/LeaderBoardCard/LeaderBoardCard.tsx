import { IonLabel, IonRow } from '@ionic/react';
import { UserRank } from '../types/UserRank';
import { PodiumCard } from '../component/PodiumCard';

type LeaderBoardCardType = {
  users: UserRank[];
};

export const LeaderBoardCard = ({ users }: LeaderBoardCardType) => {
  const firstUser = users[0];
  const secondUser = users[1];
  const thirdUser = users[2];

  return (
    <IonRow class="ion-padding ion-align-items-end light page-container-bg">
      {users.length === 0 && (
        <IonLabel class="ion-margin">Leaders are not Available.</IonLabel>
      )}
      {users.length >= 2 && (
        <PodiumCard
          userId={secondUser.userId}
          userName={secondUser.userName}
          rank={secondUser.rank}
          starCount={secondUser.starCount}
        />
      )}
      {users.length >= 1 && (
        <PodiumCard
          userId={firstUser.userId}
          userName={firstUser.userName}
          rank={firstUser.rank}
          starCount={firstUser.starCount}
        />
      )}
      {users.length >= 3 && (
        <PodiumCard
          userId={thirdUser.userId}
          userName={thirdUser.userName}
          rank={thirdUser.rank}
          starCount={thirdUser.starCount}
        />
      )}
    </IonRow>
  );
};
