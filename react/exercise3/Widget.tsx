import React from 'react';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function Widget() {
  return (
    <ul>
      {items.map(item => {
        return <li key={item}>Пункт {item}</li>
      })}
    </ul>
  )
}