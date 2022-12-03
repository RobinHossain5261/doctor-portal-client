import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import DeleteModal from '../../Shared/DeleteModal/DeleteModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctor = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);

    useTitle('ManageDoctor');


    const closeModal = () => {
        setDeleteDoctor(null);
    }

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Delete successfully.');
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl mb-5 text-primary">Manage Doctor : {doctors?.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Specilaty</th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) =>
                                <tr
                                    key={doctor._id}
                                >
                                    <td>{i + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{doctor.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-semibold'>{doctor.specialty}</td>
                                    <td>{doctor.email}</td>
                                    <td>
                                        <label onClick={() => setDeleteDoctor(doctor)} htmlFor="delete-modal" className="btn btn-error btn-xs">Delete</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor &&
                <DeleteModal
                    title={'Are you sure want to delete'}
                    message={`If you delete ${deleteDoctor.name}. It can't be undone.`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    modalData={deleteDoctor}
                ></DeleteModal>
            }
        </div>
    );
};

export default ManageDoctor;