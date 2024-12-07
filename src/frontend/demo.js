import React, { useState } from 'react';
import axios from 'axios';

const ComponentName = () => {
    const [data, setdata] = useState('');
    const [paraview, setparaview] = useState(false);

    const formdata = async () => {
        try {
            setparaview(true);
            const response = await axios.post(
                "http://localhost:5000/message",
                { word: data }, // Send JSON data
                {
                    headers: {
                        "Content-Type": "application/json", // Use application/json
                    }
                }
            );
            if (response.data.success) {
                console.log("Data sent successfully!", response.data);
            }
        } catch (error) {
            console.error("Error uploading data:", error);
        }
    };

    const datavariable = (event) => {
        setdata(event.target.value);
    };

    return (
        <div className="testingdiv">
            <input
                placeholder="Enter something"
                className="input"
                onChange={datavariable}
                value={data}
            />
            <button onClick={formdata}>Press</button>
            {paraview && <h1>{data}</h1>}
        </div>
    );
};

export default ComponentName;
