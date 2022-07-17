import { useState, useRef, useEffect} from 'react';
import classes from './MainPlayer.module.css'
import { useDispatch } from 'react-redux';
import { handleEnd, nextSong, prevSong } from '../../store/actionCreators/actionCreators';
import formatSeconds from '../../scripts/formatSeconds';
import classNames from 'classnames';
import {useSelector} from 'react-redux'
import { togglePlaying, toggleRepeat, toggleRandom } from '../../store/actionCreators/actionCreators'; 




const MainPlayer = () => {
    const {playing, currentSong, songList, repeat, random} = useSelector(state => state.song)
    const state = useSelector(state => state.song)


    const audio = useRef('audio_tag')
    const [volume, setVolume] = useState(0.3)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const dispatch = useDispatch();


    const toggleAudio = () => {
        audio.current.paused ? audio.current.play() : audio.current.pause();
    }
    useEffect(() => {
		audio.current.volume = volume;
		if (playing) {
			toggleAudio();
		}
	}, [currentSong]);

    return (
        <div className={classes.mainDiv}>
            
            <audio
                onTimeUpdate={(e)=>setCurrentTime(e.target.currentTime)}
                onCanPlay = {(e) => setDuration(e.target.duration)} 
                onEnded = {(e) => {
                    dispatch(handleEnd(state));
                    toggleAudio()
                }}
                ref= {audio}
                type='audio/mpeg'
                preload='true'
                src = {songList[currentSong].url}
            />

            <div className={classes.volumeDiv}>
				<span className={classes.spanVolume}>
					<i className='fas fa-volume-down'></i>
				</span>
				<input
					value={Math.round(volume * 100)}
					type='range'
					name='volBar'
					id='volBar'
					onChange={(e) => {
                        const percent = e.target.value / 100;
                        setVolume(percent);
                        audio.current.volume = percent;
                    }}
				/>
			</div>

            <div className={classes.musicControls}>
            <span className={classes.prevButton} onClick={()=>{
                dispatch(prevSong(state))
                toggleAudio()
            }}>
					<i className='fas fa-step-backward'></i>
			</span>
			<span
					className={classes.playButton}
					onClick={() => {
						dispatch(togglePlaying(state));
						toggleAudio();
					}}
				>
					<span className={classNames(playing && classes.hide)}>
						<i className='fas fa-play'></i>
					</span>
					<span className={classNames(!playing && classes.hide)}>
						<i className='fas fa-pause'></i>
					</span>
				</span>

				<span className={classes.nextButton} onClick={()=>{
                    dispatch(nextSong(state))
                    toggleAudio()
                }}>
					<i className='fas fa-step-forward'></i>
				</span>
            </div>

            <div className={classes.progressBar}>
				<div className={classes.songMeta}>
					<span className={classes.songTitle}>{songList[currentSong].title}</span>
					<span className={classes.songArtistName}>
						{songList[currentSong].artistName}
					</span>
				</div>
				<input
					onChange={(event)=>{
                        const compute = event.target.value * duration / 100;
                        setCurrentTime(compute);
                        audio.current.currentTime = compute;
                    }}
					value={duration ? (currentTime * 100) / duration : 0}
					type='range'
					name='progresBar'
					id='prgbar'
				/>
				<span className={classes.currentTime}>{formatSeconds(currentTime)}</span>/
				<span className={classes.totalTime}>{formatSeconds(duration)}</span>
			</div>

            <div className={classes.options}>
				<span
					onClick={()=>{
                        dispatch(toggleRandom(state))
                    }}
                    className={classNames(random && classes.active, 'random')}
				>
					<i className='fas fa-random'></i>
				</span>
				<span
					onClick={()=>{
                        dispatch(toggleRepeat(state))
                    }}
                    className={classNames(repeat && classes.active, 'repeat') }
				>
					<i className='fas fa-redo-alt'></i>
				</span>
			</div>

        </div>
    );
}

export default MainPlayer;