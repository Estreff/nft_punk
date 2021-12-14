import React, { useState, useEffect } from 'react';
import './Main.css';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  const instagramHandle =
    activePunk.collection.instagram_username === null
      ? ''
      : activePunk.collection.instagram_username;
  const twitterHandle =
    activePunk.collection.twitter_username === null
      ? ''
      : activePunk.collection.twitter_username;

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
    console.log('Data: ', punkListData);
  }, [punkListData, selectedPunk]);

  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img
              src={activePunk.image_original_url}
              className='selectedPunk'
              alt='Active Punk Image'
            />
          </div>
        </div>
        <div className='punkDetails' style={{ color: '#fff' }}>
          <div className='title'>
            {activePunk.name}
            <span className='itemNumber'> &bull; # {activePunk.token_id}</span>
          </div>
          <div className='owner'>
            <div className='ownerImageContainer'>
              <img src={activePunk.owner.profile_img_url} alt='' />
            </div>
            <div className='ownerDetails' style={{ color: '#fff' }}>
              <div className='ownerNameAndHandle'>
                <div>{activePunk.owner.address}</div>
                <div className='ownerHandle'>
                  @{activePunk.owner.user.username}
                </div>
              </div>
              <div className='ownerLink'>
                <a href={`https://www.instagram.com/${instagramHandle}`}>
                  <img src={instagramLogo} alt='' />
                </a>
              </div>
              <div className='ownerLink'>
                <a href={`https://www.twitter.com/${twitterHandle}`}>
                  <img src={twitterLogo} alt='' />
                </a>
              </div>
              <div className='ownerLink'>
                <a href=''>
                  <img src={moreIcon} alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
