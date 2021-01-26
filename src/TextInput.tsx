import React from 'react';
import { atom, useRecoilState } from 'recoil';

function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const onChange = (e: any) => {
      setText(e.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
}

export default TextInput;