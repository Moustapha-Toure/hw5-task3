import React, { useState } from 'react'
import '../styles/Projects.css';
import { HwSet } from './Components';
import Button from '@mui/material/Button';



const Project = ({ project: { projectName, authUsers, hwSet1, hwSet2, status } }) => {
  if (authUsers.length === 0) {
    authUsers = ["none authorized"]
  }

  const [statusUpdate, setStatusUpdate] = useState(false);
  const [newStatus, setnewStatus] = useState(status);

  let backgroundColor = (status === true) ? "green" : "grey";
  let statusOption = (status === true) ? "leave" : "join";

  let statusChange = () => {
    setStatusUpdate(!statusUpdate);
    setnewStatus(!status);
  }

  return (
    <>
      <div className='projectContainer' style={{ backgroundColor: `${backgroundColor}` }}>
        <h5 className='projectName'>{projectName}</h5>
        <div className='usersAuthed' >
          {authUsers?.map((user) => <p className='userName'>{user}</p>)}
        </div>
        <HwSet hwSet1={hwSet1} hwSet2={hwSet2} />
        <Button style={{ backgroundColor: "lavender", color: "black" }} variant="contained" onClick={() => statusChange()}>{statusOption}</Button>
        {statusUpdate && <p>status will be changed</p>}
      </div>
    </>
  )
}

export default Project