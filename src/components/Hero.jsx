import React from 'react'
import "../styles/hero.scss"

function Hero() {
  return (
    <section className='container'>
      <h1>Hola, mi nombre es</h1>
      <h2 className='hero_title'>Jesús Arturo.</h2>
      <p>Soy ingeniero en sistemas computacionales especializado en desarrollo web frontend, creando aplicaciones y sitios web profesionales e increibles. Ofreciendo calidad y experiencias extraordinarias.</p>
      <button>Contactame</button>
      {/* <h1 className="hero_title">Ing. Jesús Arturo Carmona Aguirre</h1> */}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum illo maiores laudantium libero exercitationem non inventore quos facilis! Eveniet aliquid, aperiam voluptatibus voluptas accusamus ipsam unde nihil laboriosam suscipit.</p> */}
    </section>
  )
}

export default Hero