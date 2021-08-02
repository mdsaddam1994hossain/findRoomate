import React, { useState } from 'react'
import { TabBar } from 'antd-mobile';
import Upcomming from './Upcomming/Upcomming';
import Details3 from './Details3/Details3';
import Details2 from './Details2/Details2';
import Login from './Login/Login';
import BootomTab from './BootomTab/BootomTab';
import FindPerfect2 from './FindPerfect2/FindPerfect2';
import YourRoomie from './YourRoomie/YourRoomie';


const Layout = () => {
    const [selectedTab, setSelectedTab] = useState(null)
    const [fullScreen, setFullScreen] = useState(true)
    const [hidden, setHidden] = useState(false)

    // function rederUpcoming(){
    //     return <div>
    //         <button onClick={()=> setHidden(!hidden)} >{hidden == true ? "Show" : "Hide"}</button>
    //         <Upcomming />
    //     </div>
    // }

    const trip = <p className="trip-style"> Trips</p>
    const pro = <p className="pro-set-style">Profile </p>
    const setting = <p className="pro-set-style">Settings </p>

    return (
        <div style={ fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 450 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={hidden}
        >
          <TabBar.Item
            title={trip}
            key="Trips"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./img/Vector5.png) center center /  15px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./img/Vector5.png) center center /  15px 21px no-repeat' }}
            />
            }
            selected={selectedTab === 'trips'}
            onPress={() => {
              setSelectedTab("'trips'")  
            }}
            data-seed="logId"
          >
           {/* {rederUpcoming()} */}
           <Upcomming />
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/Vector6.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/Vector6.png) center center /  21px 21px no-repeat' }}
              />
            }
            title={pro}
            key="Profile"
            selected={selectedTab === 'profile'}
            onPress={() => {
                setSelectedTab('profile')
               
            }}
            data-seed="logId1"
          >
          <FindPerfect2 />
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/Vector7.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/Vector7.png) center center /  21px 21px no-repeat' }}
              />
            }
            title={setting}
            key="Settings"
            selected={ selectedTab === 'settings'}
            onPress={() => {
              setSelectedTab('settings')
            }}
          >
           <YourRoomie />
          </TabBar.Item>
          
          {/* <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={selectedTab === 'yellowTabs'}
            onPress={() => {
               setSelectedTab('yellowTabs')
            }}
          >
            <BootomTab />
          </TabBar.Item> */}
        </TabBar>
      </div>
    );
};

export default Layout;

