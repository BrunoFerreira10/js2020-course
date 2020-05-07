import React from 'react'
import ReactDOM from 'react-dom'

import Parent from './components/Parent'
import Child from './components/Child'
 
ReactDOM.render(
    <React.Fragment>
        <Parent name="Paulo" surname="Silva">       
            {/* How assign childs components here?*/}
            <Child name="Pedro" surname="Silva" />
            <Child name="Paulo" surname="Silva" />
            <Child name="Carla" surname="Silva" />
        </Parent>
    </React.Fragment>
, document.getElementById('root'))

