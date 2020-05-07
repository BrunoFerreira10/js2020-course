import React from 'react'
import Child from './Child'

export default props => 
    <div>
        <h1>{props.name} {props.surname}</h1>
        <h2>Childs</h2>
        <ul>
            <Child name="Pedro" surname={props.surname} />
            <Child {...props} />
            <Child {...props} name="Carla"/>

        </ul>
    </div>