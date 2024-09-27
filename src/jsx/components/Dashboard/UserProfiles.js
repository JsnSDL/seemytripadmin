import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Avatar from './Avatar';
import { fetchRecentUsers } from '../../../store/actions/userActions';
import { selectRecentUsers, selectLoading, selectError } from '../../../store/selectors/userSelectors';
import PageTitle from "../../layouts/PageTitle";

const UserProfiles = React.memo(() => {
  const dispatch = useDispatch();
  const users = useSelector(selectRecentUsers) || [];
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // Filter states
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [phoneFilter, setPhoneFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");

  useEffect(() => {
    dispatch(fetchRecentUsers());
  }, [dispatch]);

  // Filter logic
  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        (nameFilter === "" || user.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
        (phoneFilter === "" || (user.phone && user.phone.includes(phoneFilter))) &&
        (emailFilter === "" || user.email.toLowerCase().includes(emailFilter.toLowerCase()))
      )
    );
  }, [users, nameFilter, phoneFilter, emailFilter]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <PageTitle activeMenu="User Profiles" motherMenu="Train Booking" />
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">User Details</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {/* Filters */}
            <div className="mb-3">
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Filter by Name"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Filter by Phone"
                    value={phoneFilter}
                    onChange={(e) => setPhoneFilter(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Filter by Email"
                    value={emailFilter}
                    onChange={(e) => setEmailFilter(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Table */}
            <table className="table table-striped table-bordered bg-white">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-start-0 border-end-0">User</th>
                  <th scope="col" className="border-start-0 border-end-0">Name</th>
                  <th scope="col" className="border-start-0 border-end-0">Phone</th>
                  <th scope="col" className="border-start-0 border-end-0">Email</th>
                  <th scope="col" className="border-start-0 border-end-0">Country</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="border-start-0 border-end-0">
                        {/* <Avatar name={user.name} /> */}
                      </td>
                      <td className="border-start-0 border-end-0">{user.name}</td>
                      <td className="border-start-0 border-end-0">
                        {user.phone ? user.phone : "No Phone Number"}
                      </td>
                      <td className="border-start-0 border-end-0">{user.email}</td>
                      <td className="border-start-0 border-end-0">India</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
});

export default UserProfiles;

