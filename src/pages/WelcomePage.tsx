import React from 'react';

import css from './welcome.module.css'
import logo from '../assets/images/logo/icons8-movie-100.png'
import tmdbLogo from '../assets/images/Partner/tmdb.svg'
import octenLogo from '../assets/images/Partner/octen_logo.png'
import bootstrapLogo from '../assets/images/Partner/bootstrap.png'
import Icons8Logo from '../assets/images/Partner/Icons8_logo.png'
import gitHubLogo from '../assets/images/Partner/github-mark.png'
import {HomeLink} from "../Components";
const WelcomePage = () => {
    return (
        <div className={css.Main} >
            <div className={css.Text}>
                <img src={logo} alt='logo'/>
                <h4>Welcome to our movie website! We are pleased to greet you here and thank you for choosing us for your
                    cinematic adventure. Here, you will find a vast selection of films across various genres, from
                    blockbusters
                    to classics. Enjoy the magic of cinema and share your impressions!</h4>
                <h2>To start, please click on the <HomeLink/> button to navigate to the main page.</h2>
                <div>
                    <p>
                        Copyright © 2023 Tsimko Ruslan All Rights Reserved
                        feel free to connect tsimkoruslan@gmail.com
                    </p>
                    <h6>PARTNER</h6>
                    <div className={css.Partner}>
                        <img className={css.Img} src={tmdbLogo} alt="tmdb"/>
                        <img className={css.Img} src={octenLogo} alt="octen"/>
                        <img className={css.Img} src={bootstrapLogo} alt="bootstrap"/>
                        <img className={css.Img} src={Icons8Logo} alt="Icons8"/>
                        <img className={css.Img} src={gitHubLogo} alt="gitHub"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    WelcomePage
};