import React from "react";




const BookingInformation = () => {
  
  
  // const svg1 = (
  //   <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
  //     <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
  //       <rect x="0" y="0" width="24" height="24"></rect>
  //       <circle fill="#000000" cx="5" cy="12" r="2"></circle>
  //       <circle fill="#000000" cx="12" cy="12" r="2"></circle>
  //       <circle fill="#000000" cx="19" cy="12" r="2"></circle>
  //     </g>
  //   </svg>
  // );

  return (
    <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Train Bookings</h4>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>BKG12345</td>
                <td>John Doe</td>
                <td>12345</td>
                <td>HYD → BLR</td>
                <td>
                  <span className="badge badge-rounded badge-success">
                    Active
                  </span>
                </td>
                <td>
                  <span className="badge badge-rounded badge-primary">
                    Paid
                  </span>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>BKG67890</td>
                <td>Jane Smith</td>
                <td>67890</td>
                <td>BLR → HYD</td>
                <td>
                  <span className="badge badge-rounded badge-danger">
                    Cancelled
                  </span>
                </td>
                <td>
                  <span className="badge badge-rounded badge-warning">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>BKG54321</td>
                <td>Alan Walker</td>
                <td>54321</td>
                <td>HYD → KA</td>
                <td>
                  <span className="badge badge-rounded badge-warning">
                    Rescheduled
                  </span>
                </td>
                <td>
                  <span className="badge badge-rounded badge-primary">
                    Paid
                  </span>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>BKG98765</td>
                <td>Emma Wilson</td>
                <td>98765</td>
                <td>HYD → AP</td>
                <td>
                  <span className="badge badge-rounded badge-success">
                    Active
                  </span>
                </td>
                <td>
                  <span className="badge badge-rounded badge-primary">
                    Paid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default BookingInformation;
