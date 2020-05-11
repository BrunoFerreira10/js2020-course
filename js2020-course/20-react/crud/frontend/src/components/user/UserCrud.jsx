import React from 'react'
import Main from '../templates/Main'
import { Component } from 'react'

import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User register: Create, Recover, Update and Delete!'
}

const baseUrl = 'http://localhost:3001/users'
const initiaState = {
    user: {name: '', email:''},
    list: []
}

export default class UserCrud extends Component {

    state = {...initiaState}

    clear() {
        this.setState({user: initiaState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        
        axios[method] (url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initiaState.user, list})
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                User Register
            </Main>
        )
    }
}