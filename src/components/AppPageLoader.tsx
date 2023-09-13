import {
  IonAvatar,
  IonCard,
  IonItem,
  IonLabel,
  IonSkeletonText,
} from '@ionic/react';
import React from 'react';

export const AppPageLoader = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((item, key) => (
        <IonCard key={key}>
          <IonItem>
            <IonAvatar>
              <IonSkeletonText animated={true}></IonSkeletonText>
            </IonAvatar>
            <IonLabel class="ion-margin">
              <b>
                <IonSkeletonText animated={true}></IonSkeletonText>
              </b>
            </IonLabel>
          </IonItem>
          <IonLabel>
            <h2>
              <IonSkeletonText
                class="ion-margin"
                animated={true}
                style={{ width: '70%' }}
              ></IonSkeletonText>
            </h2>
            <p>
              <IonSkeletonText
                class="ion-margin"
                animated={true}
                style={{ width: '90%', height: '40px' }}
              ></IonSkeletonText>
            </p>

            <p>
              <IonSkeletonText
                class="ion-margin ion-float-end"
                animated={true}
                style={{ width: '20%' }}
              ></IonSkeletonText>
            </p>
          </IonLabel>
        </IonCard>
      ))}
    </>
  );
};
