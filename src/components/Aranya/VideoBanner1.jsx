import './VideoBanner.css';

const VideoBanner1 = () => {
  return (
    <div className="video-banner position-relative text-white">
      <video className="w-100 h-100 object-fit-cover" autoPlay muted loop playsInline>
        <source src="/videos/video8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
{/* 
      <div className="banner-content position-absolute top-50 start-50 translate-middle text-center">
        <h1 className="fw-bold banner-heading">Aranya Plants & Pots</h1>
        <p className="banner-subtext">The best season to start afresh.</p>
      </div> */}
    </div>
  );
};

export default VideoBanner1;
