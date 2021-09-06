import React from 'react';
import style from './style.module.scss';

const Card = ({ name, birthday, img, status }) => {
  return (
    <div className={style.cardBox}>
      <div className={style.cardImg}>
        <img className={style.img} src={img} alt="card-img"></img>
      </div>
      <div className={style.info}>
        <p className={style.state}>{status}</p>
        <p className={style.name}>{name}</p>
        <p className={style.date}>{birthday}</p>
      </div>
    </div>
  );
}

export default Card;
