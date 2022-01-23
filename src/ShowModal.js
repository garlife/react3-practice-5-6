import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('modal-root');

export default class ShowModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.newDiv = document.createElement('div');
  }

  componentDidMount() {
    //метод ЖЦ срабатывающий сразу после встраивания компонента в DOM
    rootElement.appendChild(this.newDiv); //appendChild() - добавление дочернего элемента
  }
  рр;

  componentWillUnmount() {
    //метод ЖЦ срабатывающий перед удалением компонента в DOM, нужен для освобождения ресурсов
    rootElement.removeChild(this.newDiv); //removedChild() - удаление дочернего элемента
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.newDiv); //createPortal(что, куда)  метод по созданию элемента в независимом ДОМ узле
  }
}
