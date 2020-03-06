import React from 'react';
import { API_URL } from '../../constants';

import './Mini.css'
const Mini = (props) => {
  console.log(props.src)
  return (
    <section className="MiniGallery_section">
      <div className="MiniGallery_img" style={{backgroundImage: `url('${API_URL}/images/${props.src.name}')`}}/>
    </section>
  );
}

export default Mini;
