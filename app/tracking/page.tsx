"use client"

import { useState, useEffect } from "react";




export default function Tracking() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://globaltracktrace.ptc.post/gtt.api/service.svc/rest/ItemTT/CP000070050AG');
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []); 
  return (

    <>
      <div className='grid place-content-center h-96'>
        <div className='form-control max-w-xs'>
          <label className='label'>
            <span className='label-text'>Tracking Number</span>
            
          </label>
          <input
            type='text'
            placeholder='Eg: CP000070050AG'
            className='input input-bordered w-full max-w-xs'
          />
          <label className='flex justify-end'>
            
            <button className="btn shadow-md ">Track</button>
          </label>
        </div>
      </div>{' '}
    </>
  );
};

