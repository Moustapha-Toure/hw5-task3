import React, { useState } from 'react'
import '../styles/Projects.css';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Select, { SelectChangeEvent }  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const HwSet = ({hwSet1, hwSet2}) => {
    const [optionChoosen, setOptionChoose] = useState("checkIn");

    const chooseOption = () => {
    }
    
    return (
        <>
            <div className='hwSets'>
                <div className='hwSet'>
                    <h1 className='hwName'>HWSET1: </h1>
                    <h1 className='hwQty'>{hwSet1} / 100 </h1>
                    <Slider style={{ margin: "5%" }} defaultValue={hwSet1} aria-label="Default" valueLabelDisplay="auto" />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={optionChoosen}
                        label="Choose"
                    >
                        <MenuItem value={"CheckIn"}>Check-in</MenuItem>
                        <MenuItem value={"CheckOut"}>Check-out</MenuItem>
                    </Select>
                </div>
                <div className='hwSet'>
                    <h1 className='hwName'>HWSET2: </h1>
                    <h1 className='hwQty'>{hwSet2} / 100 </h1>
                    <TextField className="inputHwqty" id="inputHw1qty" label="Enter Qty" variant="outlined" />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={optionChoosen}
                        label="Choose"
                    >
                        <MenuItem value={"CheckIn"}>Check-in</MenuItem>
                        <MenuItem value={"CheckOut"}>Check-out</MenuItem>
                    </Select>
                </div>
            </div>
        </>
    )
}

export default HwSet