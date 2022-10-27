import Banner from '../../components/Banner/Banner';
import CardLogin from '../../components/CardLogin/CardLogin';
import './Home.css';

export default function Home() {
    return (

        <div className="home-container">
                <div className="home-banner">
                    <Banner/>
                </div>
                <div className="home-card">
                    <CardLogin/>
                </div>
        </div>
    )
}
