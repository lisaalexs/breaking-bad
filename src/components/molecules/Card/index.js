import React from 'react';
import s from './style.module.scss';
import img from '../../../assets/img/walter.png';

const Card = () => {
  return (
    <div className={s.cardBox}>
      <div className={s.cardImg}>
        <img src={img} alt="walter"></img>
      </div>
      <div className={s.info}>
        <p className={s.state}>Живой</p>
        <p className={s.name}>Андрей Панасюк</p>
        <p className={s.date}>23.11.2001</p>
      </div>
    </div>
  );
}

export default Card;
