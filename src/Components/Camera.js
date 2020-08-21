import React from 'react'
function Camera (props) {
    const [dataUri, setDataUri] = useState('');
    const [isShowVideo, setIsShowVideo] = useState(true);
    const [cameraStartDisplayError, setCameraStartDisplayError] = useState('');
  
    const videoEl = useRef(null);

  useEffect(() => {
    if (!videoEl) {
      return;
    }
    navigator.mediaDevices.getUserMedia({ facingMode: { exact: "environment" } } ).then((stream) => {
      let video = videoEl.current;
      video.srcObject = stream;
      video.play();
    });
  }, [videoEl]);
  return (
    <video ref={videoEl} />
  )
}
  
export default Camera;
  