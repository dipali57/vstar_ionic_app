import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getGeoLocation } from '../../../redux/Post/post.actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../../redux/store';
import { Geolocation, Position } from '@capacitor/geolocation';
import { addCircleSharp, closeCircleSharp } from 'ionicons/icons';

export const AddLocation = () => {
  const appDispatch = useDispatch<AppDispatch>();
  const [coords, setCoords] = useState<Position>();
  const [showLocation, setShowLocation] = useState(false);

  const location = useSelector(
    (state: AppState) => state.post.locationState.data
  );

  const locationName = `${location.city}, ${location.principalSubdivision} ,${location.countryCode}`;

  useEffect(() => {
    Geolocation.getCurrentPosition({
      timeout: 20000,
    })
      .then((response: Position) => {
        setCoords(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getCurrentLocation = () => {
    setShowLocation(true);
    appDispatch(
      getGeoLocation({
        latitude: coords?.coords.latitude as number,
        longitude: coords?.coords.longitude as number,
        localityLanguage: 'en',
      })
    );
  };

  return (
    <div>
      {!showLocation ? (
        <IonItem class="ion-margin-vertical" lines="none">
          <IonIcon
            icon={addCircleSharp}
            size="large"
            color="dark"
            onClick={() => getCurrentLocation()}
          ></IonIcon>
          <IonLabel class="ion-margin-start">Add my location</IonLabel>
        </IonItem>
      ) : (
        <IonItem class="ion-margin-vertical" lines="none">
          <IonLabel color="dark">{locationName}</IonLabel>
          <IonIcon
            slot="end"
            role="cancel"
            onClick={() => setShowLocation(false)}
            icon={closeCircleSharp}
          ></IonIcon>
        </IonItem>
      )}
    </div>
  );
};
