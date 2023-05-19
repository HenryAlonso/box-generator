import React, { useState } from 'react';
import styles from '../styles.module.css';

const BoxForm = props => {
    const [color, setColor] = useState("");
    const [myBoxes, setMyBoxes] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(color) {
            setMyBoxes([ ...myBoxes, color ]);
            setColor('');
        };
    };

    return (
        <div className={styles.boxBody}>
            <form onSubmit={ handleSubmit }>
                <label className={styles.boxLabel}>
                    Color: 
                </label>
                <input type='text' value={ color } onChange={(e) => setColor(e.target.value)}/>
                <button type='submit'>Add your box</button>
            </form>
            <div className={styles.boxContainer}>
                {myBoxes.map((boxColor, index) =>(
                <div className={styles.box} key={index} style={{ backgroundColor: boxColor }}/>
                ))}
            </div>
        </div>
    );

}

export default BoxForm;