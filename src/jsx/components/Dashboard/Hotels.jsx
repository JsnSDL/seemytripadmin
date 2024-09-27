import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images
import BedIcon from "../../../images/bed-icon.svg";
import RevenueIcon from "../../../images/revenue-icon.svg";

// Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import ReservationStats from './Dashboard/ReservationStats';
import LatestReview from './Dashboard/LatestReview';
import RecentBooking from './Dashboard/RecentBooking';
import RoomAvailabilityChart from '../charts/apexcharts/RoomAvailabilityChart';
import RevenuePieChart from '../charts/apexcharts/RevenuePieChart';

const HotelDashboard = () => {
  const { changeBackground } = useContext(ThemeContext);

  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, [changeBackground]);

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-xl-3 col-sm-6">
              <div className="card booking">
                <div className="card-body">
                  <div className="booking-status d-flex align-items-center">
                    <span>
                      <img src={BedIcon} style={{ width: "40px" }} alt="Total Bookings" />
                    </span>
                    <div className="ms-4">
                      <h2 className="mb-0 font-w600">1,245</h2>
                      <p className="mb-0">Total Rooms Booked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6">
              <div className="card booking">
                <div className="card-body">
                  <div className="booking-status d-flex align-items-center">
                    <span>
                      <img src={RevenueIcon} style={{ width: "40px" }} alt="Total Revenue" />
                    </span>
                    <div className="ms-4">
                      <h2 className="mb-0 font-w600">$754,321</h2>
                      <p className="mb-0">Total Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6">
              <div className="card booking">
                <div className="card-body">
                  <div className="booking-status d-flex align-items-center">
                    <span>
                      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path d="..." fill="var(--primary)" />
                      </svg>
                    </span>
                    <div className="ms-4">
                      <h2 className="mb-0 font-w600">56</h2>
                      <p className="mb-0">Available Rooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6">
              <div className="card booking">
                <div className="card-body">
                  <div className="booking-status d-flex align-items-center">
                    <span>
                      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path d="..." fill="var(--primary)" />
                      </svg>
                    </span>
                    <div className="ms-4">
                      <h2 className="mb-0 font-w600">25</h2>
                      <p className="mb-0">Check-Ins Today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="col-xl-12">
          <div className="row">
            <div className="col-xl-6">
              <div className="card" style={{ height: "auto" }}>
                <div className="card-header border-0 pb-0">
                  <h4 className="fs-20">Room Availability</h4>
                </div>
                <RoomAvailabilityChart />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card" style={{ height: "auto" }}>
                <div className="card-header border-0 pb-0">
                  <h4 className="fs-20">Revenue Breakdown</h4>
                </div>
                <RevenuePieChart />
              </div>
            </div>
          </div>
        </div>

        {/* Latest Reviews */}
        <div className="col-xl-6">
          <LatestReview />
        </div>

        {/* Recent Bookings */}
        <div className="col-xl-6">
          <RecentBooking />
        </div>

        {/* Reservation Stats */}
        <div className="col-xl-12">
          <ReservationStats />
        </div>
      </div>
    </>
  );
};

export default HotelDashboard;
