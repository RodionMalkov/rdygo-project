import React from 'react';

class CallbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className='callback-form' onSubmit={this.handleSubmit}>
        <div className="callback-form__wrapper">
          <label className='callback-form__label' htmlFor='name'>
            <span className='callback-form__label-text'>Представьтесь:</span>
            <input className='callback-form__label-input' id='name' name='name' type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label className='callback-form__label' htmlFor='tel'>
            <span className='callback-form__label-text'>Телефон:</span>
            <input className='callback-form__label-input' id='tel' name='tel' type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label className='callback-form__label' htmlFor='email'>
            <span className='callback-form__label-text'>E-mail:</span>
            <input className='callback-form__label-input' id='email' name='email' type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <label className='callback-form__label' htmlFor='message'>
            <span className='callback-form__label-text'>Ваше сообщение:</span>
            <textarea className='callback-form__label-textarea' id='message' name='message' type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <div className="callback-form__btns">
            <input className='callback-form__submit' type='submit' value='Отправить' />
            <input className='callback-form__reset' type="reset" value='Сбросить'></input>
          </div>
        </div>
      </form>
    );
  }
}

export default CallbackForm;
