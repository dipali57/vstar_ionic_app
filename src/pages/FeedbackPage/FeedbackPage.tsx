import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  IonTextarea,
  IonToast,
  TextareaCustomEvent,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../redux/store';
import { postFeedback } from '../../redux/menu/menu.actions';
import { hideAppTabs } from '../../redux/home/layout.slice';
import { BackToHomeHeader } from '../../components/BackToHomeHeader';

export const FeedbackPage = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const [comment, setComment] = useState<string>('');

  const authorizedUserId = useSelector(
    (state: AppState) => state.auth.authorizedUserData.data[0].id
  );

  const postFeedbackState = useSelector(
    (state: AppState) => state.menu.feedback.apiState
  );

  const handleCommentChange = (e: TextareaCustomEvent) => {
    setComment(String(e.detail.value));
  };

  useEffect(() => {
    appDispatch(hideAppTabs());
  }, [appDispatch]);

  const handleButtonClick = () => {
    appDispatch(
      postFeedback({
        senderId: String(authorizedUserId),
        comment: comment,
        time: Date.now(),
      })
    );
    setComment('');
  };

  return (
    <IonPage>
      <BackToHomeHeader title="Feedback" />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol class="ion-padding-horizontal">
              <IonText class="ion-text-justify">
                <h3>Do you have a suggestion? Please share it with us !</h3>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonTextarea
                  placeholder="Describe your experience here.."
                  autoGrow={true}
                  rows={10}
                  color="dark"
                  class="ion-padding"
                  value={comment}
                  onIonInput={handleCommentChange}
                ></IonTextarea>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                shape="round"
                class="ion-margin-horizontal"
                onClick={handleButtonClick}
              >
                Send Feedback
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonToast
          isOpen={postFeedbackState === 'loaded'}
          message="Feedback sent successfully"
          duration={3000}
          color="success"
        ></IonToast>
      </IonContent>
    </IonPage>
  );
};
