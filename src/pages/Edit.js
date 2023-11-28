import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useUser} from '../context/user.context';

export default function Edit() {
  const {id} = useParams();
  const [modifiedData,setModifiedData] = useState([]);
  const {user,setUser} = useUser()

  useEffect(() => {
        setModifiedData(user.find(item => item.name === id));
  },[id,user])

  const navigate = useNavigate()
  const handleUpdate = (event) => {
    event.preventDefault();
      setUser(user.map(item => {
        if(item.name === id){
            return {...modifiedData};
        }
        else{
            return item;
        }
      }))
      alert('Data Update Successfully!')
      navigate('/')
  }

  return (
      <div style={{ width: "1296px", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
        <Form style={{ width: "480px", height: "480px" }} onSubmit={handleUpdate}>
        <h1 className='mb-4 text-success'>Edit The Existing Data</h1>
          <Form.Group className='mb-3'>
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter First name"
              value = {modifiedData.name}
              onChange={e => setModifiedData({ ...modifiedData, name: e.target.value })}
              disabled
            />
          </Form.Group>
          <Form.Group className='mb-3' md="9">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              value = {modifiedData.username}
              required
              onChange={e => setModifiedData({ ...modifiedData, username: e.target.value })}
            />
          </Form.Group>
          <Form.Group className='mb-3' md="9">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email"
              value={modifiedData.email}
              onChange={e => setModifiedData({ ...modifiedData, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className='mb-3' md="9">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" value={modifiedData.phone} required onChange={e => setModifiedData({ ...modifiedData, phone: e.target.value })} />
          </Form.Group>
          <Form.Group className='mb-3' md="9">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" placeholder="Enter Website" value={modifiedData.website} required onChange={e => setModifiedData({ ...modifiedData, website: e.target.value })} />
          </Form.Group>
          <Button type="submit">Update form</Button>
        </Form>
      </div>
  )
}