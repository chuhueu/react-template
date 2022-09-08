import { LandingPage } from './components/landing-page';

import { ServicePage } from './components/service-page';
import {AboutPage} from './components/about-page';

const Home = () => {
    return (
        <>
            <LandingPage />
            <ServicePage />
            <AboutPage />
        </>
    );
};

export default Home;
