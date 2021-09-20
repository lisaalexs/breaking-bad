import React from 'react';
import style from './style.module.scss';
import Card from '../../molecules/Card/index';
import ErrorMessage from '../../atoms/ErrorMessage/';
import Loader from '../../atoms/Loader/';


const CardList = ({ characters, isFetching, isError }) => {
  return (
    <div>
      <div>
        {isError ? (
          <ErrorMessage name="Ошибка загрузки данных." />
        ) : !isFetching ? (
          <div className={style.cardList}>
            {characters.map((character) =>
              (<Card
                key={character.id}
                name={character.name}
                birthday={character.birthday}
                img={character.img}
                status={character.status} />))}
          </div>
        ) : (
              <Loader />
            )}
      </div>
    </div>
  );
};

export default CardList;
