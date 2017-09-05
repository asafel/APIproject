import React from 'react';
import Highlight from 'react-highlighter'
import style from './style';

const Datum = ({ name, email }) => {

    return (
        <div style={style.datumBox}>
            <span> <u>name</u>: &nbsp;&nbsp;
                <span dangerouslySetInnerHTML={{__html: name}}></span>
            </span>
            <span> <u>email</u>:&nbsp;&nbsp;&nbsp;
                <span dangerouslySetInnerHTML={{__html: email}}></span>
            </span>
        </div>
    );

}

export default Datum;
