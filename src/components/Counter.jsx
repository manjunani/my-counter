import React, { useState } from 'react';
import {Card,Button} from 'react-bootstrap';
function Counter() {

  const [number, setNumber] = useState(0);

  const increase =() =>{
    setNumber(number+1);
  }
  const decrease = () =>{
    setNumber(number-1);
  }
  return (
    <Card className='justify-content-center p-5'>
        <h1>{number}</h1>
        <div>
            <Button className='mx-5' onClick={increase}>Increase</Button>
            <Button className='mx-5' onClick={decrease}>Decrease</Button>
        </div>
    </Card>
  )
}

export default Counter