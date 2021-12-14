import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PunkList from './components/PunkList';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const url =
      'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xcB181810DD07DF2963F328dcD53F3718f8640707';
    const config = {
      crossdomain: true,
      headers: {},
    };

    const getMyNfts = async () => {
      const openSeaData = await axios.get(url, config);
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
