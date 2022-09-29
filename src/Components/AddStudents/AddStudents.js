import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddStudents = () => {
    const studentAdded = () =>{
        toast.success('Student information is added successfully'); 
    }
    return (
        <div>
            <div style={{ width: '950px' }} className='flex justify-between'>
                <h1 className='manageStudent-heading'>Add Students.</h1>
                <p>29 july 2022 16:10</p>
            </div>
            <div>
                <div>
                    <div className='flex'>
                        <input style={{ outline: 'none' }} type="text" placeholder="First Name" className="w-full max-w-xs input input-bordered " required/>

                        <input style={{ outline: 'none' }} type="text" placeholder="Middle Name" className="w-full max-w-xs mx-6 input input-bordered" required/>

                        <input style={{ outline: 'none' }} type="text" placeholder="Last Name" className="w-full max-w-xs input input-bordered" required/>
                    </div>

                    <div className='flex mt-6'>
                        <select style={{ outline: 'none' }} className="max-w-xs select dropdown">
                            <option disabled selected>Select Class</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                            <option>Four</option>
                            <option>Five</option>
                        </select>
                        <select style={{ outline: 'none' }} className="max-w-xs mx-6 select dropdown">
                            <option disabled selected>Select Division</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                        <input style={{ outline: 'none' }} type="text" placeholder="Enter Roll No in Digits" className="w-full max-w-xs input input-bordered" required/>
                    </div>

                    <div className='flex mt-12'>
                        <input style={{ outline: 'none', width:'50%' }} type="text" placeholder="Address Line 1" className=" input input-bordered" required/>
                        <div style={{width:'20px'}}></div>
                        
                        <input style={{ outline: 'none', width:'50%' }} type="text" placeholder="Address Line 2" className=" input input-bordered" required/>
                    </div>
                    <div className='flex mt-6'>
                        <input style={{ outline: 'none' }} type="text" placeholder="Landmark" className="w-full max-w-xs input input-bordered " required/>
                        <input style={{ outline: 'none' }} type="text" placeholder="City" className="w-full max-w-xs mx-6 input input-bordered" required/>
                        <input style={{ outline: 'none' }} type="text" placeholder="Pincode" className="w-full max-w-xs input input-bordered" required/>
                    </div>
                    <button onClick={studentAdded} className='addStudent-button'>Add Student</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddStudents;