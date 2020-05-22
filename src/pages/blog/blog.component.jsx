import React from 'react';

import BLOG_DATA from './blog.data.js';
import '../../components/collection-item/collection-item.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview';


class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: BLOG_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
