import {
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonNote,
  IonText,
} from '@ionic/react';
import React from 'react';
import { formatRelativeTime } from '../../utils/formatDateTime';
import { ProfileAvatar } from '../ProfileAvatar/ProfileAvatar';
import './StarCard.css';
import { heartOutline } from 'ionicons/icons';
import { STAR_TYPE_ICON_MAP } from '../../constants/starTypeMap';

type StarCardProps = {
  primaryUserId: string;
  primaryUserName: string;
  secondaryUserName?: string;
  starTypeId: number;
  starType: string;
  comment: string;
  time: number;
  bu: string;
  team: string;
};

export const StarCard: React.FC<StarCardProps> = ({
  primaryUserId,
  primaryUserName,
  secondaryUserName,
  starTypeId,
  starType,
  comment,
  time,
  bu,
  team,
}: StarCardProps) => {
  const convertHashTagColor = (comment: string) => {
    const word = comment.replace(
      /#(\w+)/g,
      '<ion-text color="primary"><b>#$1</b></ion-text>'
    );
    return <div dangerouslySetInnerHTML={{ __html: word }} />;
  };

  return (
    <IonCard className="star-card">
      <IonItem lines="none" className="item-lines-none ion-align-items-start">
        <div className="ion-text-center">
          <ProfileAvatar
            userName={primaryUserName}
            size="small"
            userId={primaryUserId}
          />
        </div>
        <div className="ion-margin-start">
          <div>
            <IonText>{primaryUserName}</IonText>
          </div>
          <div className="sub-title">
            <small>
              <IonText color="medium">
                {bu} | {team}
              </IonText>
            </small>
          </div>
        </div>
        <small slot="end" className="ion-no-margin">
          <IonText color="medium">{formatRelativeTime(time)}</IonText>
        </small>
      </IonItem>
      <IonCardContent class="ion-text-start star-content">
        <div className="star-type-container">
          <IonIcon
            size="small"
            slot="start"
            icon={STAR_TYPE_ICON_MAP[starTypeId]?.icon || 'star'}
            color="medium"
          />
          <IonText color="dark" className="star-type-text">
            <b>{starType}</b>
          </IonText>
        </div>
        <div className="comment-container">
          <IonText>{convertHashTagColor(comment)}</IonText>
        </div>
        <div className="footer">
          <div className="action-container">
            <IonIcon size="small" icon={heartOutline} />
            <IonNote>3</IonNote>
          </div>
          <div className="ion-text-end">
            <IonText class="ion-margin-vertical ion-color ion-color-dark">
              {secondaryUserName}
            </IonText>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};
