// import React, { Fragment } from 'react'
import React from 'react'

export default props => [
    <h1 key='1'>Good morning {props.name}!</h1>,
    <h2 key='2'>See you later!</h2>
]

/* export default props => 
    <Fragment>
        <h1>Good morning {props.name}!</h1>
        <h2>See you later!</h2>
    </Fragment> */