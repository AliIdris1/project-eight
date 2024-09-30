"use client"

import { Carprops } from './types'
import Image from 'next/image';
import { generateCarImageUrl } from '@/utils';



interface CarDetailsprops {
  car: Carprops ;
  isOpen: boolean ;
  closeModal : () => void ; 
}

const CardDetails = ({isOpen , closeModal , car}:CarDetailsprops) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4 text-center">
            <div className="fixed inset-0 bg-black bg-opacity-25" onClick={closeModal}></div>
            <div className="relative w-full max-w-lg p-5 bg-white rounded-2xl shadow-xl transform transition-all flex flex-col gap-5 max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
              >
                <Image src="/close.svg" width={20} height={20} alt="close" className="object-contain" />
              </button>
              <div className="flex-1 flex flex-col gap-3">
                <div className="relative w-full h-40 bg-pattern bg-center bg-cover rounded-lg">
                  <Image src={generateCarImageUrl(car)} alt="car" priority className="object-contain" fill />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image src={generateCarImageUrl(car, '29')} alt="car" priority className="object-contain" fill />
                  </div>
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image src={generateCarImageUrl(car, '33')} alt="car" priority className="object-contain" fill />
                  </div>
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image src={generateCarImageUrl(car, '12')} alt="car" priority className="object-contain" fill />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-xl font-semibold capitalize">{car.make} {car.model}</h2>
                <div className="flex flex-wrap gap-4 mt-3">
                  {Object.entries(car).map(([key, value]) => (
                    <div key={key} className="flex justify-between w-full gap-5">
                      <h4 className="text-gray-400 capitalize">{key.split('_').join(' ')}</h4>
                      <p className="text-black-100 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardDetails