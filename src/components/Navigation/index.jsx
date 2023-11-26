import { useState } from 'react';
import { PiWalletFill } from 'react-icons/pi';
import { IoMdCompass } from 'react-icons/io';
import IconButton from '../IconButton';
import { IoMdNotifications } from 'react-icons/io';
import { RiSettings5Fill } from 'react-icons/ri';
import './navigationbar.scss';

const navLists = [
  { id: 0, icon: <PiWalletFill /> },
  { id: 1, icon: <IoMdCompass /> },
  { id: 2, icon: <IoMdNotifications /> },
  { id: 3, icon: <RiSettings5Fill /> },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);
  
  const handleTabSelection = () => {
    setActiveTab(0);
  };

  return (
    <div className='navigation-fixed'>
      <div className='navigation-bar'>
        {navLists.map((list) => (
          <IconButton
            key={list.id}
            handleClick={handleTabSelection}
            icon={list.icon}
            size={'23px'}
            color={activeTab === list.id ? '#4b5868' : '#aeb8c4'}
          />
        ))}
      </div>
    </div>
  );
}

