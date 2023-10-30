import React,{useRef, useEffect, useState} from 'react'

import group from "./group.png"

import "./AboutUs.scss"

const AboutUs: React.FC = () => {

    const prevBlockRef = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [prevBlockHeight, setPrevBlockHeight] = useState<number | null>(null);
  
    const handleResize = () => {
      if (prevBlockRef.current) {
        const height = prevBlockRef.current.offsetHeight;
        setPrevBlockHeight(height);
        document.documentElement.style.setProperty('--prev-block-height', `${height}px`);
      }
    };
  
    useEffect(() => {
      handleResize(); // Вызываем для инициализации значения при монтировании
      window.addEventListener('resize', handleResize); // Добавляем обработчик события при изменении размеров окна
  
      return () => {
        window.removeEventListener('resize', handleResize); // Удаляем обработчик события при размонтировании компонента
      };
    }, []);

  
    return(
        <section className="about-us" id="about-us">
            <div className="container">
                
                <h2>About Us</h2>
                <p>IT world evolves very fast, that’s why each of existing companies needs to update its product regularly to stay on wave. Winning in competition is really important, so quality of a product should be the best! And we will be glad to assist you with this. Years of experience will help us.</p>
                <p>Our purpose is to evolve with you! You have a new interesting startup, some modifications, updates or re-work, and you are not sure in your product quality - then you’ve come to the right place! Each of our clients and projects won't stay without attention and will be accurately verified.</p>
                <img src={group} alt="people"/>

                <div className='about-us-colored'  ref={prevBlockRef}>
                    <p className="about-us-orange">Our specialists are experts with more than 5 years of experience and great practice. Each of us has been working for a long period of time in IT product and outsource companies.</p>
                    <p className="about-us-grey">We are always heads up with all new test approaches and worldwide trends in IT development, so we apply only best practices to our clients.</p>
                </div>

                <p className="a">Product Quality has the highest priority for us. So we do our best to satisfy our сlients and customers! During the work we use most popular and effective test approaches and testing tools, so verification process becomes really clear and qualitative. As result we achieve required quality level in shortest terms.</p>
            </div>
        </section>
    )
}

export default AboutUs;