import React from 'react';
import './Input.css'
import { MoonIcon , SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

function Input({ setSearchTerm }) {
  const { colorMode } = useColorMode(); // Obtenez le mode couleur actuel

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={`navbar bg-base-100 mt-5 ${colorMode === 'dark' ? 'dark-mode' : ''}`}>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl hover:text-indigo-600">XD GAME</a>
      </div>
      
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={handleInputChange}
          />
        </div>
        <div className="dropdown dropdown-end">
          {/* Utilisez le style en ligne pour définir la couleur du SVG en fonction du mode couleur */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            style={{ fill: colorMode === 'white' ? 'white' : 'black' }} // Définissez la couleur ici
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Input;
