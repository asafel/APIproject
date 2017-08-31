import React from 'react';
import Highlight from 'react-highlighter'
import style from './style';

const Datum = ({ data, term }) => {

    return (
        <div style={style.datumBox}>
            <span> name:
                <Highlight matchStyle={style.matchStyle} search={term}>
                    {data.name}
                </Highlight>
            </span>

            <span> email:
                 <Highlight matchStyle={style.matchStyle} search={term}>
                    {data.email}
                </Highlight>
            </span>
        </div>
    );

}

export default Datum;
