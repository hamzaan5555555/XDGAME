import React from 'react';
import Menu from "../Data1";
import { Link } from 'react-router-dom';
import './Market2.css'

function Market2() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 ml-12">
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-13 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {/* Utiliser map pour générer des articles basés sur Menu */}
        {Menu.map((item) => (
          <article key={item.id} className="flex max-w-xl flex-col items-start justify-between ml-12">
            <div className="flex items-center gap-x-4 text-xs">
              <time className="text-gray-500">{item.date}</time>
              <a
                href={item.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {item.category.title}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={item.href}>
                  <span className="absolute inset-0" />
                  {item.title}
                </a>
              </h3>
              <img src={item.photo} alt={item.title} className="mt-5 h-48 w-full object-cover" />
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 ml-7">
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={item.author.href}>
                    <button className="btn flex items-center"> J'aime
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                  </a>
                </p>
                <button className="btn flex items-center mt-2">
                  Dowload
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0-64-28.7-64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                </button>
              </div>
            </div>
          </article>
        ))}
        
      </div>
      
      
      
    </div>
  );
}

export default Market2;
