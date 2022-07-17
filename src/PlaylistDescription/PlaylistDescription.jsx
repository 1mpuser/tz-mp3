import {FC, useState, useMemo, useEffect} from 'react'
import classes from './PlaylistDescription.module.css';
import Select from '../components/select/select'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setSongArr } from '../store/actionCreators/actionCreators';
import {nanoid} from 'nanoid'
// interface PlaylistDescriptionProps{
//     img : string
// }
// interface IOption{
//     title : string,
//     value : string
// }
function getObjectData( object, path ){
    let dataParams = path.split('.');

    if( ! dataParams.length ){
        return object;
    }

    let ret = object[dataParams[0]];
    for( let i = 1; i < dataParams.length; i++ ){
        ret = ret[dataParams[i]];
    }

    return ret;
}

const PlaylistDescription  = ({img}) => {
    const {songList} = useTypedSelector(state => state.song);
    const dispatch = useDispatch();
    
    
    const options  = [
        {
            title : 'Sort',
            value : 'order'
        },
        {
            title : 'Sort on title',
            value : 'title'
        }
    ]
    const [value, setValue] = useState(options[0].title);


    useEffect(()=>{
        let neededIndex = -1;
        for (let i = 0; i < options.length; i++) {
            if (options[i].title === value) {
                neededIndex = i;
                break
            }
        }
        const neededObj = options[neededIndex]
        const arr = [...songList];
        
        console.log(neededObj.value)

        if (neededObj.value != 'order' && neededObj.value != 'length') {
            arr.sort((a, b) => getObjectData(a, neededObj.value).localeCompare(getObjectData(b, neededObj.value)))
            console.log(arr)
        }
        if (neededObj.value === 'title') {
            arr.sort((a,b) =>a.title.localeCompare(b.title))
            dispatch(setSongArr(arr))
        }
        else if (neededObj.value === 'order') {
            arr.sort((a, b) => a.order - b.order);
            console.log(arr)
            dispatch(setSongArr(arr))
        }
        
    }, [value])
    return (
        <div className={classes.mainDiv}>
            <div style={{paddingLeft : "15px", display : "flex", flexDirection : 'row'}}>
                <img src={img}/>
                <div className={classes.separatingDiv}>
                <span className={classes.signature}>PLAYLIST : </span>
                <h1> Mussorgsky's Pictures at an Exhibition</h1>
                
                </div>
            </div>
            <div className={classes.action}>
                <div className={classes.box}>
                    <select value={value} onChange = {(e)=>{
                        if (e.target.value) setValue(e.target.value);
                    }}>
                        {options.map((item)=><option key={nanoid()}>{item.title}</option>)}    
                    </select>           
                </div>
            </div>
        </div>
    );
}

export default PlaylistDescription;