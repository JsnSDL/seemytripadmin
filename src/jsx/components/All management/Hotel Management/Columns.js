import { format } from 'date-fns';
import { ColumnFilter } from './ColumnFilter';

export const COLUMNS = [
  {
    Header: 'User ID',
    Footer: 'User ID',
    accessor: 'userId',
    Filter: ColumnFilter,
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    Filter: ColumnFilter,
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    Filter: ColumnFilter,
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    Filter: ColumnFilter,
  },
  {
    Header: 'Booking ID',
    Footer: 'Booking ID',
    accessor: 'bookings[0].bookingId',
    Filter: ColumnFilter,
  },
  {
    Header: 'Hotel Name',
    Footer: 'Hotel Name',
    accessor: 'bookings[0].hotelName',
    Filter: ColumnFilter,
  },
  {
    Header: 'Room Type',
    Footer: 'Room Type',
    accessor: 'bookings[0].roomType',
    Filter: ColumnFilter,
  },
  {
    Header: 'Check-In Date',
    Footer: 'Check-In Date',
    accessor: 'bookings[0].checkInDate',
    Cell: ({ value }) => format(new Date(value), 'yyyy-MM-dd'),
    Filter: ColumnFilter,
  },
  {
    Header: 'Check-Out Date',
    Footer: 'Check-Out Date',
    accessor: 'bookings[0].checkOutDate',
    Cell: ({ value }) => format(new Date(value), 'yyyy-MM-dd'),
    Filter: ColumnFilter,
  },
  {
    Header: 'Status',
    Footer: 'Status',
    accessor: 'bookings[0].status',
    Filter: ColumnFilter,
  },
  {
    Header: 'Total Amount',
    Footer: 'Total Amount',
    accessor: 'bookings[0].totalAmount',
    Filter: ColumnFilter,
  },
];
