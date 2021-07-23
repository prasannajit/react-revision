import * as React from 'react';


interface UserList {
    users: string[]
}

export const Users = (props: UserList) => {
    return (
        <ul>
            {props.users.map((user: string, index: number) => {
                return <li key={index}>{user}</li>
            })}
        </ul>
    )
}