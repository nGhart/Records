import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu/Menu';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import './styles/global.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  Outlet,
} from 'react-router-dom';
import Landing from './pages/landing/Landing';
import SignupPage from './pages/signup/SignupPage';
import LogoutPage from './pages/logout/LogoutPage';
import RabbitPage from './pages/rabbitPage/RabbitPage';
import Home from './pages/home/Home';
import Print from './components/print/Print';
import InvoicePage from './pages/invoicePage/InvoicePage';
import BreedingPage from './pages/breedingPage/BreedingPage';
import ContactPage from './pages/contactPage/ContactPage';
import EmployeePage from './pages/employeePage/EmployeePage';
import FeedPage from './pages/feedPage/FeedPage';
import InventoryPage from './pages/inventoryPage/InventoryPage';
import HealthPage from './pages/healthPage/HealthPage';
import TransactionPage from './pages/transactionPage/TransactionPage';
import MedicationPage from './pages/medicationPage/MedicationPage';
import MyNotes from './pages/notesPage/notesPage';

const Layout = () => {
  return (
    <div className="mainSection" style={{ height: '100vh' }}>
      <Navigation />
      <div className="midSection">
        <div className="menuSection">
          <Menu />
        </div>
        <div className="contentSection" style={{ position: 'relative' }}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/home" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="rabbits" element={<RabbitPage />}>
          {/* <Route path="animals/:id" element={<RabbitTable />} /> */}
        </Route>

        <Route path="contact" element={<ContactPage />} />
        <Route path="invoice" element={<InvoicePage />} />
        <Route path="employee" element={<EmployeePage />} />
        {/* <Route path="breeding" element={<BreedingPage />}>
         <Route path="doe" element={<DoePage />} />
          <Route path="buck" element={<BuckPage />} />
          <Route path="mating" element={<MatingPage />} /> 
        </Route>*/}
        <Route path="breeding" element={<BreedingPage />}>
          {/* // <Route index element={<DoePage />} />
          // <Route path="doe" element={<DoePage />} />
          // <Route path="buck" element={<BuckPage />} />
          // <Route path="mating" element={<MatingPage />} /> */}
        </Route>
        <Route path="feed" element={<FeedPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="medication" element={<MedicationPage />} />
        <Route path="health" element={<HealthPage />} />
        <Route path="notes" element={<MyNotes />} />
        <Route path="transaction" element={<TransactionPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/" element={<Landing />} />
      <Route path="/print" element={<Print />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
