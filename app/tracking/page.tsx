'use client';

import { useState } from 'react';

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrack = () => {
    fetch(`https://globaltracktrace.ptc.post/gtt.api/service.svc/rest/ItemTT/${trackingNumber}`)
      .then(response => response.json())
      .then(data => {
        setTrackingResult(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

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
            value={trackingNumber}
            onChange={e => setTrackingNumber(e.target.value)}
          />
          <label className='flex justify-end'>
            <button className="btn shadow-md" onClick={handleTrack}>Track</button>
          </label>
        </div>
      </div>

      {trackingResult && (
        <div className='mt-4'>
          <h2>Tracking Result</h2>
          <pre>{JSON.stringify(trackingResult, null, 2)}</pre>
        </div>
      )}
    </>
  );
}