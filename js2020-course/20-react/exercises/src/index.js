import React from 'react'
import ReactDOM from 'react-dom'

import GoodMorning from './components/GoodMorning'
import Multi, {GoodNigth} from './components/Multiples'
 
ReactDOM.render(
    <React.Fragment>
        <GoodMorning name="Guilherme"/>
        <Multi.GoodAfternoon name="Ana"/>
        <GoodNigth name="Bia"/>
    </React.Fragment>
, document.getElementById('root'))

