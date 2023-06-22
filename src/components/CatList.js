import React from 'react';
import Cat from './Cat';

const CatList = (props) => {
    return (
        <section>
            <h2>Glaring size: {props.catData.length}</h2>
            <ul> {
                props.catData.map((cat, i) => (
                    <Cat 
                        key={i} 
                        name={cat.name}
                        personality={cat.personality}
                        caretaker={cat.caretaker}
                        color={cat.color}
                    />
                ))
                }
            </ul>
        </section>
    )
}
export default CatList;