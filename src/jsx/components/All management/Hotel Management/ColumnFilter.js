import React from 'react';

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    
    return (
        <div>
            <input 
                className="form-control input-search" 
                value={filterValue || ''} 
                onChange={e => setFilter(e.target.value)} 
                placeholder="Filter..." 
                style={{ width: "100%" }} 
            />
        </div>
    );
};
