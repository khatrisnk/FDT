import React from 'react';

export default class Logout extends React.PureComponent {
    render() {
        if(typeof window !== 'undefinded') {
            sessionStorage.setItem('isAuthentic', false);
            window.location.href = "/";
        }
        return <div>Logout</div>
    }
}