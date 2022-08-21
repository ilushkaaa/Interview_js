// Привести код к TS
import React from 'react';

function MyComponent(props) {
  const [params, setParams] = useState({ a: 'a', b: 'b'});

  return (
    <div onClick={props.onClick}>
      <div>{props.text}</div>
      <div>{params.a}</div>
      <div>{params.c}</div>
    </div>
  )
}
