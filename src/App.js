import './App.css';

import { OriginalLogo } from './logo/originalPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Layout2 from './pages/Layout2';
import About from './pages/About';
import Home2 from './pages/Home2';

import TasksTodo from './useState/Tasks';
import CountShow from './useState/countShow';
import ButtonExample from './useContext/Button_Example';
import CustomerExample from './useContext/Customer_Example';
import MultipleContext from './useContext/Multiple_Context';
import UseContxRedcr from './useContext/useCont_useRed';
import Counter from './useRef/ClickCounter';
import StopWatch from './useRef/StopWatch';
import FocusInput from './useRef/FocusInput';
import CatFriends from './useRef/ScrollImage';
import VideoPlayer from './useRef/Video';
import NormalStatusBar from './customHooks/NormalStatus';
import CustomStatusBar from './customHooks/customStatus';
import NormalInput from './customHooks/NormalInput';
import CustomInput from './customHooks/customInput';
import PropsImage from './props/ImageExample';
import JSXChildren from './props/JSXChildren';
import ConditionallyJSX from './conditionally_Rendering/JSX';
import KeyPeopleList from './keys/example';
import ContextPage from './context_API/MainPage';

function App() {
  return (
    <div className="App">

      <OriginalLogo />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/al" element={<Layout2 />}>
            <Route index element={<Home2 />} />
            <Route path="/al/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <TasksTodo />
      <CountShow />
      <ButtonExample />
      <CustomerExample />
      <MultipleContext />
      <UseContxRedcr />
      <Counter />
      <StopWatch />
      <FocusInput />
      <CatFriends />
      <VideoPlayer />
      <NormalStatusBar />
      <CustomStatusBar />
      <NormalInput />
      <CustomInput />
      <PropsImage />
      <JSXChildren />
      <ConditionallyJSX />
      <KeyPeopleList />
      <ContextPage />
    </div>
  );
}

export default App;
