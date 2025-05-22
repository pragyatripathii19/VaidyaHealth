// In any test file (e.g., AnimationTest.jsx)
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/heartbeat.json';

const AnimationTest = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: 300, width: 300 }}
      />
    </div>
  );
};

export default AnimationTest;
