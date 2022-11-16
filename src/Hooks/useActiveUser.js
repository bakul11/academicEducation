import { useState, useEffect } from "react";

const useActiveUser = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/auth/activeUser`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(result => setUser(result))
    }, [user])
    return [user]

}

export default useActiveUser;