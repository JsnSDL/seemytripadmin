import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// Update the paths based on your folder structure


const TrainManagement = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedTrain, setSelectedTrain] = useState(null);
    const [filter, setFilter] = useState('');
  
    const trainData = [
      { id: 1, number: '12345', name: 'Shatabdi Express', route: 'Delhi - Mumbai', seats: 150 },
      { id: 2, number: '67890', name: 'Rajdhani Express', route: 'Delhi - Kolkata', seats: 100 },
      { id: 3, number: '11223', name: 'Duronto Express', route: 'Mumbai - Kolkata', seats: 120 },
      { id: 4, number: '22334', name: 'Garib Rath', route: 'Chennai - Bangalore', seats: 200 },
    ];
  
    const handleShow = (train) => {
      setSelectedTrain(train);
      setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);
  
    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };
  
    const filteredTrains = trainData.filter(train => 
      train.name.toLowerCase().includes(filter.toLowerCase()) ||
      train.number.includes(filter)
    );
  
    return (
      <div className="container mt-4">
        <h3 className="mb-3">Train Management</h3>
  
        {/* Filter Input */}
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Filter by Train Number or Train Name" 
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
  
        {/* Train Table */}
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>Route</th>
              <th>Seats Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrains.map(train => (
              <tr key={train.id}>
                <td>{train.id}</td>
                <td>{train.number}</td>
                <td>{train.name}</td>
                <td>{train.route}</td>
                <td>{train.seats}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleShow(train)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {/* Modal */}
        {selectedTrain && (
          <div className={`modal fade ${showModal ? "show d-block" : ""}`} style={{ display: showModal ? "block" : "none" }} tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Train Details</h5>
                  <button type="button" className="btn-close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                  <p><strong>Train Number:</strong> {selectedTrain.number}</p>
                  <p><strong>Train Name:</strong> {selectedTrain.name}</p>
                  <p><strong>Route:</strong> {selectedTrain.route}</p>
                  <p><strong>Seats Available:</strong> {selectedTrain.seats}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default TrainManagement;
