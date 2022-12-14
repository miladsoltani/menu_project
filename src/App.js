import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Agents from './Components/Agents';
import Myadv from './Components/Myadv';
import Profile from './Components/Profile';
import RecentSearch from './Components/RecentSearch';
import Saved from './Components/Saved';
import Search from './Components/Search';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css'
const App = () => {
  return (
    <div className='main__class' dir='rtl'>
      <Sidebar/>
      <div style={{'margin':'auto'}}>
        <Routes>
          <Route path='/agents' element={<Agents/>}/>
          <Route path='/my-adv' element={<Myadv/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/recent-search' element={<RecentSearch/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </div>

    </div>
  );
};

export default App;