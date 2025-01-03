import { useState } from 'react'
import './App.css'
import ImageDisplay from './ImageDisplay.jsx';

function App() {
  const imageUrls = [
    'https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Persian_silver_dollface.jpg/440px-Persian_silver_dollface.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const changeImage = (index) => {
    setCurrentImage(imageUrls[index]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Image Display</h1>
      {<ImageDisplay imageUrl={currentImage} />}
      <div style={{ marginTop: '20px' }}>
        {imageUrls.map((url, index) => (
          <button 
            key={index} 
            onClick={() => changeImage(index)} 
            style={{ margin: '5px' }}
          >
            Image {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
