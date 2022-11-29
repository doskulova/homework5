import React, {useState} from 'react';

function PortfolioPage() {
    const [works, setWorks]=useState([])
    const getWorks=()=>{
        setWorks(['Work1', 'Work2'])
    }
    return (
        <div>
            <button onClick={getWorks}>get</button>
            <ul>
                <li>{works}</li>
                <li>{works}</li>
            </ul>
        </div>
    );
}

export default PortfolioPage;