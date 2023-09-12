import './HomeSectionVideo.css';
import teslaVid from '../../assets/tesla-vid.mp4';

const HomeSectionVideo = () => {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={teslaVid} type="video/mp4" />
      </video>
      <div className="overlay">
        <div>
          <h1>Experience Tesla</h1>
          <h5>Schedule a demo drive today</h5>
        </div>
        <div>
          <button>Demo Drive</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionVideo;
