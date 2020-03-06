import React from 'react';
import { API_URL } from '../../../constants';

import './GalleryPic.css'

const GalleryPic = (props) => {
  return (
    <div>
        <div className="gallery_box">
          <img className="gallery_pic" src={`${API_URL}/images/${props.src.name}`} alt="asd"/>
        </div>
    </div>
  );
}

export default GalleryPic;
