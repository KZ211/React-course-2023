import React from 'react';

interface CardProps{
    name:string,
    lastName: string,
    description: string
    className?:string
}

const Card: React.FC<CardProps> = ({name, lastName, description, className}) => {
    const cardStyle = {
        width: '18rem'
      };
    
    return (
      <>
        <div className={className}>
        <div className="card text-bg-primary mb-3" style={cardStyle}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">{name} {lastName}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        </div>
      </>
    );
  }

export default Card;