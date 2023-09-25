import React from 'react';

const Table = ({data})=>{
    return(
        <table className='tablecss'>
            <thead>
                <tr>
                    <th className='first'>Rank</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th className='last'>Team</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>
                    (
                        <tr key={item.rank}>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>{item.points}</td>
                            <td>{item.teams}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Table;
