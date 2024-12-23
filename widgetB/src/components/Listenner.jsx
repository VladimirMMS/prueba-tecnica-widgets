import { useEffect, useState } from 'react';
import { socket } from '../utils/sockerConexion';
import './listenner.css';
import Comments from './comments/Comments';

export default function Listenner() {
    const [nombres, setNombres] = useState([]);
    useEffect(() => {
      socket.on('recibirNombre', (nombre) => {
        setNombres((prevNombres) => [...prevNombres, nombre])
      });
    }, []);

    return (
        <div className="comment-section">
          <h1 className="title">Widget B</h1>
          <div className="comment-list">
            {nombres.map((n, index) => (
                 <Comments key={index} comment={n.name} />
            ))}
            <p>{(nombres.length === 0) && 'No Hay Comentarios'}</p>
          </div>
        </div>
      );
}
