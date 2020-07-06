import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './context/auth'

//function PrivateRoute({ component: Component, ...rest }) {
function PrivateRoute( p ) {
    
    const isAuthenticated = useAuth()
    
    const { path } = p
    const { props } = p.render()
    const { Component, Obj } = props

    return (
        <Route 
            {...path} 
            render={(props)=> (
                isAuthenticated ? (
                    <Component 
                        {...props}
                        obj={ Obj }
                    />
                ) : (
                    <Redirect to='/' />
                )
            )}
        />
    )
}

export default PrivateRoute