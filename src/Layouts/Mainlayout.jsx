
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />

            </main>
            <Footer />

        </div>
    );
};

export default Mainlayout;