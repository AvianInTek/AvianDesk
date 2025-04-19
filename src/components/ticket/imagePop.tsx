// components/ImagePopup.tsx
import React from 'react';

interface ImagePopupProps {
  imageUrl: string;
  onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 sm:p-0">
      <div className="relative bg-white rounded-xl shadow-lg p-4 max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl pr-1 sm:pr-2"
        >
          &times;
        </button>
        <div className='pt-8'>
            <div className="overflow-y-auto max-h-[80vh]">
                <img src={imageUrl} alt="Preview" className="rounded-lg mx-auto" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
