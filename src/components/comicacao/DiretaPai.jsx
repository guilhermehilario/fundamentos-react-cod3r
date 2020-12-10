/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho name="Junior" age={25} isGeek={true} />
            <DiretaFilho name="Gabriel" age={22} isGeek={false} />
        </div>
    );
};