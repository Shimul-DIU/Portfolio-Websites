
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Outlet } from 'react-router-dom';
import SignUpWithGoogle from '../firebase/auth/SignUpWithGoogle';
import ScrollToTop from '../components/ScrollToTop';

const Mainlayout = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar/>
            <main>

                <Outlet />

            </main>
            <Footer />

        </div>
    );
};

export default Mainlayout;