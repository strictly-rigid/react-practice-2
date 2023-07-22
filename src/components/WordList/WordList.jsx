import React from 'react';

export default function WordList({ words }) {
  return (
    <ul>
      {words.map(word => (
        <li key={word.id}>
          <span>{word.ukr}</span> <span>{word.eng}</span>
        </li>
      ))}
    </ul>
  );
}
