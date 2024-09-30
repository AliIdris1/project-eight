"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { manufacturers } from '@/constants';
import { SearchManufacturerprops } from './types';

const SearchManufacturer = ({ selected, setselected }: any) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = query === '' ? manufacturers : manufacturers.filter((item) =>
    item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
  );

  return (
    <div className="search-manufacturer">
      <div className="relative w-full">
        <button className="absolute top-[14px]">
          <Image src="/car-logo.svg" width={20} height={20} alt="car-logo" className="ml-4" />
        </button>
        <input
          className="search-manufacturer__input"
          placeholder="Volkswagen"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <div className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {filteredManufacturers.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setselected(item);
                  setQuery('');
                }}
                className={`relative cursor-default select-none py-2 px-4 ${
                  selected === item ? 'bg-primary-blue text-white' : 'text-gray-900'
                }`}
              >
                <span className={`block truncate ${selected === item ? 'font-medium' : 'font-normal'}`}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchManufacturer;
