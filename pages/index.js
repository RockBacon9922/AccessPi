import Webcam from "react-webcam";
import { useRef, useCallback, useState } from "react";

//create a react functional component
const Index = () => {
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);
  const videoConstraints = {
    width: 1088,
    height: 612,
    facingMode: "user",
  };
  const [mirrored, setmirrored] = useState(false);
  return (
    <div>
      <div>
        <Webcam
          videoConstraints={videoConstraints}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={videoConstraints.width}
          height={videoConstraints.height}
          mirrored={mirrored}
        />
      </div>
      <span>
        <button onClick={capture}>Take Picture</button>
        <button onClick={() => setmirrored(!mirrored)}>mirror</button>
      </span>
    </div>
  );
};

export default Index;
