import React from 'react';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

const title = ({match}) =>{
  return (<h1>{match.params.title}</h1>)
  }

const CollectionItem = ({ id, name, author, imageUrl }) => (
    <Link className='collection-item' to='/blog-page/:title'>
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
