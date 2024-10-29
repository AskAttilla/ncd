import {useState} from 'react';

import "./accordion.scss"

const Accordion = ({name, text}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        setIsOpen(prev => !prev)
    }
    
    return (
        <div className={`accordion${isOpen ? " accordion--open" : ""}`}>
            <button className="accordion__button" aria-expanded={isOpen} onClick={handleOnClick}>
                <h2 className="accordion__title">{name}</h2>
            </button>
            <div className="accordion__content">
                {text}
            </div>
        </div>
  );
}

export default Accordion;