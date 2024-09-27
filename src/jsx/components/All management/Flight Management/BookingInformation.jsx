import React from "react";

const FlightBookingInformation = () => {
  const bookings = [
    {
      id: 1,
      bookingId: "FLG12345",
      passengerName: "John Doe",
      flightNumber: "AI123",
      route: "HYD → BLR",
      bookingStatus: "Active",
      paymentStatus: "Paid",
    },
    {
      id: 2,
      bookingId: "FLG67890",
      passengerName: "Jane Smith",
      flightNumber: "AI678",
      route: "BLR → HYD",
      bookingStatus: "Cancelled",
      paymentStatus: "Pending",
    },
    {
      id: 3,
      bookingId: "FLG54321",
      passengerName: "Alan Walker",
      flightNumber: "AI543",
      route: "HYD → KA",
      bookingStatus: "Rescheduled",
      paymentStatus: "Paid",
    },
    {
      id: 4,
      bookingId: "FLG98765",
      passengerName: "Emma Wilson",
      flightNumber: "AI987",
      route: "HYD → AP",
      bookingStatus: "Active",
      paymentStatus: "Paid",
    },
  ];

  return (
    <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Flight Bookings</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive flightBookingTable">
            <table className="table verticle-middle table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Booking ID</th>
                  <th scope="col">Passenger Name</th>
                  <th scope="col">Flight Number</th>
                  <th scope="col">Route</th>
                  <th scope="col">Booking Status</th>
                  <th scope="col">Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.bookingId}</td>
                    <td>{booking.passengerName}</td>
                    <td>{booking.flightNumber}</td>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingInformation;
