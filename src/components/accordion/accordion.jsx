import {useState} from 'react';

import "./accordion.scss"

const Accordion = ({name, text}) => {
    const [isOpen, setIsOpen] = useState(false)

    const contentId = name.replace(/\s+/g, '')

    const handleOnClick = () => {
        setIsOpen(prev => !prev)
    }
    
    return (
        <div className={`accordion${isOpen ? " accordion--open" : ""}`}>
            <button className="accordion__button" aria-expanded={isOpen} aria-controls={contentId} onClick={handleOnClick}>
                <h2 className="accordion__title">{name}</h2>
            </button>
            <div id={contentId} className="accordion__content-wrapper">
                <div className="accordion__content">
                    <div className='accordion__content-inner'>
                        {text}
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Accordion;