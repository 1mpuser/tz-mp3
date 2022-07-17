import { Actions } from "../store/enums/enums"
export interface ISong {
    title : string,
    artistName : string,
    albumTitle : string, 
    url : string
}
export interface ISongState {
    currentSong : number,
    songList : ISong[],
    repeat : boolean,
    random : boolean,
    playing : boolean,
}
export interface ISongAction {
    type : Actions.SET_CURRENT_SONG | Actions.SET_SONGS_ARRAY | Actions.TOGGLE_PLAYING | Actions.TOGGLE_RANDOM | Actions.TOGGLE_REPEAT,
    data : any
}