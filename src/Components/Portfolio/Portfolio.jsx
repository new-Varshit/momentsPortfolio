import React, { useState } from 'react';
import Modal from 'react-modal';

const photos = [
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },
  { src: '../src/assets/13.png', alt: 'Photo 1', title: 'Photo 1' },


];

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentPhoto(photos[index]);
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentPhoto(null);
  };

  const nextPhoto = () => {
    const newIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIndex);
    setCurrentPhoto(photos[newIndex]);
  };

  const prevPhoto = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIndex);
    setCurrentPhoto(photos[newIndex]);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          My Best Photographs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover cursor-pointer"
              />
            </div> 
          ))} 
        </div>
      </div>
      {currentPhoto && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-4 text-black text-2xl"
            >
              &times;
            </button>
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="w-auto h-auto max-w-full max-h-full"
            />
            <button
              onClick={prevPhoto}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-3xl"
            >
              &#10094;
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
              &#10095;
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Portfolio;
