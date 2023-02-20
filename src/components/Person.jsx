import React from 'react';

const Person = (props) => {
  console.log(props)
  return (
    <>
      <div className='card'>
        <h3>{props.title}</h3>
        <h3>{props.img}</h3>
        <h3>{props.des}</h3>



        <button>read more</button>
      </div>
    </>
  )
};
export default Person;