import React from 'react'
import "./BuildControl.css";
import BuildControl from './BuildControl';

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat' , type: 'meat'}
];

const BuildCotrols = (props) => {
    return (
        <div className="BuildControls"> 
            {controls.map(ctrl =>
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}/>
                )}
        </div>
    )
}

export default BuildCotrols
