import React, { useState } from 'react';
import YouTube from 'react-youtube';

const AboutSection = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [draggedDistance, setDraggedDistance] = useState(0);

  const images = [
    '/images/a.jpg',
    '/images/b.jpg',
    '/images/a.jpg',
    '/images/b.jpg',
    '/images/a.jpg',
    '/images/b.jpg',
    '/images/a.jpg',
    '/images/b.jpg',
    '/images/a.jpg',
    '/images/b.jpg',
  ];

  const handleCloseGallery = () => {
    setShowGallery(false);
    setCurrentImageIndex(0);
  };

  const handleShowGallery = () => setShowGallery(true);

  const handleShowVideo = () => setShowVideo(true);

  const handleCloseVideo = () => setShowVideo(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (dragStartX !== null) {
      const distance = e.clientX - dragStartX;
      setDraggedDistance(distance);
    }
  };

  const handleMouseUp = () => {
    if (dragStartX !== null) {
      if (draggedDistance > 50) {
        handlePrevImage();
      } else if (draggedDistance < -50) {
        handleNextImage();
      }
      setDragStartX(null);
      setDraggedDistance(0);
    }
  };

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal') {
      setShowGallery(false);
      setShowVideo(false);
      setCurrentImageIndex(0);
    }
  };

  return (
    <section className="about_us" id="about">
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <div className="about_us_heading mb-5">
              <h1>About the Event</h1>
              <p className="text-muted">
              Empowering tech enthusiasts to innovate, learn, and collaborate for a brighter digital future. Fostering a vibrant community of tech pioneers dedicated to continuous learning and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 gx-0 custom-row-1" style={{ background: '#0f1726' }}>
        <div className="col-12 xl-3">
          <div className="about_us_image gallery-img" onClick={handleShowGallery}>
            <span>Gallery</span>
            <div className="gallery-icon"></div>
          </div>
        </div>
        <div className="col-12 xl-6">
          <div className="grid-container">
            <div className="about_us_grid">
              <span className="counter">350</span>
              <span>+</span>
              <h5>Members</h5>
              <p>
              Our community is home to over 350 tech enthusiasts, professionals, and learners. 
              </p>
            </div>
            <div className="about_us_grid">
              <span className="counter">16</span>
              <span>+</span>
              <h5>SPEAKERS</h5>
              <p>
              Our community provides unique opportunities to connect with renowned speakers from the tech industry.
              </p>
            </div>
            <div className="about_us_grid">
              <span className="counter">30</span>
              <span>+</span>
              <h5>Events Organized</h5>
              <p>
              We organize a variety of events, including hackathons, meetups, and speaker sessions, both offline and online.
              </p>
            </div>
            <div className="about_us_grid">
              <span className="counter">25</span>
              <span>+</span>
              <h5>TECHNOLOGIES</h5>
              <p>
              We explore a wide range of technologies, programming languages, and tools.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 xl-3">
          <div className="about_us_image video-img" onClick={handleShowVideo}>
            <span className="video-title">Video</span>
            <div className="video_icon"></div>
          </div>
        </div>
      </div>

      {showGallery && (
        <div className="modal" onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseGallery}>&times;</span>
            <div className="modal-body">
              <div
                className="custom-carousel"
                style={{
                  transform: `translateX(calc(-${currentImageIndex * 100}% + ${draggedDistance}px))`,
                  cursor: 'grab',
                }}
                onMouseDown={handleMouseDown}
              >
                {images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    className="img-fluid"
                    alt={`Gallery Image ${index + 1}`}
                    draggable="false"
                    onDragStart={(e) => e.preventDefault()}
                    style={{ visibility: draggedDistance === 0 ? 'visible' : 'visible' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

{showVideo && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseVideo}>&times;</span>
            <div className="modal-body" style={{ height: '400px' }}>
              <div style={{ position: 'relative', height: '100%' }}>
                <YouTube
                  videoId="nylCLNdtCJs"
                  opts={{
                    width: '100%',
                    height: '350px',
                    playerVars: {
                      autoplay: 1,
                      controls: 1,
                      modestbranding: 1,
                      playsinline: 1
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
