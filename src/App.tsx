import React from 'react';
import './App.css';
import {RecoilRoot} from 'recoil';
import Counter from './Counter';

const App = () => {
    return (
        <RecoilRoot>
            <Counter />
        </RecoilRoot>
    );
};

export default App;
