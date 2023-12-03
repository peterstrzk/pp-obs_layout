import React from 'react';
import './App.css';

interface SquareProps {
  key: number;
}

const Square: React.FC<SquareProps> = ({ key }) => {
  const isDark = (key % 2 === 0) === (Math.floor(key / 8) % 2 === 0);
  const className = isDark ? 'waveSquare' : 'square'; // Używamy waveSquare dla "fali"

  return <div className={className} />;
};

const Chessboard: React.FC = () => {
  const renderRow = (rowIndex: number) => {
    const squares = [];
    for (let i = 0; i < 8; i++) {
      squares.push(<Square key={rowIndex * 8 + i} />);
    }
    return <div className="row">{squares}</div>;
  };

  const renderBoard = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(renderRow(i));
    }
    return <div className="chessboard">{rows}</div>;
  };

  return <div>{renderBoard()}</div>;
};

export default Chessboard;
