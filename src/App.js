import React from 'react'
import './App.css';
import GoBoard from './components/goboard';

export function App() {
    return (
    <div className='app-container'>
        <div className='go-board-container'>
            <GoBoard /> 
      </div>
    </div>
    )
}