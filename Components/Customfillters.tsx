"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { CustomfilterProps } from './types';

const CustomFilters = ({ title, options, setFilter }: CustomfilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option:any) => {
    setSelected(option);
    setFilter(option.value);
    setIsOpen(false);
  };

  return (
    <div className="w-fit">
      <div className="relative w-fit z-10">
        <button
          className="custom-filter__btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block truncate">{selected.title}</span>
          <Image
            src="chevron-up-down.svg"
            width={20}
            height={20}
            alt="chevron up and down"
            className="ml-4 object-contain"
          />
        </button>
        {isOpen && (
          <div className="custom-filter__options absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map((op) => (
              <div
                key={op.title}
                onClick={() => handleSelect(op)}
                className={`relative cursor-default select-none py-2 px-4 ${
                  selected.title === op.title
                    ? 'bg-primary-blue text-white'
                    : 'text-gray-900'
                }`}
              >
                <span
                  className={`block truncate ${
                    selected.title === op.title ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {op.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomFilters;
