
import { Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth == false) return <Redirect to='/login' />
            return <Component {...this.props} />

        }
    }
    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth

    })

   let ConnectedAuthRedirectComponent= connect(mapStateToPropsForRedirect) (RedirectComponent);
return ConnectedAuthRedirectComponent;
}