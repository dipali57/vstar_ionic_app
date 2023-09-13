import {
  InputCustomEvent,
  IonButton,
  IonCol,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonThumbnail,
  IonToast,
  useIonRouter,
} from '@ionic/react';
import './LoginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../../redux/store';
import { useEffect, useState } from 'react';
import { login } from '../../../redux/auth/auth.actions';

export const LoginPage: React.FC = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const router = useIonRouter();

  const [email, setEmail] = useState<string>('');
  const [mpin, setMpin] = useState<number>(0);

  const loginUserError = useSelector(
    (state: AppState) => state.auth.authorizedUserData.error
  );

  const loginUserState = useSelector(
    (state: AppState) => state.auth.authorizedUserData.apiState
  );

  const handleEmailChange = (event: InputCustomEvent) => {
    setEmail(String(event.detail.value));
  };

  const handleMpinChange = (event: InputCustomEvent) => {
    setMpin(Number(event.detail.value));
  };

  const handleLoginClick = async () => {
    appDispatch(
      login({
        email: email,
        mpin: mpin,
      })
    );
  };

  useEffect(() => {
    if (loginUserState === 'loaded') {
      console.log('loaded');
      router.push('/', 'forward', 'replace');
    }
  }, [loginUserState, router]);

  return (
    <IonPage class="ion-page ion-justify-content-center">
      <IonRow class="ion-justify-content-center">
        <IonCol size="auto">
          <IonThumbnail>
            <IonImg class="vayana-logo" src="assets/logo.png"></IonImg>
          </IonThumbnail>
        </IonCol>
      </IonRow>
      <IonRow class="ion-justify-content-center">
        <IonCol>
          <IonText class="ion-text-center ion-no-padding">
            <h1>VStars</h1>
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow class="ion-justify-content-center">
        <IonCol size="12">
          <div>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput type="email" onIonInput={handleEmailChange}></IonInput>
            </IonItem>
            <IonItem class="">
              <IonLabel position="stacked">Pin</IonLabel>
              <IonInput
                type="password"
                onIonInput={handleMpinChange}
              ></IonInput>
            </IonItem>
          </div>
        </IonCol>
        <IonCol size="12">
          <IonButton expand="block" shape="round" onClick={handleLoginClick}>
            Login
          </IonButton>
        </IonCol>
      </IonRow>
      <IonToast
        isOpen={loginUserState === 'error'}
        message={loginUserError}
        duration={3000}
        color="danger"
      ></IonToast>
    </IonPage>
  );
};
