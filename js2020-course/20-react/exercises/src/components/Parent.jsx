import React from 'react'
import Child from './Child'
import { childrenWithProps } from '../utils/utils'

export default props => 
    <div>
        <h1>{props.name} {props.surname}</h1>
        <h2>Childs</h2>
        <ul>
            {
                childrenWithProps(props)    
            }            
        </ul>
    </div>