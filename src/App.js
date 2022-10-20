import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CollapsibleExample from './Navbar/Navbar';
// import Navbar from './Navbar/Navbar';
import NavbarNew from './Navbar/NavbarNew';
import PageOne from './pages/firstpage/PageOne';
import SecondPage from './pages/SecondPage/SecondPage';
import PageThree from './pages/PageThree/PageThree';
import Pagefour from './pages/fourPage/pagefour';
import Pagefive from './pages/pagrfive/pagefive';
import IndividualInterval from './Carousol/Carousolpage';
import Pagesix from './pages/pageSix/pagesix';
import Footer from './footer/footer';

function App() {
  return (
    <>
    <NavbarNew/>
    <PageOne/>
    <SecondPage/>
    <PageThree/>
    <Pagefour/>
    <Pagefive/>
    <Pagesix/>
    <IndividualInterval/>
    <Footer/>
    </>
  );
}

export default App;
