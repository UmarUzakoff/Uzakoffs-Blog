import React from 'react'
import './AboutMe.scss';
import mee1 from './images/me.jpg'
import mee2 from './images/me2.jpg'
import mee3 from './images/me3.jpg'

const AboutMe = () => {
  return (
    <section className='AboutMe'>
        <div className='title'>
          <h2>About Me</h2>
        </div>
        <article className='container'>
            <p>I am Umarbek Uzoqov, a 18-year-old Web Developer from Tashkent, Uzbekistan.</p>
            <p>I am always contributing to developer events by giving a talk or as a mentor, especially the ones that engage women in tech. As a developer, I really want to see more diversity in the industry.</p>
            <img src={mee2} alt="me" />
            <p>Recently I experimented working standing and found it really useful to stay focused and a little healthier. I was able to transform my workstation with the books I read.</p>
            <img src={mee1} alt="me" />
            <p>I am also known as "lazy programmer", very handy nature for programmers. I love repetitive tasks, I see them as an opportunity for automation. Also, whenever I am not working standing, you find me working laying on a sofa.</p>
            <img src={mee3} alt="me" />
            <p>In short, it's me, Umarbek Uzoqov, a friendly programmer from Uzbekistan. You can read my story of becoming a software engineer <a className='text-blue-400' target="blank" href="https://www.instagram.com/uzakoff_u/">here</a>.</p>
        </article>
    </section>
  )
}

export default AboutMe