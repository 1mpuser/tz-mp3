import {FC} from 'react';
import classes from './SongItem.module.css';
import { ISong } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classNames from 'classnames'
import { setCurrentSong } from '../../store/actionCreators/actionCreators';
import {useDispatch} from 'react-redux'

// import {}
interface SongItemProps{
    song : ISong,
    index : any,
}

const SongItem : FC <SongItemProps> = ({song, index, ...props}) => {
    const {currentSong} = useTypedSelector(state => state.song)
    const dispatch = useDispatch();
    return (
        <li {...props} onClick={()=>{
            dispatch(setCurrentSong(index));
        }} className={classNames(classes.songItem, currentSong ===index && classes.selected)}>
            <div className={classes.songImg}>
                <i className="fas fa-play"></i>
            </div>
            <div>
                <span className={classes.songName}>{song.title}</span>
                <span className={classes.songAuthors}>{song.artistName}</span>
            </div>
        </li>
    );
}

export default SongItem;