import React from 'react';

const AddedCountry = (props) => {

    const count = props.count;

    //console.log(props);
    // let totalPopulation = 0;
    // for (let i = 0; i < count.length; i++) {
    //     const country = count[i];
    //     totalPopulation = totalPopulation + country.population;
    // }

    const totalPopulation = count.reduce((total,ct) => total + ct.population , 0)

    return (
        <div>
            <h2>Added Country: {count.length}</h2>
            <p>Population: {totalPopulation} </p>
        </div>
    );
};

export default AddedCountry;