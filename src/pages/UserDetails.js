import UserTable from '../component/UserTable'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { TiPlus } from "react-icons/ti";
import { Link } from 'react-router-dom';
import {useUser} from '../context/user.context';

export default function UserDetails() {
    const {user,handleDelete} = useUser()

    return (
        <div>
            <h1 className='text-center mt-3'>REACT AXIOS TASK</h1>
            <div className='mt-5 d-flex justify-content-between'>
                <h3>User Details</h3>
                <Link to='/add'><Button className='button' size='sm' variant="primary"><TiPlus /> Add New</Button>{' '}</Link>
            </div>
            <Table className='mt-3' striped bordered hover size='xl'>
                <thead>
                    <tr>
                        <th>FIRST NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>WEBSITE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, i) => <UserTable key={i} data={item} handleDelete={handleDelete} />)
                    }
                </tbody>
            </Table>
        </div>
    )
}
