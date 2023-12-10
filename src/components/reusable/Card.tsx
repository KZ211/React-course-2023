import React from 'react';

interface CardProps{
    image:string,
    title:string,
    descriprion: string
}

const Card: React.FC<CardProps> = ({image, title, descriprion}) => {
    const cardStyle = {
        width: '18rem' // Asegúrate de usar comillas en valores de cadena
      };

    return (
        <div className='card' style={cardStyle}>
        <img src={image} className='card-img-top' alt='Imagen Random'/>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{descriprion}</p>
          <a href='#' className='btn btn-primary'>Ir al perfil</a>
        </div>
      </div>
    );
  };
  
  export default Card;
  