import React from "react";
import { users } from "./db";
import { Link, useSearchParams } from "react-router-dom";

function Home() {   
    const [readSearchParams, setSearchParams] = useSearchParams();
    setTimeout(() => {
        setSearchParams({
            day: 'today',
            tomorrow: 'friday'
        });
    }, 3000);
    
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;