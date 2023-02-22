import React from 'react'
import { Link } from 'react-router-dom';
import './Academy.scss';
import algrotihms from './images/algorithms.png'
import devops from './images/devops.png'
import golang from './images/golang.png'
import python from './images/python.png'

const Academy = () => {
  return (
    <section className='container academy'>

        <div className='title'>
          <h2>Academy</h2>
        </div>

        <article className='cards'>
          <div className='card'>

            <div className='logo'>
              <img src={algrotihms} alt="logo" />
            </div>

            <div className='info'>
              <div>
                <span>KURS</span>
                <span>NARXI: <s>249K SO'M</s> BEPUL</span>
              </div>
              <h4>Algoritmlar: Kirish</h4>
              <p>Ma'lumot tuzilmalari, qidiruv algoritmlari, rekursiya va boshqa muhim algoritmik g'oyalar haqida o'rganamiz.</p>
              <Link className="button-86" to={'/kurs'}>Kursni Boshlash</Link>
            </div>
          </div>

          <div className='card'>

            <div className='logo'>
              <img src={python} alt="logo" />
            </div>

            <div className='info'>
              <div>
                <span>KURS</span>
                <span>TEZ KUNLARDA</span>
              </div>
              <h4>Python Asoslari</h4>
              <p>Python dastulash tili va standart kutubxonasini boshdan oyoq ko'rib chiqamiz. Ajoyib loyihalar yaratib, muammolar yechishni o'rganamiz.</p>
            </div>
          </div>

          <div className='card'>

            <div className='logo'>
              <img src={devops} alt="logo" />
            </div>

            <div className='info'>
              <div>
                <span>KURS</span>
                <span>TEZ KUNLARDA</span>
              </div>
              <h4>Go Dasturlash Tili</h4>
              <p>Go dasturlash tiliga sayohat, ma'lumot tuzilmalari, standart kutubxonasi, konkurent dasturlar ustida ishlash haqida o'rganamiz.</p>
            </div>
          </div>

          <div className='card'>

            <div className='logo'>
              <img src={golang} alt="logo" />
            </div>

            <div className='info'>
              <div>
                <span>KURS</span>
                <span>TEZ KUNLARDA</span>
              </div>
              <h4>Zamonaviy DevOps</h4>
              <p>DevOps'ning muhim g'oyalari, Linux Operatsion Tizimi, Bash, Docker, Kubernetes haqida no'ldan o'rganamiz.</p>
            </div>
          </div>
        </article>

    </section>
  )
}

export default Academy