
import MainFooter from '../components/MainFooter';
import MainNavbar from '../components/MainNavbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout(){
 
    return (
        <>
          <MainNavbar />
    
          <hr />
          <main className="bg-body-tertiary">
            {/* <Home /> */}
            {/* <ImageDetail /> */}
            {/* <AddImageForm /> */}
            <Outlet/>
          </main>
            <MainFooter/>
        </>
      );
  }
