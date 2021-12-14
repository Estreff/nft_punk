import React from 'react';
import CollectionCard from './CollectionCard';
import './PunkList.css';

const PunkList = ({ punkList, setSelectedPunk }) => {
  return (
    <div className='punkList'>
      {punkList.map((punk) => (
        <div
          onClick={(e) => setSelectedPunk(punk.token_id)}
          key={punk.token_id}
        >
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
