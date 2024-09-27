import React, { useState } from 'react';
import { Table, Button, Form, Modal, Card, Container, Row, Col, Badge } from 'react-bootstrap';

const HotelBookingManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [editedBooking, setEditedBooking] = useState({
    customer: '',
    status: '',
    paymentStatus: '',
    checkIn: '',
    checkOut: '',
  });

  const bookings = [
    {
      id: 1,
      customer: 'John Doe',
      status: 'Confirmed',
      paymentStatus: 'Paid',
      checkIn: '2024-10-10',
      checkOut: '2024-10-15',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      status: 'Cancelled',
      paymentStatus: 'Refunded',
      checkIn: '2024-09-20',
      checkOut: '2024-09-25',
    },
    // More booking data...
  ];

  // Filter and search logic
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = booking.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || booking.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Handle edit detail view
  const handleEditDetails = (booking) => {
    setSelectedBooking(booking);
    setEditedBooking({
      customer: booking.customer,
      status: booking.status,
      paymentStatus: booking.paymentStatus,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
    });
    setShowEditModal(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBooking((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission (dummy save functionality)
  const handleSaveChanges = () => {
    // In real implementation, you would save the edited booking to your backend or state
    console.log('Saved booking details:', editedBooking);
    setShowEditModal(false);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Booking Management</h2>

      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Search by customer name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="shadow-sm"
          />
        </Col>
        <Col md={4}>
          <Form.Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="shadow-sm"
          >
            <option value="All">All</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Bookings Table in a Card */}
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white">
          <h5 className="mb-0">Bookings List</h5>
        </Card.Header>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Payment Status</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.customer}</td>
                    <td>
                      <Badge
                        bg={booking.status === 'Confirmed' ? 'success' : 'danger'}
                      >
                        {booking.status}
                      </Badge>
                    </td>
                    <td>{booking.paymentStatus}</td>
                    <td>{booking.checkIn}</td>
                    <td>{booking.checkOut}</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        onClick={() => handleEditDetails(booking)}
                        className="btn-sm"
                      >
                        Edit Details
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Edit Booking Details Modal */}
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking ? (
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="customer"
                      value={editedBooking.customer}
                      onChange={handleInputChange}
                      placeholder="Enter customer name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      name="status"
                      value={editedBooking.status}
                      onChange={handleInputChange}
                    >
                      <option value="Confirmed">Confirmed</option>
                      <option value="Cancelled">Cancelled</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Check-In Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="checkIn"
                      value={editedBooking.checkIn}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Check-Out Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="checkOut"
                      value={editedBooking.checkOut}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Payment Status</Form.Label>
                <Form.Select
                  name="paymentStatus"
                  value={editedBooking.paymentStatus}
                  onChange={handleInputChange}
                >
                  <option value="Paid">Paid</option>
                  <option value="Refunded">Refunded</option>
                </Form.Select>
              </Form.Group>
            </Form>
          ) : (
            <p>No booking selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default HotelBookingManagement;
