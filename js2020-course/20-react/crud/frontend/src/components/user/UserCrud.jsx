import React from 'react'
import Main from '../templates/Main'
import { Component } from 'react'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User register: Create, Recover, Update and Delete!'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                User Register
            </Main>
        )
    }
}