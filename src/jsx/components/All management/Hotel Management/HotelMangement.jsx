import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Modal, Form, Card, Badge } from 'react-bootstrap';
// import './HotelManagement.css'; // Add custom styles

const HotelManagement = () => {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Hotel Sunshine',
      status: 'Active',
      description: 'A beautiful beachfront hotel with luxurious amenities.',
      amenities: ['Free Wi-Fi', 'Swimming Pool', 'Spa', 'Gym'],
      rooms: [
        { id: 1, category: 'Deluxe', price: 150, available: true },
        { id: 2, category: 'Standard', price: 100, available: false },
      ],
      reviews: [{ customer: 'John Doe', rating: 5, comment: 'Amazing stay!' }],
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      status: 'Inactive',
      description: 'A serene getaway in the mountains with breathtaking views.',
      amenities: ['Free Parking', 'Breakfast Included', 'Hiking Trails'],
      rooms: [
        { id: 1, category: 'Suite', price: 200, available: true },
        { id: 2, category: 'Double', price: 120, available: true },
      ],
      reviews: [{ customer: 'Jane Smith', rating: 4, comment: 'Very peaceful and relaxing.' }],
    },
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [editHotel, setEditHotel] = useState(null);
  const [newHotel, setNewHotel] = useState({
    name: '',
    status: 'Active',
    description: '',
    amenities: '',
    rooms: [],
    reviews: [],
  });

  const handleAddEditHotel = (hotel) => {
    setEditHotel(hotel);
    if (hotel) {
      setNewHotel({
        ...hotel,
        amenities: hotel.amenities.join(', '),
      });
    } else {
      setNewHotel({
        name: '',
        status: 'Active',
        description: '',
        amenities: '',
        rooms: [],
        reviews: [],
      });
    }
    setShowModal(true);
  };

  const handleSaveHotel = () => {
    if (editHotel) {
      const updatedHotels = hotels.map((hotel) =>
        hotel.id === editHotel.id ? { ...newHotel, amenities: newHotel.amenities.split(', ') } : hotel
      );
      setHotels(updatedHotels);
    } else {
      const newId = hotels.length + 1;
      setHotels([
        ...hotels,
        { ...newHotel, id: newId, amenities: newHotel.amenities.split(', ') },
      ]);
    }
    setShowModal(false);
  };

  return (
    <Container className="hotel-management-container">
      <Row className="mt-5 mb-3">
        <Col>
          <h2 className="text-center">Hotel Management</h2>
          <p className="text-center">Manage hotels, rooms, amenities, and reviews effectively.</p>
        </Col>
      </Row>

      {/* Hotel List Section */}
      <Card className="shadow-sm mb-4 hotel-card">
        <Card.Header className="bg-primary text-white">
          <h5>Hotels</h5>
          <Button variant="light" className="float-end" onClick={() => handleAddEditHotel(null)}>
            Add Hotel
          </Button>
        </Card.Header>
        <Card.Body>
          <Table hover responsive>
            <thead>
              <tr>
                <th>Hotel Name</th>
                <th>Status</th>
                <th>Amenities</th>
                <th>Rooms Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel.id}>
                  <td>{hotel.name}</td>
                  <td>
                    <Badge bg={hotel.status === 'Active' ? 'success' : 'danger'}>
                      {hotel.status}
                    </Badge>
                  </td>
                  <td>{hotel.amenities.join(', ')}</td>
                  <td>{hotel.rooms.filter(room => room.available).length}</td>
                  <td>
                    <Button variant="outline-secondary" onClick={() => handleAddEditHotel(hotel)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal for Adding/Editing Hotel */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{editHotel ? 'Edit Hotel' : 'Add Hotel'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Hotel Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newHotel.name}
                    onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
                    placeholder="Hotel Name"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={newHotel.status}
                    onChange={(e) => setNewHotel({ ...newHotel, status: e.target.value })}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newHotel.description}
                    onChange={(e) => setNewHotel({ ...newHotel, description: e.target.value })}
                    placeholder="Brief description of the hotel"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Amenities</Form.Label>
                  <Form.Control
                    type="text"
                    value={newHotel.amenities}
                    onChange={(e) => setNewHotel({ ...newHotel, amenities: e.target.value })}
                    placeholder="Separate amenities by commas (e.g., Free Wi-Fi, Pool, Gym)"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveHotel}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Room and Review Management */}
      <Row>
        <Col md={6}>
          <Card className="shadow-sm hotel-card mb-4">
            <Card.Header className="bg-secondary text-white">
              <h5>Room Management</h5>
            </Card.Header>
            <Card.Body>
              {hotels.map((hotel) => (
                <div key={hotel.id}>
                  <h6>{hotel.name}</h6>
                  <Table hover responsive>
                    <thead>
                      <tr>
                        <th>Room Category</th>
                        <th>Price (per night)</th>
                        <th>Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotel.rooms.map((room) => (
                        <tr key={room.id}>
                          <td>{room.category}</td>
                          <td>${room.price}</td>
                          <td>{room.available ? 'Yes' : 'No'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm hotel-card mb-4">
            <Card.Header className="bg-info text-white">
              <h5>Customer Reviews & Ratings</h5>
            </Card.Header>
            <Card.Body>
              {hotels.map((hotel) => (
                <div key={hotel.id}>
                  <h6>{hotel.name}</h6>
                  <Table hover responsive>
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Rating</th>
                        <th>Review</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotel.reviews.map((review, index) => (
                        <tr key={index}>
                          <td>{review.customer}</td>
                          <td>{'⭐'.repeat(review.rating)}</td>
                          <td>{review.comment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelManagement;
