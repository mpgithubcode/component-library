import React from 'react';
import Button from '../../components/Button';
import Label from './Label';
import Heading1 from './Heading1';


const InteractiveRatingCard = ({heading, text, list_items, submit_button}) => {
  return (
    <div>
      <img src="" alt="" />
      <Heading1 text={heading} />

      <p>{text}</p>

      <ul>
        {list_items.map((l) => (
          <li><Button label={l}/></li> 
        ))}
      </ul>

      <Button label={submit_button}/>
    </div>
  )
}

export default InteractiveRatingCard
