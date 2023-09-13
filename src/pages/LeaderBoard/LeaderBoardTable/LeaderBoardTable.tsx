import {
  IonGrid,
  IonItem,
  IonLabel,
  IonCardTitle,
  IonCard,
  IonText,
} from '@ionic/react';
import { UserRank } from '../types/UserRank';
import { ProfileAvatar } from '../../../components/ProfileAvatar/ProfileAvatar';

type LeaderBoardTableType = {
  users: UserRank[];
};

export const LeaderBoardTable = ({ users }: LeaderBoardTableType) => {
  return (
    <div className="page-container-bg">
      <IonText class="ion-margin" color="dark">
        Remaining Leaders
      </IonText>
      <IonGrid>
        <IonCard>
          <IonItem color="primary">
            <IonLabel>Rank</IonLabel>
            <IonLabel class="ion-text-start">User</IonLabel>
            <IonLabel></IonLabel>
            <IonLabel class="ion-text-end">Stars</IonLabel>
          </IonItem>
        </IonCard>
        {users.map((item) => {
          return (
            <IonCard key={item.userId}>
              <IonItem>
                <IonCardTitle class="ion-margin-end" slot="start">
                  <h5>{item.rank}</h5>
                </IonCardTitle>
                <IonCardTitle class="ion-margin-horizontal"></IonCardTitle>

                <ProfileAvatar
                  userName={item.userName}
                  size="small"
                  userId={item.userId}
                />

                <IonLabel class="ion-margin-start">{item.userName}</IonLabel>
                <IonCardTitle slot="end">
                  <h6>{item.starCount}</h6>
                </IonCardTitle>
              </IonItem>
            </IonCard>
          );
        })}
      </IonGrid>
    </div>
  );
};
