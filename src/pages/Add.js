import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUser } from '../context/user.context';


function Add () {
   
  const {inputData,setInputData,handleSubmit} = useUser();

  return (
    <div style={{width:"1296px",height:"100vh"}} className='d-flex justify-content-center align-items-center'>
      <Form style={{width:"480px",height:"480px"}} onSubmit={handleSubmit}>
      <h1 className='mb-4 text-success'>Create New Data</h1>
        <Form.Group className='mb-3'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter First name"
            onChange={e=> setInputData({...inputData, name:e.target.value})}
          />
        </Form.Group>
        <Form.Group className='mb-3' md="9">
          <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              onChange={e=> setInputData({...inputData, username:e.target.value})}
            />
        </Form.Group>
        <Form.Group className='mb-3' md="9">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            onChange={e=> setInputData({...inputData, email:e.target.value})}
          />
        </Form.Group>
        <Form.Group className='mb-3' md="9">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Phone Number" required onChange={e=> setInputData({...inputData,phone:e.target.value})} />
        </Form.Group>
        <Form.Group className='mb-3' md="9">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" placeholder="Enter Website" required onChange={e=> setInputData({...inputData, website:e.target.value})}/>
        </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default Add ;