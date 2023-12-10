import React from 'react';

import Edit from './Edit';

interface CardProps{
    image:string,
    title:string,
    descriprion: string
}

const Card: React.FC<CardProps> = (props:any) => {
    const cardStyle = {
        width: '18rem' // Asegúrate de usar comillas en valores de cadena
      };

    return (
        <div className='card' style={cardStyle}>
        <Edit/>
        <img src={props.image} className='card-img-top' alt='Imagen Random'/>
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>{props.descriprion}</p>
          <a href='#' className='btn btn-primary'>Ir al perfil</a>
        </div>
      </div>
    );
  };
  
  export default Card;
  