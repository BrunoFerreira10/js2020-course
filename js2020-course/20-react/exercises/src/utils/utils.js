import React from 'react'

function childrenWithProps (props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {...props, ...child.props})
    }) 
}

export {childrenWithProps}