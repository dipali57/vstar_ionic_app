import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { home, addCircle, personCircleOutline } from 'ionicons/icons';
import { AppNavBar } from '../../components/AppNavBar';
import { PrivateRoutes } from '../../PrivateRoutes';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { AppLogoutAlert } from '../../components/AppLogoutAlert';
import { getTabBarStyles } from './utils/getTabBarStyles';

export const AppLayoutPage: React.FC = () => {
  const showNavTools = useSelector(
    (state: AppState) => state.home.layout.showNavTools
  );

  const showLogoutAlert = useSelector(
    (state: AppState) => state.common.logoutAlertState.isOpen
  );

  const router = useIonRouter();

  const tabBarStyles = getTabBarStyles(showNavTools);

  const handleHomeTabClick = () => {
    router.push('/home', 'none', 'replace');
  };

  const handleProfileTabClick = () => {
    router.push('/profile', 'none');
  };

  return (
    <IonPage>
      <IonMenu type="overlay" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>VStars Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <AppNavBar />
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonContent className="ion-padding">
          <AppLogoutAlert isOpen={showLogoutAlert} />
          <IonTabs>
            <IonRouterOutlet>
              <PrivateRoutes />
            </IonRouterOutlet>

            <IonTabBar slot="bottom" style={tabBarStyles} color="primary">
              <IonTabButton onClick={handleHomeTabClick} tab="home">
                <IonIcon size="large" color="light" icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>

              <IonTabButton tab="speaker" href="/post/type">
                <IonIcon size="large" color="light" icon={addCircle} />
                <IonLabel>Star</IonLabel>
              </IonTabButton>

              <IonTabButton onClick={handleProfileTabClick} tab="profile">
                <IonIcon
                  size="large"
                  color="light"
                  icon={personCircleOutline}
                />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};
