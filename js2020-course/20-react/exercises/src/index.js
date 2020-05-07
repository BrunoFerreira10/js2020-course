import React from 'react'
import ReactDOM from 'react-dom'

import Greeeting from './components/Greeting'
 
ReactDOM.render(
    <React.Fragment>
        <Greeeting type="Good morning" name="João"/>        
    </React.Fragment>
, document.getElementById('root'))

