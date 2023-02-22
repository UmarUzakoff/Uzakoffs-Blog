import React from 'react'
import { Link } from 'react-router-dom'
import './Kurs.scss'
import illustration from './images/illustration.png'
import padlock from './images/padlock.png'
import github2 from './images/github2.svg'

const Kurs = () => {
  return (
    <section>
        <div className='login-page'>
        <Link className="button-30" to={'/academy'}> &laquo; Back</Link>
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src={illustration} alt="img" />
                </div>
                <form id='login-form'>
                    <p className='form-title'>
                        Kirish
                        <img className='title-icon' src={padlock} alt="padlock" />
                    </p>
                    <p>
                        GitHub = Dasturchilar Instagrami
                    </p>
                    <Link className="button-53" to={'https://github.com/UmarUzakoff'} target="blank"><span><img src={github2} alt="github"/></span>GitHub Orqali Kirish</Link>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Kurs