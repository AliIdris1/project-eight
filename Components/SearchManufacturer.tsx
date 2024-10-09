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
      <div>
        <button>
          <Image src="/car-logo.svg" width={20} height={20} alt="car-logo" className="image-diff" />
        </button>
        <input
          className="search-manufacturer__input"
          placeholder="Volkswagen"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <div className="query">
            {filteredManufacturers.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setselected(item);
                  setQuery('');
                }}
                
              >
                <span
  style={{
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: selected === item ? '500' : '400',
  }}
>
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
