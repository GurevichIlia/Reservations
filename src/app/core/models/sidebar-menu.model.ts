import { MainRoutes, SalesRoutes } from './../routes/routes';
import { SidebarMenu } from '../classes/SidebarMenu';
const salesMenuChildren: SidebarMenu[] = [
  new SidebarMenu('New Sale', SalesRoutes.New_Sale),
  new SidebarMenu('Sales History', SalesRoutes.Sales_History),
  new SidebarMenu('Invoices', SalesRoutes.Invoices),
]

export const sidebarMenu: SidebarMenu[] = [
  new SidebarMenu('Appointments', MainRoutes.Appointments, '<i class="fas fa-calendar-alt"></i>'),
  new SidebarMenu('Sales', MainRoutes.Sales, '<i class="fas fa-address-book"></i>', salesMenuChildren),
  new SidebarMenu('Client Base', MainRoutes.Client_Base, '<i class="fas fa-address-book"></i>'),
  new SidebarMenu('Portfolio', MainRoutes.Portfolio, '<i class="fas fa-address-book"></i>'),
  new SidebarMenu('Reviews & Ratings', MainRoutes.Reviews_and_Ratings, '<i class="fas fa-address-book"></i>'),
  new SidebarMenu('Statistics & Reports', MainRoutes.Statistics, '<i class="fas fa-address-book"></i>')
]


