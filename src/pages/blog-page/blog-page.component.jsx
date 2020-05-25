import React from 'react';
import AUTHOR_DATA from './author.data.js';
import '../../components/collection-item/collection-item.styles.scss';
import './blog-page.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { Link } from 'react-router-dom';

class Author extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: AUTHOR_DATA
    };
  }

  render() {
    console.log(this.props);
    const { collections } = this.state;
    return (
      <div>
      <div className='blog'>
        <div>
        <h1>{this.props.match.params.title.toUpperCase()}</h1><br></br>
        <span className='details'>HERE WILL BE THE BLOG </span><br></br>
        </div>
      </div>
     <span>Written by <Link className='auth' to='../author/Aviral Sharma'>Aviral Sharma  </Link></span>
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