import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Agents from './Components/Agents';
import Myadv from './Components/Myadv';
import Profile from './Components/Profile';
import RecentSearch from './Components/RecentSearch';
import Saved from './Components/Saved';
import Search from './Components/Search';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/my-adv' element={<Myadv/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/recent-search' element={<RecentSearch/>}/>
        <Route path='/saved' element={<Saved/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
};

export default App;