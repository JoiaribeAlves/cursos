import { ChangeEvent, useState } from 'react';

function State() {
  const [text, setText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  
  return (
    <>
      <p>{text}</p>
      <input type="text" onChange={handleChange} />
    </>
  );
}

export default State
