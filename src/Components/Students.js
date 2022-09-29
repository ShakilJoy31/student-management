import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Students.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Students = () => {
    const navigate = useNavigate();
    const [add, setAdd] = useState(false);
    const [manage, setManage] = useState(true);
    const addStudent = () => {
        navigate('/add')
        setAdd(true);
        setManage(false);
    }
    const manageStudents = () => {
        navigate('/')
        setAdd(false);
        setManage(true);
    }

    const logOutStudent = () => {
        toast.success('Log out successful.'); 
    }
    return (
        <div className='flex mx-4 mt-12'>
            <div className='mr-6'>
                <div style={{ cursor: 'pointer' }} className={` ${add ? "active" : ""} pl-6 flex items-center`} onClick={addStudent}>
                    <i class="fa-solid fa-users"></i>
                    <p className='ml-4'>Add students</p>
                </div>
                <div style={{ cursor: 'pointer' }} className={` ${manage ? "active" : ""} my-6 pl-6 flex items-center`} onClick={manageStudents}>
                    <i class="fa-solid fa-people-roof"></i>
                    <p className='ml-4'>Manage Students</p>
                </div>
                <label style={{}} htmlFor="my-modal" className="modal-button">
                    <div style={{ cursor: 'pointer',marginLeft:'25px'}} className='flex items-center'>
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <p className='ml-4'>Log out</p>
                    </div>
                </label>

            </div>
            <div>
                <Outlet></Outlet>
            </div>


            <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="text-2xl font-bold text-red">Are you sure, you want to log out?</h3>
                        <div className="modal-action">
                            <label style={{border:'0'}} htmlFor="my-modal" className="w-32 bg-green-600 btn">No</label>
                            <label onClick={logOutStudent} style={{border:'0'}} htmlFor="my-modal" className="w-32 bg-red-600 btn">Yes</label>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Students;