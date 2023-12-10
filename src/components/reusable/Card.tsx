import React from 'react';

interface CardProps{
    image:string,
    name:string,
    lastName: string,
    descriprion: string
}

const Card: React.FC<CardProps> = ({image, name, lastName, descriprion}) => {
    const cardStyle = {
        width: '18rem'
      };

    return (
        <div className='card' style={cardStyle}>
        <img src={image} className='card-img-top' alt='Imagen Random'/>
        <div className='card-body'>
          <h5 className='card-title'>{name} {lastName}</h5>
          <p className='card-text'>{descriprion}</p>
          <a href='#' className='btn btn-primary'>Ir al perfil</a>
        </div>
      </div>
    );
  };
  
  export default Card;
  