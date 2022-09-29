import React from 'react';
import eye from '../assets/Vector (1).svg';
import edit from '../assets/Vector (2).svg';
import deleteIcon from '../assets/Vector.svg';

const ManageStudents = () => {
    const studentInfo = [
        { name: 'Bruce Banner', class: 'VI-A', roll: '12' },
        { name: 'Doctor Strange', class: 'VI-A', roll: '13' },
        { name: 'Scarlet Witch', class: 'VI-A', roll: '14' },
        { name: 'Captain Amercia', class: 'VI-A', roll: '15' },
        { name: 'Black Widow', class: 'VI-A', roll: '16' },
    ]
    return (
        <div>
            <h1 className='manageStudent-heading'>Manage Students.</h1>
            <div>
                <div className="overflow-x-auto table-border">
                    <table className="student-table">
                        <thead className='table-heading-color'>
                            <tr>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Roll No.</th>
                                <th>View / Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentInfo.map(singleStudent =>
                                    <tr>
                                        <td style={{ height: '48px' }}><span className='flex justify-center'>{singleStudent.name}</span></td>
                                        <td style={{ height: '48px' }}><span className='flex justify-center'>{singleStudent.class}</span></td>
                                        <td style={{ height: '48px' }}><span className='flex justify-center'>{singleStudent.roll}</span></td>
                                        <td style={{ height: '48px' }}>
                                            <div className='flex justify-center'>
                                                <div className='flex items-center'>
                                                    <i class="fa-solid fa-eye text-red-500"></i>
                                                    <img className='mx-6' src={eye} alt="" />
                                                    <i class="fa-sharp fa-solid fa-trash text-red-500"></i>

                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageStudents;