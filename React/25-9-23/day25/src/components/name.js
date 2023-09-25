import React from 'react';

const NameTable = ({data, remove})=>{
    return(
        <div className='center-table'>
            <table className='tablecss'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index)=>
                    (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td><button onClick={remove}  className='btn remove'>Remove</button></td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    )
}
export default NameTable;
