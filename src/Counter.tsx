import React from 'react';
import { atom, selector, useRecoilState } from 'recoil';
import styled from 'styled-components';

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
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
}

const Counter = () => {
    return(
        <Wrap>
            <TextInput />
            {/* <CharacterCount /> */}
        </Wrap>
    );
};

const Wrap = styled.div`
    border: 1px solid green;
`;

export default Counter;