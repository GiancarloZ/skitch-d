import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import positionActions from '../redux/positionActions';

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const onChange = ({coords}) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error) => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    let watcher = geo.watchPosition(onChange, onError);
    dispatch(positionActions.setPosition(position))
    return () => geo.clearWatch(watcher);
  }, []);
  return {...position, error};
}
export default usePosition