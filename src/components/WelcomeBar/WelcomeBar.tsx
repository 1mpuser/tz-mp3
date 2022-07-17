import {FC} from 'react';
import classes from'./WelcomeBar.module.css'
const WelcomeBar = () => {
    return (
        <header className={classes.bar}>
            <h3>Mp3 player</h3>
        </header>
    );
}

export default WelcomeBar;