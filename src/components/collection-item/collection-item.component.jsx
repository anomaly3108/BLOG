import React from 'react';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, author, imageUrl }) => (
    // strin = '/blog-page/'+{name}
    <Link className='collection-item' to={`/blog-page/${name}`}>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'><b>{name}</b></span><br></br><br></br>
        <Link to='/author' className='auth'><b>{author}</b></Link>
      </div>
    </Link>
);

export default CollectionItem;
