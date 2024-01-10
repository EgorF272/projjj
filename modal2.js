// 'use strict';
// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// class AnotherButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicked: false
//     };
//   }

//   render() {
//     if (this.state.clicked) {
//       return (
//         <div className="modal"
//           onClick={() => this.setState({ clicked: false })}>
//           <div className="modal__content"
//             onClick={(e) => e.stopPropagation()}>
//             <form action="https://formcarry.com/s/i9EtQjA3zV1" method="POST" acceptCharset="UTF-8" id="form">
//               <div>
//                 <input className="webform__form-elem"
//                   id="form-name"
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Ваше имя" />
//               </div>
//               <div>
//                 <input className="webform__form-elem"
//                   id="form-phone"
//                   type="tel"
//                   name="phone"
//                   required
//                   placeholder="Телефон" />
//               </div>
//               <div>
//                 <input className="webform__form-elem"
//                   id="form-email"
//                   type="email"
//                   name="email"
//                   required
//                   placeholder="E-mail" />
//               </div>
//               <div>
//                 <input id="form-comment"
//                   className="webform__form-elem"
//                   type="text"
//                   placeholder="Ваш комментарий" />
//               </div>
//               <div className="form__checkbox">
//                 <input className="checkbox__input"
//                   type="checkbox"
//                   id="userAgreement" />
//                 <label
//                   className="checkbox__label"
//                   type="text"
//                   htmlFor="userAgreement">
//                   Отправляя заявку, я даю согласие на
//                   <a> обработку своих персональных данных</a>
//                 </label>
//               </div>
//               <div>
//                 <input className="webform__form-btn"
//                   type="submit"
//                   value="ОСТАВИТЬ ЗАЯВКУ!" />
//               </div>
//             </form>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <input onClick={() => this.setState({ clicked: true })}
//           className="plans__btn"
//           type="button"
//           value="ДРУГАЯ КНОПКА!" />
//       </div>
//     );
//   }
// }

// const anotherButtonContainer = document.querySelector('#another-modal');
// ReactDOM.render(<AnotherButton />, anotherButtonContainer);
'use strict';

class AnotherButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    if (this.state.clicked) {
      return (
        <div className="modal"
          onClick={() => this.setState({ clicked: false })}>
          <div className="modal__content"
            onClick={(e) => e.stopPropagation()}>
            <form action="https://formcarry.com/s/i9EtQjA3zV1" method="POST" acceptCharset="UTF-8" id="form">
              <div>
                <input className="webform__form-elem"
                  id="form-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Ваше имя" />
              </div>
              <div>
                <input className="webform__form-elem"
                  id="form-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="Телефон" />
              </div>
              <div>
                <input className="webform__form-elem"
                  id="form-email"
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail" />
              </div>
              <div>
                <input id="form-comment"
                  className="webform__form-elem"
                  type="text"
                  placeholder="Ваш комментарий" />
              </div>
              <div className="form__checkbox">
                <input className="checkbox__input"
                  type="checkbox"
                  id="userAgreement" />
                <label
                  className="checkbox__label"
                  type="text"
                  htmlFor="userAgreement">
                  Отправляя заявку, я даю согласие на
                  <a> обработку своих персональных данных</a>
                </label>
              </div>
              <div>
                <input className="webform__form-btn"
                  type="submit"
                  value="ОСТАВИТЬ ЗАЯВКУ!" />
              </div>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div>
        <input onClick={() => this.setState({ clicked: true })}
          className="plans__btn"
          type="button"
          value="ОСТАВИТЬ ЗАЯВКУ!" />
      </div>
    );
  }
}

const anotherButtonContainer = document.querySelector('#another-modal');
ReactDOM.render(<AnotherButton />, anotherButtonContainer);
