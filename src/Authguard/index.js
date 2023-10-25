import { Route, Redirect } from "react-router-dom"

const AuthGuard = ({MyComponent, isAuthorized, ...rest}) => {
    // console.log('AuthGuard isAuthorized', isAuthorized,  'renderComponent', renderComponent);
    return (<Route {...rest} render={(props) => isAuthorized ? <MyComponent {...props}/> : <Redirect to="/login" />} />)
}

export default AuthGuard;