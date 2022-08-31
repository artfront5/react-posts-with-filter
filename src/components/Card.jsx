import React from 'react';

function Card({title, body, author}) {
  return (

      <div className="card mr-3 mb-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <p className="card-text">{author}</p>
        </div>
      </div>

  );
}

export default Card;
