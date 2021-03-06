import React from 'react';
import { useUserState } from '../../hooks';
import Login from './Login';
import Register from './Register';

const Logout = React.lazy(() => import('./Logout'));
export default function UserBar() {
    const user = useUserState();

    if (user) {
        return <Logout />;
    }
    return (
        <>
            <Login />
            <Register />
        </>
    );
}
