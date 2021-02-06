export enum MainRoutes {
  Registration = 'registration',
  Login = 'login',
  Appointments = 'appointments',
  Client_Base = 'customers',
  Portfolio = 'portfolio',
  Reviews_and_Ratings = 'reviews-and-ratings',
  Statistics = 'Statistics',
  Sales = 'sales'
}

export enum SalesRoutes {
  New_Sale = 'new-sales',
  Sales_History = 'history',
  Invoices = 'invoices'
}

export enum AppointmetsRoutes {
  New = 'new',
  Reservations = 'reservations',
  Calendar ='calendar'
}

export type AppRoutes = MainRoutes | SalesRoutes
