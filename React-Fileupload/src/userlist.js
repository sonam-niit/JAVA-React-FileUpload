import React, { useEffect, useState } from "react";
import axios from 'axios';

export function UserList(props){

    const [users,setUsers]=useState([]);
    const baseUrl='http://localhost:8082/UserLogService/users/';

    const getData=()=>{
        const mydata=axios.get(baseUrl)
        mydata.then(response=>{setUsers(response.data); })
        .catch(error=>{console.log(error);setUsers([])})
    }
    const deleteUser= (id)=>{
        axios.delete(baseUrl+"/"+id)
        .then(res=>getData())
    }
    const viewUser= (id)=>{
        props.history.push({
            pathname:'/userdetails/'+id
        })
    }
    const editUser= (id)=>{
        props.history.push({
            pathname:'/editUser/'+id
        })
    }
    const tabRow= users.map((user,i)=>{
        return(
            <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>
                    <button className="btn btn-warning" onClick={()=>{viewUser(user.id)}}>View User</button>
                    <button className="btn btn-info" onClick={()=>{editUser(user.id)}}>Edit User</button>
                    <button className="btn btn-primary" onClick={()=>{deleteUser(user.id)}}>Delete User</button>
                </td>
            </tr>
        );
    })

    useEffect(()=>{
        getData();
    },[]);
        
    return (
        <div>
            <h1>User List</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th><th>Name</th><th>Email</th><th>Country</th>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    ) ;
}