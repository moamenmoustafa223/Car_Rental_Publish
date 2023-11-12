/* eslint-disable react/prop-types */
import { useState } from "react";
import './UploadForm.css';

const ImageDisplayContainer = ({ image, remove }) => {
  return (
    <div>
      <img src={URL.createObjectURL(image)} />
      <button className="remove-button" onClick={remove}>x</button>
    </div>
  );
}

const ImageUploadField = ({ id, image, setImage }) => {
  // const [selectedImage, setSelectedImage] = useState(null);
  const [key, setKey] = useState(1);

  const clearImage = () => {
    setKey(key => ++key);
    setImage(null)
  }

  return (
    <div>
      <div className="upload-container">
        {
          image
            ? <ImageDisplayContainer image={image} remove={clearImage} />
            : <label className="upload-input-label" htmlFor={id}>
              <span>Add Image</span>
            </label>
        }
      </div>
      <input
        key={key}
        hidden={true}
        type="file"
        id={id}
        onChange={(event) => {
          console.log(event.target.files[0])
          setImage(event.target.files[0]);
        }}
      />
    </div>
  );
}


// eslint-disable-next-line no-unused-vars
const UploadForm = ({ count }) => {
  const list = Array.from({ length: count });
  const [selectedImages, setSelectedImages] = useState(list);
  const [links, setLinks] = useState([]);

  const setImageAtIndex = (index) => (image) => {
    setSelectedImages(prev => {
      const newList = [...prev]; 
      newList[index] = image;
      return newList;
    })
  }

  const sendForm = () => {
    console.log('hello');
    const formData = new FormData();
    selectedImages.forEach((file, index) => {
      if (file) {
        formData.append(`images`, file);
      }
    });
    console.log(formData);
    console.log(selectedImages);
    fetch('http://localhost:3000/api/uploads', {
      method: 'POST',
      body: formData,
      // credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      setLinks(data.urls);
    })
    .catch(err => {
      console.log(err);
    })
    console.log('hi');
  }

  return (
    <div>
      <div className="image-upload-form">
        {
          list.map((_, index) => {
            return <ImageUploadField 
            key={index} 
            id={`image-${index}`} 
            image={selectedImages[index]} 
            setImage={setImageAtIndex(index)} />
          })
        }
      </div>
      <button onClick={sendForm}>Save</button>
      {
        links && links.map((link, index) => <h3 key={index}>{link}</h3>)
      }
    </div>
  );
}

export default UploadForm;