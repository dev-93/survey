import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

const textState = atom({
  key: 'textState',
  default: '',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

const Counter = () => {
  return(
    <Wrap>
      <TextInput />
      <CharacterCount />
    </Wrap>
  );
};

const Wrap = styled.div`
  border: 1px solid green;
`;

export default Counter;