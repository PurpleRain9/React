import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header';
import Navbar from './Navbar';
import './index.css';
import Footer from './Footer';
import Food from './Food';
import Card from './Components/Card';
import Parents from './Props/Parents';
import UserGreeting from './ConditionalRundering/UserGreeting';
import Lists from './RenderLists/Lists';
import ClickEvent from './ClickEvents/ClickEvent';
import StateParent from './useState/StateParent';
import OnChangeEventsComponent from './OnChangeEvent/OnChangeEvent';
import NestComponents from './NestComponents/NestComponents';
import BookLists from './BookLists/BookLists';

export default function App() {
  return (
    <div className=''>
    {/* Runnder Conditional Rendering */}
      {/* <UserGreeting /> */}

    {/* Runder Lists */}
      {/* <Lists /> */}

    {/* Click Events */}
      {/* <ClickEvent /> */}

    {/* Use State */}
      {/* <StateParent/> */}

    {/* OnChage */}
    {/* <OnChangeEventsComponent /> */}

    {/* Nest Component */}
    {/* <NestComponents />  */}

    {/* Book Lists */}
    <BookLists />
    </div>
  )
}

