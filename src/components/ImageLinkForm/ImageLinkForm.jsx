import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = () => {
    return (
    <div>
          <p className='f3'>
        {'The mighty lion shall detect faces of Images provided.'}        
          </p>
        <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
            <input type='text' className='f4 pa2 w-70 center'/>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green'>Detect Face</button>
            </div>
        </div>    
    </div>
    );
}
export default ImageLinkForm;