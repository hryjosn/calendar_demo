import React from 'react';
import './App.scss';
import Calendar from './components/Calendar'
import 'element-theme-default';
import { Button } from 'element-react';


function App() {
    return (
        <div className="App">
            <Calendar/>
        </div>
    );
}

export default App;
