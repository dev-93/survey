import React from 'react';
import { selector, useRecoilValue } from 'recoil';
import CharacterCount from './CharacterCount';

const CharacterCount = (CharacterCount:any) => {
    const charCountState = selector({
        key: 'charCountState', // unique ID (with respect to other atoms/selectors)
        get: ({get}) => {
          const text = get(textState);
      
          return text.length;
        },
    });

    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
};

export default CharacterCount;
