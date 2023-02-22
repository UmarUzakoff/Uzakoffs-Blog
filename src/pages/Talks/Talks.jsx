import React from 'react'
import { Link } from 'react-router-dom'
import './Talks.scss'
import Screenshot1 from './images/Screenshot1.png'
import Screenshot2 from './images/Screenshot2.png'
import Screenshot3 from './images/Screenshot3.png'
import Screenshot4 from './images/Screenshot4.png'
import Screenshot5 from './images/Screenshot5.png'
import Screenshot6 from './images/Screenshot6.png'

const Talks = () => {
  return (
    <section className='Talks container'>
      
      <div className='title'>
          <h2>Talks</h2>
      </div>

      <article>
        <div id='archive' className='col-md-7'>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://hilarious-bubblegum-258d30.netlify.app'} target="blank"  className='list-item'>
                  <img width={150} src={Screenshot1} alt="img" />
                  <div className='wrapper'>
                    <div className='date'>Najot Ta'lim</div>
                    <div className='title'>Netflix Clone</div>
                  </div>
              </Link>
            </li>
          </ul>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://steady-cajeta-412860.netlify.app'} target="blank" className='list-item'>
                <img width={150} src={Screenshot2} alt="img" />
                <div className='wrapper'>
                    <div className='date'>Najot Ta'lim</div>
                    <div className='title'>React-Todo-App</div>
                </div>
              </Link>
            </li>
          </ul>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://clever-bunny-d91fdf.netlify.app'} target="blank" className='list-item'>
                <img width={150} src={Screenshot3} alt="img" />
                <div className='wrapper'>
                  <div className='date'>Najot Ta'lim</div>
                  <div className='title'>Pokemon using API</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'https://cerulean-pastelito-acd3d6.netlify.app'} target="blank" className='list-item'>
                  <img width={150} src={Screenshot4} alt="img" />
                  <div className='wrapper'>
                    <div className='date'>Najot Ta'lim</div>
                    <div className='title'>Calculator</div>
                  </div>
              </Link>
            </li>
          </ul>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://spiffy-sopapillas-09852a.netlify.app'} target="blank" className='list-item'>
                <img width={150} src={Screenshot5} alt="img" />
                <div className='wrapper'>
                  <div className='date'>Najot Ta'lim</div>
                  <div className='title'>Where's the World</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'https://peppy-melba-ad75c4.netlify.app'} target="blank" className='list-item'>
                  <img width={150} src={Screenshot6} alt="img" />
                  <div className='wrapper'>
                    <div className='date'>Najot Ta'lim</div>
                    <div className='title'>Rock-Paper-Scissors</div>
                  </div>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className='sticky col-md-4'>
            <h6>NEWSLETTER</h6>
            <p>Subscribe to <Link to={'https://t.me/Uzakoff_u'} className="tg">@lazyprogrammer</Link> telegram channel where I share my new courses, articles, talks and more.</p>
        </div>
      </article>

    </section>
  )
}

export default Talks