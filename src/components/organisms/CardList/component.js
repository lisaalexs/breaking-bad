import React from 'react';
import style from './style.module.scss';
import Card from '../../molecules/Card/index';

const CardList = ({ cards }) => {
  return (
    <div className={style.cardList}>
      {cards.map((card) =>
        (<Card
          key={card.id}
          name={card.name}
          birthday={card.birthday}
          img={card.img}
          status={card.status} />))}
    </div>
  );
};

export default CardList;
