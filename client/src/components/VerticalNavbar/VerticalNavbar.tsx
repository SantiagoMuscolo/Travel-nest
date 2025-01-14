import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, UserDropdown } from '..';
import arrowDown from '/svgs/arrowDown.svg';
import arrowUp from '/svgs/arrowUp.svg';

import camping from '/svgs/camping.svg';
import domo from '/svgs/domo.svg';
import fire from '/svgs/fire.svg';
import island from '/svgs/island.svg';
import mansion from '/svgs/mansion.svg';
import mountains from '/svgs/mountains.svg';
import t from '/svgs/t.svg';
import winter from '/svgs/winter.svg';

const items = [
  {
    img: mansion,
    title: 'Mansion'
  },
  {
    img: mountains,
    title: 'Mountains'
  },
  {
    img: island,
    title: 'Island'
  },
  {
    img: domo,
    title: 'Domo'
  },
  {
    img: fire,
    title: 'Popular'
  },
  {
    img: winter,
    title: 'Winter'
  },
  {
    img: camping,
    title: 'Camping'
  },
  {
    img: mansion,
    title: 'Mansion'
  },
  {
    img: mountains,
    title: 'Mountains'
  },
  {
    img: island,
    title: 'Island'
  },
  {
    img: domo,
    title: 'Domo'
  },
  {
    img: fire,
    title: 'Popular'
  },
  {
    img: winter,
    title: 'Winter'
  },
  {
    img: camping,
    title: 'Camping'
  },
];

const itemsPerPage = 7;

function VerticalNavbar() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  const scrollUp = () => {
    if (activeItem > 0) {
      setActiveItem(activeItem - 1);
    }
  };

  const scrollDown = () => {
    if (activeItem < items.length - itemsPerPage) {
      setActiveItem(activeItem + 1);
    }
  };

  const visibleItems = items.slice(activeItem, activeItem + itemsPerPage);

  return (
    <header className='sticky top-0 flex flex-col items-center pt-[40px]'>
      <Link to='/'>
        <img src={t} alt='' className='w-[40px]' />
      </Link>

      <nav className="h-full bg-white w-24 flex flex-col items-center gap-4 ml-4 mr-4  relative top-[15px] pt-5">
      <button onClick={scrollUp} className="cursor-pointer">
          <img src={arrowUp} alt="" className="w-[20px]" />
        </button>
        {visibleItems.map((item, index) => (
          <div
            className={`flex flex-col items-center gap-1 cursor-pointer ${
              activeItem + index === activeItem ? 'text-[#FF385C]' : 'text-[#626262]'
            }`}
            key={index}
            onClick={() => handleItemClick(activeItem + index)}
          >
            <img src={item?.img} alt="" className='w-[40px]' />
            <span>{item?.title}</span>
          </div>
        ))}
        <button onClick={scrollDown} className="cursor-pointer">
          <img src={arrowDown} alt="" className="w-[10px]" />
        </button>
        <Button
          className='flex flex-col items-center text-[#FF385C] border border-[#FF385C] p-2 w-[80px] rounded-3xl'
        >
          Filtros
        </Button>
        <UserDropdown className="cursor-pointer flex items-center border-2 hover:shadow-lg rounded-full px-3 py-1 gap-2" />
      </nav>
    </header>
  );
}

export default VerticalNavbar;
