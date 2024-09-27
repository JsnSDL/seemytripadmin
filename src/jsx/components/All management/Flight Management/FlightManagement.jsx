import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FlightManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [filter, setFilter] = useState('');

  const flightData = [
    { id: 1, number: 'AI123', name: 'Air India', route: 'Delhi - Mumbai', seats: 180 },
    { id: 2, number: '6E678', name: 'IndiGo', route: 'Delhi - Kolkata', seats: 160 },
    { id: 3, number: 'SG112', name: 'SpiceJet', route: 'Mumbai - Kolkata', seats: 150 },
    { id: 4, number: 'G8234', name: 'GoAir', route: 'Chennai - Bangalore', seats: 200 },
  ];

  const handleShow = (flight) => {
    setSelectedFlight(flight);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredFlights = flightData.filter(flight => 
    flight.name.toLowerCase().includes(filter.toLowerCase()) ||
    flight.number.includes(filter)
  );

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Flight Management</h3>

      {/* Filter Input */}
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Filter by Flight Number or Airline Name" 
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      {/* Flight Table */}
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Flight Number</th>
            <th>Airline Name</th>
            <th>Route</th>
            <th>Seats Available</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredFlights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.number}</td>
              <td>{flight.name}</td>
              <td>{flight.route}</td>
              <td>{flight.seats}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleShow(flight)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedFlight && (
        <div className={`modal fade ${showModal ? "show d-block" : ""}`} style={{ display: showModal ? "block" : "none" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Flight Details</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <p><strong>Flight Number:</strong> {selectedFlight.number}</p>
                <p><strong>Airline Name:</strong> {selectedFlight.name}</p>
                <p><strong>Route:</strong> {selectedFlight.route}</p>
                <p><strong>Seats Available:</strong> {selectedFlight.seats}</p>
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

export default FlightManagement;
