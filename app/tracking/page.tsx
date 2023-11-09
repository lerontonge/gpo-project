

export default function Tracking() {
  return (
    <>
      <div className= 'grid place-content-center h-96'>
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
}


