import './style.css';
import React, { useState } from 'react';
import ShowModal from './ShowModal';

export default function App() {
  const [show, setShow] = useState(true); //[show, setShow] - кортеж, полученный из useState. Через него
  //Через useState(boolean) задаем изначальное значение стэйта в формате boolean
  return (
    <div>
      <h3>Открыть модальное окно</h3>
      <button
        type="button"
        onClick={() => {
          setShow((prevShow) => !prevShow); //по событию onClick через setShow() меняем текущуее (предыдущее) состояние на противоположное
        }}
      >
        Открыть
      </button>
      {!show && ( //show && синт сахар для условного рендеринга
        <ShowModal id="modal-root">
          <div className="App">
            <h3>Модальное окно</h3>
            <button
              type="button"
              onClick={() => {
                setShow((prevShow) => !prevShow); //по событию onClick через setShow() меняем текущуее состояние (предыдущее) на противоположное
              }}
            >
              Закрыть
            </button>
          </div>
        </ShowModal>
      )}
    </div>
  );
}
