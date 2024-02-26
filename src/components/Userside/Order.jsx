import axios from 'axios';
import { Buffer } from 'buffer';
import React, { useEffect, useState } from 'react';
import baseUrl from '../../Api';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [ptype, setPtype] = useState([]);

    useEffect(() => {
        console.log("djfhjs");
        axios.get(baseUrl + "/ptview")
            .then(response => {
                console.log(response.data);
                setPtype(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (value) => {
        console.log(value);
        navigate(`/address/${value}`);
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {ptype.map((ptypeItem, index) => (
                <div key={index} style={{ width: '300px', height: '400px', margin: '20px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <img src={`data:image/jpeg;base64,${Buffer.from(ptypeItem.image.data).toString('base64')}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Error" />
                    <div>
                        <h3>{ptypeItem.packname}</h3>
                        <p><strong>Package ID:</strong> {ptypeItem.packid}</p>
                        <p><strong>Price:</strong> {ptypeItem.pprice}</p>
                        <p><strong>Description:</strong> {ptypeItem.pdescription}</p>
                    </div>
                    <button style={{ alignSelf: 'center' }} onClick={() => handleSubmit(ptypeItem._id)}>Buy Now</button>
                </div>
            ))}
        </div>
    );
};

export default Order;
