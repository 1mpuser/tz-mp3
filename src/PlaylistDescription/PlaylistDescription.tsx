import {FC} from 'react'
import classes from './PlaylistDescription.module.css'
interface PlaylistDescriptionProps{
    img : string
}

const PlaylistDescription : FC<PlaylistDescriptionProps> = ({img}) => {
    return (
        <div className={classes.mainDiv}>
            <div style={{paddingLeft : "15px", display : "flex", flexDirection : 'row'}}>
                <img src={img}/>
                <div className={classes.separatingDiv}>
                <span className={classes.signature}>PLAYLIST : </span>
                <h1> Mussorgsky's Pictures at an Exhibition</h1>
                </div>
            </div>
        </div>
    );
}

export default PlaylistDescription;