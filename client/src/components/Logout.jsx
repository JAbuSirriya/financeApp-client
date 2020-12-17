import React from 'react';

export const Logout = () => {
    React.useEffect(() => {
        localStorage.removeItem('token');
        window.location.href = "/";
    }, []);
    return null;
}