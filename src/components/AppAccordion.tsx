import {
  IonAccordionGroup,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAccordion,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React from 'react';

type AccordianItems = {
  header: string;
  content: string;
};

export type AccordianPropType = {
  title: string;
  items: AccordianItems[];
};

export const AppAccordion = ({ title, items }: AccordianPropType) => {
  return (
    <IonAccordionGroup class="ion-padding">
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {items.map((item, key) => (
        <IonAccordion key={key}>
          <IonItem slot="header">
            <ol>
              <li value={key + 1}>
                <IonLabel class="ion-text-wrap">{item.header}</IonLabel>
              </li>
            </ol>
          </IonItem>
          <div className="ion-padding" slot="content">
            - {item.content}
          </div>
        </IonAccordion>
      ))}
    </IonAccordionGroup>
  );
};
