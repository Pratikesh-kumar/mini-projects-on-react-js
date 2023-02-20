import React from 'react';
import './App.css';
import Person from './components/Person';
import PersonData from './components/PersonData';

// const PersonInfo = (value) => {
//   return (
//   <>
  // <Person 
    // title={value.title}
      // des={value.des}
      // />
  // </>
//   )

// }

export default function App() {

  return (
    <>
      <h1>Straw Hats Pirates  </h1>
      
      <div className='container'>
        
        {PersonData.map((value)=>{
         return (
           <>
            <Person
              title={value.title}
              img={value.img}
                des= {value.des}
              />
             </>
           )
        })}

      </div>
    </>
  )
}
