/*import/no-anonymous-default-export*/
import "./Card.css";
import React from 'react';

export default props => {

    const cardColor = props.color || '#800';

    const cardStyle = {
        backgroundColor: cardColor,
        borderColor: cardColor
    };

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};