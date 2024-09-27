import React from 'react';

export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <div className="hotel-user-search">
            Search User Profiles: {' '}
            <input 
                className="ml-2 input-search form-control"
                value={filter || ''}  
                onChange={e => setFilter(e.target.value)} 
                placeholder="Search by name, email, phone, booking ID..." 
                style={{ width: "30%" }} 
            />
        </div>
    );
};
