import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PunkList from './components/PunkList';

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

module.exports = allowCors(handler);

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xcB181810DD07DF2963F328dcD53F3718f8640707'
      );
      setPunkListData(openSeaData.data.assets);
    };

    getMyNfts();
  }, []);

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkList={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;
