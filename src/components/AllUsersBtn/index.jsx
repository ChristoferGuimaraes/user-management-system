import React from 'react';
import { TiArrowBack } from 'react-icons/ti'

export function AllUsersBtn() {
    return (
        <div className="box-nav d-flex justify-between">
        <div className="filter">
            <a href="/"><TiArrowBack /> All Users</a>
        </div>
    </div>
    )
}