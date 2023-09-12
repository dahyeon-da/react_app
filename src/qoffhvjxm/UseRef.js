import React, { useState, useRef } from 'react';

function UseRef() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = (e) => {
    setInputs({
      name: '',
      nickname: ''
    })
    nameInput.current.focus();
  };

  return (
    <div>
      <input name="name" placeholder='이름' onChange={onChange} value={name} ref={nameInput}></input>
      <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname}></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}({nickname})
      </div>
    </div>
  );
}

export default UseRef;

