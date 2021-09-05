import React from 'react';
import s from './style.module.scss';

const Card = ({ name, birthday, img, status }) => {
  return (
    <div className={s.cardBox}>
      <div className={s.cardImg}>
        <img className={s.img} src={img} alt="card-img"></img>
      </div>
      <div className={s.info}>
        <p className={s.state}>{status}</p>
        <p className={s.name}>{name}</p>
        <p className={s.date}>{birthday}</p>
      </div>
    </div>
  );
}

export default Card;
