import {
  IonBadge,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonList,
} from '@ionic/react';
import './PodiumCard.css';
import { ProfileAvatar } from '../../../components/ProfileAvatar/ProfileAvatar';

type PodiumCardProps = {
  userId: string;
  userName: string;
  rank: number;
  starCount: number;
};

export const PodiumCard = ({
  userId,
  userName,
  rank,
  starCount,
}: PodiumCardProps) => {
  const getBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'warning';
      case 2:
        return 'light';
      default:
        return 'dark';
    }
  };

  const cardClasses = `podium-card ${rank === 1 ? 'first-rank' : ''}`;

  return (
    <IonCol size="4">
      <IonCard class={cardClasses} key={rank}>
        <IonList class="ion-text-right ion-margin">
          <IonBadge
            color={getBadgeColor(rank)}
            class="ion-text-center"
            mode="ios"
          >
            {rank}
          </IonBadge>
        </IonList>
        <IonCardHeader class="ion-text-center ion-no-padding">
          <div className="ion-align-self-center">
            <ProfileAvatar userName={userName} size="large" userId={userId} />
          </div>
          <IonCardSubtitle>
            <b>{userName}</b>
          </IonCardSubtitle>
          <IonCardSubtitle color="primary">{starCount} stars</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </IonCol>
  );
};
