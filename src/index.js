import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar/navbar';
import Profile from './profile_module/profile';


ReactDOM.render(
<React.StrictMode>
<Navbar/>
<Profile/>
</React.StrictMode>,
  document.getElementById('root')
);
