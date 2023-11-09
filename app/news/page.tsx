const News = () => {
  return (
    <>
      <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
        <div className='card sm:card-compact  md:card-compact bg-base-100 shadow-xl'>
          <figure className="px-10 pt-10">
            <img
              src='https://i.ibb.co/28CqsL2/MGWlwGj.jpg'
              alt='News'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Postman And Dog Become Friends!</h2>
            <p>
              For the past ten years, this man has given my dog a treat. At
              approximately 3:00 every afternoon, she waits at the end of the
              driveway for him to deliver the mail.
            </p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Read More</button>
            </div>
          </div>
        </div>{' '}
        <div className='card sm:card-compact  md:card-compact bg-base-100 shadow-xl'>
          <figure className="px-10 pt-10">
            <img
              src='https://i.ibb.co/R2NPdvd/post-office.jpg'
              alt='News'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Post Office Strikes...Again!</h2>
            <p>
            The staff have been out since last week, after the Ministry of Works failed to correct the problems caused by a leaking roof, including the growth and build-up of mold in the building, creating a health hazard.
            </p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
