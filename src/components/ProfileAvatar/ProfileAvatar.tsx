import { IonAvatar, IonLabel } from '@ionic/react';
import React from 'react';
import { getInitials } from '../../utils/getInitials';
import './ProfileAvatar.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { getColorByUserName } from '../../utils/getColorByUserName';

type ProfileAvatarProps = {
  userId: string;
  userName: string;
  size: 'small' | 'large';
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  userId,
  userName,
  size,
}) => {
  const colorsData = useSelector((state: AppState) => state.common.colors.data);

  const avatarClass = getColorByUserName(userId, colorsData);
  const avatarClasses = `avatar-common ion-align-self-center ${
    size === 'large' ? 'large-avatar' : 'small-avatar'
  } ${avatarClass}`;

  return (
    <div className="ion-text-center">
      <IonAvatar class={avatarClasses}>
        <IonLabel>
          <b>{getInitials(userName)}</b>
        </IonLabel>
      </IonAvatar>
    </div>
  );
};
