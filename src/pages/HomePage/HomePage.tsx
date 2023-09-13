import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonText,
  IonToast,
  RefresherEventDetail,
} from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStars } from '../../redux/home/home.actions';
import { AppDispatch, AppState } from '../../redux/store';
import { App } from '@capacitor/app';
import { BackgroundTask } from '@capawesome/capacitor-background-task';
import { LocalNotifications } from '@capacitor/local-notifications';
import {
  getStarType,
  getUserProfilesList,
} from '../../redux/common/common.actions';
import {
  hideAppHeader,
  hideAppTabs,
  showAppHeader,
  showAppTabs,
} from '../../redux/home/layout.slice';
import { StarCard } from '../../components/StarCard/StarCard';
import { getStarName } from '../../utils/getStarName';
import { getUserName } from '../../utils/getUserName';
import { chevronDownCircleOutline } from 'ionicons/icons';
import { togglePagination, toggleRefresh } from '../../redux/home/stars.slice';
import { PAGE_LIMIT } from '../../constants/constants';
import { AppPageLoader } from '../../components/AppPageLoader';
import { toggleAlertState } from '../../redux/common/logoutAlert.slice';
import { getBuName } from '../../utils/getBuName';
import { getTeamName } from '../../utils/getTeamName';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { store } from '../../utils/ClientStorage';
import { useHistory } from 'react-router';

const HomePage: React.FC = () => {
  const appDispatch = useDispatch<AppDispatch>();

  const starListFetchedRef = useRef<boolean>(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const contentRef = useRef<HTMLIonContentElement>(null);

  const [refreshEvent, setRefreshEvent] =
    useState<CustomEvent<RefresherEventDetail>>();

  const [paginationEvent, setPaginationEvent] =
    useState<InfiniteScrollCustomEvent>();

  const starTypeRequestState = useSelector(
    (state: AppState) => state.common.starType.apiState
  );

  const userProfilesRequestState = useSelector(
    (state: AppState) => state.common.userProfiles.apiState
  );

  const starRequestState = useSelector(
    (state: AppState) => state.home.stars.apiState
  );

  const refreshing = useSelector(
    (state: AppState) => state.home.stars.refreshing
  );

  const paginating = useSelector(
    (state: AppState) => state.home.stars.paginating
  );

  const postStarRequestState = useSelector(
    (state: AppState) => state.post.postStarState.apiState
  );

  const starListData = useSelector((state: AppState) => state.home.stars.data);

  const disablePagination = useSelector(
    (state: AppState) => state.home.stars.disablePagination
  );

  const currentPageNo = useSelector(
    (state: AppState) => state.home.stars.currentPageNo
  );

  const starTypeListData = useSelector(
    (state: AppState) => state.common.starType.data
  );

  const userProfileListData = useSelector(
    (state: AppState) => state.common.userProfiles.data
  );

  const loading = starRequestState === 'loading' && currentPageNo === 1;

  // Handled hardware backbutton click event
  document.addEventListener('ionBackButton', (ev: any) => {
    ev.detail.register(10, () => {
      appDispatch(toggleAlertState(true));
    });
  });

  useEffect(() => {
    appDispatch(showAppTabs());
  }, [appDispatch]);

  // To fetch star type data
  useEffect(() => {
    if (starTypeRequestState === 'initial') {
      appDispatch(getStarType());
    }
  }, [appDispatch, starTypeRequestState]);

  // To fetch user profiles data
  useEffect(() => {
    if (userProfilesRequestState === 'initial') {
      appDispatch(getUserProfilesList());
    }
  }, [appDispatch, userProfilesRequestState]);

  // To fetch stars list on first render
  useEffect(() => {
    if (starListFetchedRef.current) return;
    starListFetchedRef.current = true;
    appDispatch(
      getStars(
        {
          _page: 1,
          _sort: 'time',
          _order: 'desc',
          _limit: PAGE_LIMIT,
        },
        'regular'
      )
    );
  }, [appDispatch]);

  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setRefreshEvent(event);
    appDispatch(togglePagination(false));
    appDispatch(toggleRefresh(true));
    appDispatch(
      getStars(
        {
          _page: 1,
          _sort: 'time',
          _order: 'desc',
          _limit: PAGE_LIMIT,
        },
        'refresh'
      )
    );
  };

  useEffect(() => {
    if (starRequestState === 'loaded' && refreshing) {
      refreshEvent?.detail.complete();
      appDispatch(toggleRefresh(false));
    }
  }, [appDispatch, refreshEvent?.detail, refreshing, starRequestState]);

  const handlePagination = (event: InfiniteScrollCustomEvent) => {
    setPaginationEvent(event);
    appDispatch(togglePagination(true));
    appDispatch(
      getStars(
        {
          _page: currentPageNo + 1,
          _sort: 'time',
          _order: 'desc',
          _limit: PAGE_LIMIT,
        },
        'paginate'
      )
    );
  };

  useEffect(() => {
    if (starRequestState === 'loaded' && paginating) {
      paginationEvent?.target.complete();
      appDispatch(togglePagination(false));
    }
  }, [appDispatch, paginating, paginationEvent?.target, starRequestState]);

  const handleScrollEnd = () => {
    contentRef?.current?.getScrollElement().then((el: HTMLElement) => {
      const top = el?.scrollTop;
      appDispatch(scrollPosition < top ? hideAppHeader() : showAppHeader());
      appDispatch(scrollPosition < top ? hideAppTabs() : showAppTabs());
      setScrollPosition(top);
    });
  };
  const history = useHistory();

  const currentTime = Date.now();

  store.get('time').then((value) => {
    if (value) {
      console.log('value is:', value);
      console.log('current time:', currentTime);
      const differenceTime = Math.abs(currentTime - Number(value));

      //const differenceTime = currentTime.getTime() - new Date(value).getTime();
      console.log('diff', differenceTime);
      //const twoMinutesInSeconds = 2 * 60;
      //console.log('range', twoMinutesInSeconds);

      const twoMinutesInSeconds = Math.floor(differenceTime / (1000 / 60));

      console.log('two', twoMinutesInSeconds);
      if (differenceTime >= 0 && differenceTime <= twoMinutesInSeconds) {
        App.addListener('appStateChange', async ({ isActive }) => {
          if (isActive) {
            return;
          }
          const taskId = await BackgroundTask.beforeExit(async () => {
            LocalNotifications.schedule({
              notifications: [
                {
                  title: 'New post was added',
                  body: 'Click on the notification to see the post',
                  id: 1,
                  schedule: { at: new Date(Date.now() + 1000 * 10) },
                  actionTypeId: '',
                  extra: {
                    route: '/profile',
                  },
                },
              ],
            });
            LocalNotifications.addListener(
              'localNotificationActionPerformed',
              (payload) => {
                const route = payload.notification.extra.route;
                if (route === '/profile') history.push('/profile');
              }
            );
            BackgroundTask.finish({ taskId });
          });
        });
      }
    }
  });

  return (
    <IonPage>
      <AppHeader title="VStars" />
      <IonContent
        ref={contentRef}
        fullscreen
        scrollEvents
        onIonScrollEnd={handleScrollEnd}
      >
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          ></IonRefresherContent>
        </IonRefresher>

        {loading && !paginating ? (
          <AppPageLoader />
        ) : (
          <IonList className="page-container-bg">
            {starListData.map((item) => {
              return (
                <StarCard
                  key={item.id}
                  primaryUserId={item.receiverId}
                  primaryUserName={getUserName(
                    userProfileListData,
                    item.receiverId
                  )}
                  secondaryUserName={getUserName(
                    userProfileListData,
                    item.senderId
                  )}
                  time={item.time}
                  starTypeId={item.starType}
                  starType={getStarName(starTypeListData, item.starType)}
                  comment={item.comment}
                  bu={getBuName(userProfileListData, item.receiverId)}
                  team={getTeamName(userProfileListData, item.receiverId)}
                />
              );
            })}
          </IonList>
        )}

        <IonInfiniteScroll
          disabled={disablePagination}
          onIonInfinite={handlePagination}
        >
          <IonInfiniteScrollContent
            loadingText="Fetching Posts ..."
            loadingSpinner="bubbles"
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
        {disablePagination && (
          <IonItem>
            <IonLabel class="ion-text-center">
              <IonText>No more stars found</IonText>
            </IonLabel>
          </IonItem>
        )}

        <IonToast
          isOpen={postStarRequestState === 'loaded'}
          message="Posted star successfully"
          duration={3000}
          color="success"
        ></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
