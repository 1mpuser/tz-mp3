import React from 'react';
import './App.css';
import WelcomeBar from './components/WelcomeBar/WelcomeBar';
import Playlist from './components/PlayList/Playlist';
import PlaylistDescription from './PlaylistDescription/PlaylistDescription';
import './input.css'
import MainPlayer from './components/MainPlayer/MainPlayer';
function App(){
    return (
            <div className='main'>
                <WelcomeBar/>
                <div className='top'>
                <PlaylistDescription img='https://freemusicarchive.org/image?file=images%2Falbums%2FSkidmore_College_Orchestra_-_Mussorgskys_Pictures_at_an_Exhibition_-_2009113013701972.jpg&width=290&height=290&type=image'/>
                <Playlist/>
                </div>
                <MainPlayer/>
            </div>
    )
}

export default App;
