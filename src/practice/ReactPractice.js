import React from "react";

import { OriginalLogo } from '../logo/originalPage';

import ManageRouter from '../pages/ManageRouter';
import TasksTodo from '../useState/Tasks';
import CountShow from '../useState/countShow';
import ButtonExample from '../useContext/Button_Example';
import CustomerExample from '../useContext/Customer_Example';
import MultipleContext from '../useContext/Multiple_Context';
import UseContxRedcr from '../useContext/useCont_useRed';
import Counter from '../useRef/ClickCounter';
import StopWatch from '../useRef/StopWatch';
import FocusInput from '../useRef/FocusInput';
import CatFriends from '../useRef/ScrollImage';
import VideoPlayer from '../useRef/Video';
import NormalStatusBar from '../customHooks/NormalStatus';
import CustomStatusBar from '../customHooks/customStatus';
import NormalInput from '../customHooks/NormalInput';
import CustomInput from '../customHooks/customInput';
import PropsImage from '../props/ImageExample';
import JSXChildren from '../props/JSXChildren';
import ConditionallyJSX from '../conditionally_Rendering/JSX';
import KeyPeopleList from '../keys/example';
import ContextPage from '../context_API/MainPage';
import MyForm from '../form/SampleForm';
import ReactForm from '../form/ReactForm';

export default function ReactPractice() {
    return (
        <>
            <OriginalLogo />

            <ManageRouter />
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
            <MyForm />
            <ReactForm />
        </>
    );
}
