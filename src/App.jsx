import AboutUs from './components/AboutUs';
import Background from './components/Background';
import Collection from './components/Collection';
import ContactUs from './components/ContactUs';
import FeaturedProduct from './components/FeaturedProduct';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Material from './components/Material';

function App() {
    return (
        <div>
            <Header />
            <Background />

            <div className="mx-auto max-w-[1280px] px-[24px]">
                <AboutUs />
                <FeaturedProduct />
                <Collection />
                <Material />
                <ContactUs />
            </div>

            <Footer />
        </div>
    );
}

export default App;
