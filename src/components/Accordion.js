import React, { useState } from 'react';
const Accordion = ({ items }) => {
  const [ activeIndex , setActiveIndex ] = useState(null);
   const onTitleClick = (index) => {
     setActiveIndex(index);
   }
   const renderedItems = items.map ((items,index)  => {
    const active = index === activeIndex ? 'active' : ' ';
    return (
      <React.Fragment key={ items.title }>
        <div onClick={ () => onTitleClick(index) } className= {`title ${ active }`}>
          <i className="dropdown icon"></i>
              { items.title }
        </div>
        <div className = {`content ${active}`}>
           <p>{ items.content }</p>
        </div>
      </React.Fragment>
     );
   });
      return <div className="ui styled accordion">
         { renderedItems }
      </div>
    };
  
    export default Accordion;
