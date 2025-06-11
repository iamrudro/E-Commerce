import React, { useEffect } from 'react';
import '../AdminStyles/UsersList.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, removeErrors } from '../features/admin/adminSlice';
import { toast } from 'react-toastify';

function UsersList() {
    const { users, loading, error } = useSelector(state => state.admin);
    const dispatch = useDispatch();
    console.log(users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    useEffect(() => {
        if (error) {
            toast.error(error, { position: 'top-center', autoClose: 3000 });
            dispatch(removeErrors())
        }
    }, [dispatch, error])

    return (
        <>
            {loading ? (<Loader />) : (<>
                <PageTitle title="All Users" />
                <Navbar />
                <div className="usersList-container">
                    <h1 className="usersList-title">All Users</h1>
                    <div className="usersList-table-container">
                        <table className="usersList-table">
                            <thead>
                                <tr>
                                    <th>Sl. No.</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Created At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <Link to={`/admin/user/${user._id}`} className='action-icon edit-icon'><Edit /></Link>
                                            <button className='action-icon delete-icon'><Delete /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer />
            </>)}
        </>
    )
}

export default UsersList
