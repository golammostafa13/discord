import React from 'react';
import Game from './GameBoard/Game';
import Navbar from './Navbar';
import Table from './Table';

const Board = ({title}) => {
    return (
        <div className='w-10/12 bg-gray-700'>
            <Navbar title={title} />
            { title !== 'Enjoy the Game' ? <Table /> : <Game /> }
        </div>
    );
};

export default Board;