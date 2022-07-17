import { ISongAction, ISongState } from "../../types/types";
import { Actions } from "../enums/enums";
import { songArr } from '../../static/songs';

const initialState : ISongState = {
    currentSong : 0,
    songList : songArr,
    repeat : false,
    random : false,
    playing : false,
} 


const songReducer = (state : ISongState = initialState, action : ISongAction) => {
    switch (action.type) {
        case Actions.SET_SONGS_ARRAY:
          return {
            ...state,
            songList: action.data,
          }
        case Actions.SET_CURRENT_SONG:
          return {
            ...state,
            currentSong: action.data,
            playing: true,
          }
        case Actions.TOGGLE_RANDOM:
          return {
            ...state,
            random: action.data,
          }
        case Actions.TOGGLE_REPEAT:
          return {
            ...state,
            repeat: action.data,
          }
        case Actions.TOGGLE_PLAYING:
          return {
            ...state,
            playing: action.data,
          }
        default:
          return state
    }
}

export default songReducer;