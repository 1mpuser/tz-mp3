import { ISongAction, ISong, ISongState } from '../../types/types';
import { Actions } from '../enums/enums';
export function setCurrentSong (id : number) : ISongAction {
    return {
        type : Actions.SET_CURRENT_SONG,
        data : id
    }
}

export function setSongArr (arr : ISong[]) : ISongAction {
    return {
        type : Actions.SET_SONGS_ARRAY,
        data : arr
    }
}
export function togglePlaying (state : ISongState) : ISongAction {
    return {
        type : Actions.TOGGLE_PLAYING,
        data : state.playing ? false : true
    }
}
export function prevSong(state : ISongState) : ISongAction{
    if(state.currentSong ===0) return setCurrentSong(state.songList.length - 1);
    else return setCurrentSong(state.currentSong - 1)
}
export function nextSong(state : ISongState): ISongAction{
    if(state.currentSong === state.songList.length - 1) return setCurrentSong(0);
    else return setCurrentSong(state.currentSong + 1)
}
export function toggleRepeat(state : ISongState, id? : number): ISongAction{
    return {
        type : Actions.TOGGLE_REPEAT,
        data : state.repeat ? false : true
    }
}
export function toggleRandom(state : ISongState, id? : number): ISongAction{
    return {
        type : Actions.TOGGLE_RANDOM,
        data : state.random ? false : true
    }
}
export function handleEnd(state : ISongState): ISongAction {
    if (state.random) return {
        type : Actions.SET_CURRENT_SONG,
        data : Math.floor(Math.random() * state.songList.length)
    }
    if (state.repeat) return {
        type : Actions.SET_CURRENT_SONG,
        data : state.currentSong
    }
    return nextSong(state)
}