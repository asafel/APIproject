import React from 'react';
import style from './style'

const Datum = ({ data }) => {

    return (
        <div style={style.datumBox}>
            <span>{data.name}</span>
            <span>{data.email}</span>
        </div>
    );
}

export default Datum;
