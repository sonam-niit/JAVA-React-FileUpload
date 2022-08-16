import React, { useState } from "react";
import axios from "axios";

export function AddStudent(props){

    const [student,setStudent]=useState({name:'',email:''});
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
      }
    const inputHandler= (e)=>{
        setStudent((student)=>(
            {
                ...student,
                [e.target.name]:e.target.value
        }))
    }
    const handleFileSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("model",JSON.stringify(student))
        formData.append("file", selectedFile);

        axios.post("http://localhost:8082/api/student",formData,
        {headers: { "Content-Type": "multipart/form-data" }})
        .then(response=>{console.log(response.status);props.history.push('/userList')})
        .catch(error=>console.log(error));
        
      }
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     axios.post("http://localhost:8082/api/student",student)
    //     .then(resp=>props.history.push('/userList'))
    //     .catch(error=>console.log("error occured",error))
    // }

    return (
        <div>
            <h1>Add User</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className="form" onSubmit={handleFileSubmit}>
                            <label>Name</label>
                            <input type='text' name='name' id='name' placeholder="Enter Name"
                            value={student.name} className='form-control' onChange={inputHandler}/>
                            <label>Email</label>
                            <input type='text' name='email' id='email' placeholder="Enter Email"
                            value={student.email} className='form-control' onChange={inputHandler}/>
                            <label>Password</label>
                            <input type='file' name='file' id='file' className='form-control' 
                            onChange={handleFileSelect}/>
                            

                            <button className="btn btn-primary" type="submit">Add User Details</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) ;
}