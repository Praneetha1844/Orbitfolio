import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  { title: 'Paint', description: 'A small canvas drawing toy with colour and brush size controls.', path: '/game1' },
];

const Games = () => (
  <div className="bg-black text-white min-h-screen p-6">
    <Link to="/" className="text-gray-400 hover:text-white">← Home</Link>
    <h1 className="text-3xl font-bold my-6">Games</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <Link
          key={game.path}
          to={game.path}
          className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
        >
          <h2 className="text-xl font-semibold">{game.title}</h2>
          <p className="mt-2 text-gray-400">{game.description}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default Games;
