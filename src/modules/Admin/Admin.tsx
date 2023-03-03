import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { decodeToken } from '../../function/decodeToken';

const Admin: React.FC = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const token:any = sessionStorage.getItem('token')

    
    useEffect(() => {
        const getData = () => {
            axios.get('auth/getAllUser', 
            { 
                'headers': 
                {"Authorization": `Bearer ${JSON.parse(token)}`,
                "Content-Type": "application/json" }
            })
                .then(response => {
                    setData(response.data)
                })
                .catch((error) => {
                    setError(error.response.data.message)
                });
        }
        getData()
    }, [])


    return (
        <>
            {
                error ? <div><h2>{error}</h2></div> :
                    <div>
                        {data.map((item: any, index) => (
                            <div key={index}>
                                <h2>user name {item.username}</h2>
                            </div>
                        ))}
                    </div>
            }
        </>
    )
}

export default Admin