import React from 'react'
import './Home.scss';
import me from "./images/me.jpg"
import github from './images/github.png'
import linkedin from './images/linkedin.svg'
import youtube from './images/youtube.svg'
import telegram from './images/telegram.svg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='container Home'>
        <div className='main'>
            <div className='top'>
                <div className='left'>
                    <img src={me} alt="avatar" />
                </div>
                <div className='right'>
                    <h2>Umarbek Uzoqov</h2>
                    <h4>Web-Developer</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/uzakoff_u/" target="blank"><img src={youtube} alt="youtube" /></a></li>
                        <li><a href="https://github.com/UmarUzakoff" target="blank"><img src={github} alt="github" /></a></li>
                        <li><a href="https://ru.linkedin.com/" target="blank"><img src={linkedin} alt="linkedin" /></a></li>
                        <li><a href="https://t.me/Uzakoff_u" target="blank"><img src={telegram} alt="telegram" /></a></li>
                    </ul>
                </div>
            </div>
            <div className='mid'>
                <p>I write about non-technical stuff in the technical world.</p>
            </div>
            <div className='bottom'>
                <Link to={'/blog'} className="button-9">Read Blog</Link>
                <Link to={'/AboutMe'} className="button-9 second">About Me</Link>
            </div>
        </div>
    </section>
  )
}

export default Home