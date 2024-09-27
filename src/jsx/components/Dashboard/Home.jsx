import React,{useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';


//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import ReservationStats from './Dashboard/ReservationStats';
import LatestReview from './Dashboard/LatestReview';
import RecentBooking from './Dashboard/RecentBooking';
import UserList from './Dashboard/UserList';
import MapScreen from './Dashboard/MapScreen';
import MonthlyReport from './Dashboard/MonthlyReport';
import ChartPie from '../charts/Chartjs/pie';
import ApexBar3 from '../charts/apexcharts/Bar3';


const Home = () => {
	const { changeBackground } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
	},[changeBackground]);
	
	return(
		<>
			<div className="row">
				<div className="col-xl-12">
					<div className="row">
						<div className="col-xl-12">
							<div className="row">
								<div className="col-xl-3 col-sm-6">
									<div className="card booking">
										<div className="card-body">
											<div className="booking-status d-flex align-items-center">
												<span>
													{/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20">
													  <path  d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z" transform="translate(-2 -6)" fill="var(--primary)"/>
													</svg> */}
													<svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" fill="var(--primary)"></circle> <ellipse cx="12" cy="17" rx="7" ry="4" fill="var(--primary)"></ellipse> </g></svg>
												</span>
												<div className="ms-4">
													<h2 className="mb-0 font-w600">8,461</h2>
													<p className="mb-0 text-nowrap">Total Users</p>
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
													{/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20">
													  <path  d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z" transform="translate(-2 -6)" fill="var(--primary)"/>
													</svg> */}
													<svg fill="var(--primary)" width="30" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z"></path></g></svg>
												</span>
												<div className="ms-4">
													<h2 className="mb-0 font-w600">8,461</h2>
													<p className="mb-0 text-nowrap ">Total Booking</p>
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
												<svg viewBox="0 0 24 24" width="30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z" fill="var(--primary)"></path> </g></svg>
												</span>
												<div className="ms-4">
													<h2 className="mb-0 font-w600">753</h2>
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
													{/* <svg id="_009-log-out" data-name="009-log-out" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
													  <path  data-name="Path 1957" d="M151.435,178.842v2.8a5.6,5.6,0,0,1-5.6,5.6h-14a5.6,5.6,0,0,1-5.6-5.6v-16.8a5.6,5.6,0,0,1,5.6-5.6h14a5.6,5.6,0,0,1,5.6,5.6v2.8a1.4,1.4,0,0,1-2.8,0v-2.8a2.8,2.8,0,0,0-2.8-2.8h-14a2.8,2.8,0,0,0-2.8,2.8v16.8a2.8,2.8,0,0,0,2.8,2.8h14a2.8,2.8,0,0,0,2.8-2.8v-2.8a1.4,1.4,0,0,1,2.8,0Zm-10.62-7,1.81-1.809a1.4,1.4,0,1,0-1.98-1.981l-4.2,4.2a1.4,1.4,0,0,0,0,1.981l4.2,4.2a1.4,1.4,0,1,0,1.98-1.981l-1.81-1.81h12.02a1.4,1.4,0,1,0,0-2.8Z" transform="translate(-126.235 -159.242)" fill="var(--primary)" fill-rule="evenodd"/>
													</svg> */}
													<svg width="28" height="28" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
														<g clip-path="url(#clip0_285_10)">
														<path d="M400 0C179.698 0 0 179.737 0 399.999C0 620.261 179.698 799.998 400 799.998C620.302 799.998 800 620.261 800 399.999C800 179.737 620.302 0 400 0ZM400 106.634C562.598 106.634 693.3 237.326 693.3 399.999C693.3 562.672 562.598 693.364 400 693.364C237.403 693.364 106.698 562.672 106.698 399.999C106.698 237.326 237.403 106.634 400 106.634Z" fill="var(--primary)"/>
														<path d="M546.636 200.028C539.63 200.03 532.693 201.411 526.221 204.093C519.749 206.774 513.869 210.703 508.916 215.656L215.614 508.964C210.662 513.917 206.734 519.796 204.055 526.265C201.375 532.735 199.998 539.669 200 546.671C200.002 553.673 201.385 560.606 204.068 567.074C206.751 573.542 210.683 579.419 215.639 584.368C225.647 594.363 239.219 599.976 253.368 599.972C267.517 599.967 281.084 594.345 291.086 584.343L584.388 291.035C589.341 286.082 593.269 280.203 595.948 273.733C598.627 267.263 600.005 260.33 600.003 253.328C600 246.326 598.618 239.393 595.935 232.925C593.251 226.457 589.319 220.58 584.363 215.631C574.355 205.636 560.785 200.024 546.636 200.028Z" fill="var(--primary)"/>
														<path d="M253.369 200.028C246.363 200.026 239.425 201.402 232.951 204.079C226.478 206.756 220.595 210.682 215.639 215.631C210.683 220.58 206.751 226.457 204.068 232.925C201.385 239.393 200.002 246.326 200 253.328C199.998 260.33 201.375 267.263 204.055 273.733C206.734 280.203 210.662 286.082 215.614 291.035L508.916 584.343C518.918 594.345 532.486 599.967 546.635 599.972C560.784 599.976 574.355 594.363 584.363 584.368C589.319 579.419 593.251 573.542 595.934 567.074C598.618 560.606 600 553.673 600.002 546.671C600.005 539.669 598.627 532.735 595.948 526.265C593.269 519.796 589.341 513.917 584.388 508.964L291.086 215.656C281.085 205.654 267.517 200.033 253.369 200.028Z" fill="var(--primary)"/>
														</g>
														<defs>
														<clipPath id="clip0_285_10">
														<rect width="800" height="800" fill="white"/>
														</clipPath>
														</defs>
														</svg>

												</span>
												<div className="ms-4">
													<h2 className="mb-0 font-w600">516</h2>
													<p className="mb-0">Total Cancellations</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="row">
								<div className="col-xl-6">
								<div className="card" style={{ height: "auto" }}> {/* Adjust height here */}
									<div className="card-header border-0 pb-0">
									<h4 className="fs-20">Income & Expenses</h4>
									</div>
									<ApexBar3 />
									{/* <RecentBooking /> */}
								</div>
								<div className="row">
							<div className="col-12 mb-4">
								<div className="card">
								<div className="card-body">
									<h5 className="card-title text-center">Quick Links</h5>
									<div className="list-group">
									<div className="list-group-item d-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
										<i className="fas fa-ticket-alt me-2"></i> View All Bookings
										</div>
										<a href="/book-ticket" className="btn btn-primary btn-sm">Go</a>
									</div>
									<div className="list-group-item d-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
										<i className="fas fa-history me-2"></i> Booking History
										</div>
										<a href="/booking-history" className="btn btn-primary btn-sm">Go</a>
									</div>
									<div className="list-group-item d-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
										<i className="fas fa-wallet me-2"></i> Payment & Refunds
										</div>
										<a href="/payments" className="btn btn-primary btn-sm">Go</a>
									</div>
									<div className="list-group-item d-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
										<i className="fas fa-cog me-2"></i> Settings
										</div>
										<a href="/settings" className="btn btn-primary btn-sm">Go</a>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
								</div>
								<div className="col-xl-6">
								<div className="row">
									<div className="col-xl-12">
									<ReservationStats />
									</div>
									<div className="col-xl-6 col-sm-6">
									<div className="card bg-secondary" style={{ height: "100px" }}> {/* Set fixed height */}
										<div className="card-body">
										<div className="d-flex align-items-end pb-4 justify-content-between">
											<span className="fs-14 font-w500 text-white">Available Tickets Today</span>
											<span className="fs-20 font-w600 text-white"><span className="pe-2"></span>683</span>
										</div>
										<div className="progress default-progress h-auto">
											<div className="progress-bar bg-white progress-animated" style={{ width: "60%", height: "13px" }}>
											<span className="sr-only">60% Complete</span>
											</div>
										</div>
										</div>
									</div>
									</div>
									<div className="col-xl-6 col-sm-6">
									<div className="card bg-secondary" style={{ height: "100px" }}> {/* Set fixed height */}
										<div className="card-body">
										<div className="d-flex align-items-end pb-4 justify-content-between">
											<span className="fs-14 font-w500 text-white">Sold Out Tickets Today</span>
											<span className="fs-20 font-w600 text-white"><span className="pe-2"></span>156</span>
										</div>
										<div className="progress default-progress h-auto">
											<div className="progress-bar bg-white progress-animated" style={{ width: "30%", height: "13px" }}>
											<span className="sr-only">30% Complete</span>
											</div>
										</div>
										</div>
									</div>
									</div>
									<MonthlyReport />
								</div>
								</div>
							</div>
						</div>
						

						{/* <div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0 pb-0">
									<h4 className="fs-20">Latest Review by Customers</h4>
								</div>
								<div className="card-body pt-0">
									<LatestReview  />
								</div>	
							</div>	
						</div> */}
						<UserList/>
						{/* <MapScreen/> */}
					</div>
				</div>
			</div>		
		</>
	)
}
export default Home;