import React from 'react';

const JsonTable = ({data})=>{
    return(
        <table className='tablecss'>
            <thead>
                <tr>
                    <th className='first'>Id</th>
                    <th>Name</th>
                    <th className='last'>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>
                    (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default JsonTable;
