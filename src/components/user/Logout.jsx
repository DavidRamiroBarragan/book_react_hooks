import React, { useContext } from 'react';
import { StateContext } from '../../contexts';

export default function Logout() {
    const { state, dispatch } = useContext(StateContext);
    const { user } = state;
    function handleLogout(evt) {
        evt.preventDefault();
        dispatch({ type: 'LOGOUT' });
    }
    return (
        <form onSubmit={handleLogout}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout" />
        </form>
    );
}
