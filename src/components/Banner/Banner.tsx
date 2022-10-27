import BannerImg from '../../assets/img/Desenho.svg'

import './Banner.css';

export default function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <div className="banner-text">
                    <h1>Avalie Filmes</h1>
                    <p>Diga o que você achou do seu filme favorito</p>
                </div>
                <div className="banner-img">
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    )
}