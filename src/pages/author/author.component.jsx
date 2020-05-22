import React from 'react';
import AUTHOR_DATA from './author.data.js';
import '../../components/collection-item/collection-item.styles.scss';
import './author.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class Author extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: AUTHOR_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
      <div className='author'>
        <img className='pic' src={ require('../../components/image.jpg') } />
        <div>
        <h1>AVIRAL SHARMA</h1><br></br>
        <span className='details'>Some details about the author</span><br></br>
        <span>Social links</span>
        </div>
      </div>
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
      </div>
    );
  }
}

export default Author;