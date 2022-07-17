import {FC} from 'react'
import { ISong } from '../../types/types';
import classes from './Playlist.module.css'
import SongItem from '../SongItem/SongItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';


// interface PlayListProps{
//     songs : ISong[]
// }

const Playlist : FC/*<PlayListProps> */= () => {
    const {songList} = useTypedSelector(state => state.song)
    return (
       <div className={classes.main}>
            <ul className={classes.playlist}>
                {songList.map((item, i) => <SongItem song={item} index = {i} key={i} />) }
            </ul>
       </div> 
    );
}

export default Playlist;