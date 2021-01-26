import React from 'react';
import { atom, selector } from 'recoil';
import styled from 'styled-components';
import CharacterCount from './CharacterCount';
import TextInput from './TextInput';

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

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