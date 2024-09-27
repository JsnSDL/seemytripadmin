import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      bookingId: "BKG12345",
      passengerName: "John Doe",
      trainNumber: "12345",
      route: "HYD → BLR",
      bookingStatus: "Active",
      paymentStatus: "Paid",
      date: "2024-09-20",
    },
    {
      id: 2,
      bookingId: "BKG67890",
      passengerName: "Jane Smith",
      trainNumber: "67890",
      route: "BLR → HYD",
      bookingStatus: "Cancelled",
      paymentStatus: "Pending",
      date: "2024-09-18",
    },
    {
      id: 3,
      bookingId: "BKG54321",
      passengerName: "Alan Walker",
      trainNumber: "54321",
      route: "HYD → KA",
      bookingStatus: "Rescheduled",
      paymentStatus: "Paid",
      date: "2024-09-21",
    },
    {
      id: 4,
      bookingId: "BKG98765",
      passengerName: "Emma Wilson",
      trainNumber: "98765",
      route: "HYD → AP",
      bookingStatus: "Active",
      paymentStatus: "Paid",
      date: "2024-09-19",
    },
  ]);

  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [filters, setFilters] = useState({
    passengerName: "",
    date: "",
    bookingStatus: "",
  });

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Filter logic that applies based on the input fields
  useEffect(() => {
    let filtered = bookings;

    if (filters.passengerName) {
      filtered = filtered.filter((booking) =>
        booking.passengerName.toLowerCase().includes(filters.passengerName.toLowerCase())
      );
    }

    if (filters.date) {
      filtered = filtered.filter((booking) => booking.date === filters.date);
    }

    if (filters.bookingStatus) {
      filtered = filtered.filter(
        (booking) =>
          booking.bookingStatus.toLowerCase() === filters.bookingStatus.toLowerCase()
      );
    }

    setFilteredBookings(filtered);
  }, [filters, bookings]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleModify = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    alert(`Booking with ID ${selectedBooking.bookingId} has been updated!`);
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = (bookingId) => {
    alert(`Booking ${bookingId} has been cancelled.`);
  };

  const handleRefund = (bookingId) => {
    alert(`Refund for booking ${bookingId} has been processed.`);
  };

  return (
    <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
      {/* Train Bookings Section */}
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Train Bookings</h4>
          <div className="filters d-flex flex-wrap gap-3 align-items-center mt-3">
            <input
              type="text"
              name="passengerName"
              placeholder="Filter by passenger name"
              className="form-control"
              style={{ width: "200px" }}
              value={filters.passengerName}
              onChange={handleFilterChange}
            />
            <input
              type="date"
              name="date"
              className="form-control"
              placeholder="Filter by date"
              style={{ width: "200px" }}
              value={filters.date}
              onChange={handleFilterChange}
            />
            <select
              name="bookingStatus"
              className="form-control"
              style={{ width: "200px" }}
              value={filters.bookingStatus}
              onChange={handleFilterChange}
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="cancelled">Cancelled</option>
              <option value="rescheduled">Rescheduled</option>
            </select>
            <button
              className="btn btn-primary"
              onClick={() => setFilteredBookings(bookings)} // Reset filters
            >
              Reset Filters
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive trainBookingTable">
            <table className="table verticle-middle table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Booking ID</th>
                  <th scope="col">Passenger Name</th>
                  <th scope="col">Train Number</th>
                  <th scope="col">Route</th>
                  <th scope="col">Booking Status</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.bookingId}</td>
                    <td>{booking.passengerName}</td>
                    <td>{booking.trainNumber}</td>
                    <td>{booking.route}</td>
                    <td>
                      <span
                        className={`badge badge-rounded ${
                          booking.bookingStatus === "Active"
                            ? "badge-success"
                            : booking.bookingStatus === "Cancelled"
                            ? "badge-danger"
                            : "badge-warning"
                        }`}
                      >
                        {booking.bookingStatus}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge badge-rounded ${
                          booking.paymentStatus === "Paid"
                            ? "badge-primary"
                            : "badge-warning"
                        }`}
                      >
                        {booking.paymentStatus}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => handleModify(booking)}
                      >
                        Modify
                      </button>{" "}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleCancel(booking.bookingId)}
                      >
                        Cancel
                      </button>{" "}
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleRefund(booking.bookingId)}
                      >
                        Refund
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
      {/* Modal for modifying booking details */}
      {selectedBooking && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modify Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formPassengerName">
                <Form.Label>Passenger Name</Form.Label>
                <Form.Control
                  type="text"
                  name="passengerName"
                  value={selectedBooking.passengerName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTrainNumber">
                <Form.Label>Train Number</Form.Label>
                <Form.Control
                  type="text"
                  name="trainNumber"
                  value={selectedBooking.trainNumber}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formRoute">
                <Form.Label>Route</Form.Label>
                <Form.Control
                  type="text"
                  name="route"
                  value={selectedBooking.route}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default BookingManagement;
