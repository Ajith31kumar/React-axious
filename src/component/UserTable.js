import React from 'react'
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function UserTable({ data,handleDelete }) {
    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.website}</td>
            <td>
            <Link to={`/Edit/${data.name}`}><BiSolidPencil className='ms-3' /></Link> 
            <FaTrash onClick={() => handleDelete(data.id)} className='ms-3' />
          </td>
        </tr>
    )
}
