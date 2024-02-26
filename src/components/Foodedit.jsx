import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './Main.css';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Buffer } from 'buffer';
import baseUrl from '../Api';

const Foodedit = (props) => {
    //   var [ptype, setPtype] = useState({
    //     "packid": '', "packname": '',
    //     "pprice": '', "pdescription": '', "status": 'ACTIVE'

    //   });
    var [ptype, setPtype] = useState(props.data);
    const [status, setStatus] = React.useState('');
    var [selectedimage, setSelectedimage] = useState([]);



    const navigate = useNavigate();

    const ptypehandler = (event) => {
        setStatus(event.target.value);
        const { name, value } = event.target
        setPtype((ptype) => ({ ...ptype, [name]: value }))
        // console.log(ptype)
    }

    // const saveData = () => {
    //   axios.post("http://localhost:3005/ptnew", ptype)
    //     .then((response) => { alert("Record saved") })
    //     .catch(err => console.log(err))
    //   navigate('/packageview')

    // }
    const saveData = () => {
        const formdata = new FormData();
        formdata.append('packid', ptype.packid);
        formdata.append('packname', ptype.packname);
        formdata.append('pprice', ptype.pprice);
        formdata.append('image', selectedimage);
        formdata.append('pdescription', ptype.pdescription);
        formdata.append('status', ptype.status);
      
        fetch(baseUrl+`/ptedit/${ptype._id}`,
            { method: 'put', body: formdata, })
            .then((response) => response.json())
            .then((data) => {
                alert("record saved")
            })
            .catch((err) => {
                console.log("error", err)
            })

        navigate('/packageview')

    }

    const handleImage = (event) => {
        const file = event.target.files[0];
        setSelectedimage(file)
        // ptype.image = file
    }

    return (<div>
          <Navbar />
            <Sidebar />
        <div className='background-3'>
          
            <form>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <center>
                            <h1>Food Items</h1>

                            Package Code : <input type="text" name="packid" value={ptype.packid} onChange={ptypehandler} />
                            <br /><br />
                            Package Name : <input type="text" name="packname" id="p2" value={ptype.packname} onChange={ptypehandler} />
                            <br /><br />
                            Price : <input type="number" name="pprice" id="p6" value={ptype.pprice} onChange={ptypehandler} />
                            <br /><br />
                            Image :  <img src={`data:image/*;base64,${Buffer.from(ptype.image.data).toString('base64')}`} width="50" height="50" alt='Error' />
                            <input type="file" onChange={handleImage} />
                            <br />
                            Description : <textarea rows='4' name='pdescription' id='p7' value={ptype.pdescription} onChange={ptypehandler} />
                            <br /><br />
                            Status   &nbsp;
                            <select name='status'
                                value={status}
                                onChange={ptypehandler} >
                                <option >ACTIVE</option>
                                <option >INACTIVE</option>
                            </select>
                            <br /><br />
                            <Button variant='contained' onClick={saveData}>SAVE</Button>
                        </center>
                    </CardContent>
                </Card>
            </form>
        </div>
</div>
    )
}

export default Foodedit
