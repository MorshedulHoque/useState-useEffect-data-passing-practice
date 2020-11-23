import React from 'react';

const Countries = (props) => {
    const {name, population, flag} = props.country;
    //console.log(props.country)
    const style = {
        border: '4px solid red',
        padding: '20px',
        margin: '20px'
    }
    return (
        <div style={style}>
            <img style={{height:'100px'}} src={flag} alt=""/>
            <h4>Country name:{name}</h4>
            <p>Population{population}</p>
            <button onClick={() =>  props.eventlisteners(props.country)}>Add County</button>
        </div>
    );
};

export default Countries;