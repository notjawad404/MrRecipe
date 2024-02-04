import { useState } from "react";
import { Button, Layout } from "antd";
import { Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import medologylogo from "../data/medologylogo.png";
import menu from "../data/Menu.png";
import leaderboard from "../data/leaderboard.png";
import events from "../data/events.png";
import shop from "../data/shop.png";
import notif from "../data/notification.png";
import guides from "../data/Discovery.png";
import help from "../data/Question.png";
import settings from "../data/settings.png";
const { Header, Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setselected] = useState("dashboard")
  return (
    <div className="flex">
      <Layout className="w-[15rem]">
        <Sider
          className="sidebar bg"
          trigger={null}
          collapsed={collapsed}
          collapsible
        >
          <img
            src={medologylogo}
            alt=""
            className="bg-gray-100 p-4 pl-6 w-[20rem]"
          />
          <hr className="m-auto " />
          <Menu
            mode="inline"
            className="menu-bar pt-6 text-gray-600 bg-gray-100 h-[100vh] w-[15rem] overflow-y-scroll"
          >
            <Menu.SubMenu
              key="dashboard"
              icon={<img src={menu} alt="dashboard" />}
              title="Dashboard"
              className="thinfont "
            >
              <a href="/dashboard">
                <Menu.Item
                  className={ selected == 'home'? "thinfont hover:bg-teal-700 hover:text-white" : "thinfont bg-teal-700 text-white"}
                  onClick={()=>setselected('home')}
                  key="home"
                >
                  Home
                </Menu.Item>
              </a>
              <a href="/profile">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white "
                  key="home"
                >
                  Profile
                </Menu.Item>
              </a>
              <a href="/mycourses">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  key="home"
                >
                  My Courses
                </Menu.Item>
              </a>
              <a href="/library" className="ml-4">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  key="home"
                >
                  Library
                </Menu.Item>
              </a>
              <a href="/calendar">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  key="home"
                >
                  Calendar
                </Menu.Item>
              </a>
              <a href="/bundlepackages">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  key="home"
                >
                  Bundle Packages
                </Menu.Item>
              </a>
            </Menu.SubMenu>
            <Menu.Item
              key="leaderboard"
              className="thinfont hover:bg-teal-700 hover:text-white"
              icon={<img src={leaderboard} alt="leaderboard" />}
            >
              <a href="/profile" className="ml-1">Leaderboard </a>
            </Menu.Item>
            <Menu.Item
              className="thinfont hover:bg-teal-700 hover:text-white"
              key="events"
              icon={<img src={events} alt="events" />}
            >
              <a href="/profile" className="ml-1">Events </a>
            </Menu.Item>
            <Menu.SubMenu
              className="thinfont"
              key="shop"
              icon={<img src={shop} alt="shop"  className="mr-1"/>}
              title="Shop"
            >
              <a href="/profile">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  key="home"
                >
                  Products
                </Menu.Item>
              </a>
              <a href="/profile">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  key="home"
                >
                  Courses
                </Menu.Item>
              </a>
              <a href="/profile">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  key="home"
                >
                  1-1 Sessions
                </Menu.Item>
              </a>
            </Menu.SubMenu>
            <Menu.Item
              className="thinfont hover:bg-teal-700 hover:text-white"
              key="notifications"
              icon={<img src={notif} alt="notif" className="-ml-[0.15rem]"/>}
            >
              <a href="/profile">Notifications </a>
            </Menu.Item>
            <Menu.SubMenu
              key="guides"
              className="thinfont"
              icon={<img src={guides} alt="guides" />}
              title="Guides"
            >
              <a href="/profile">
                <Menu.Item
                  key="home"
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  icon={<HomeOutlined />}
                >
                  Home
                </Menu.Item>
              </a>
            </Menu.SubMenu>
            <Menu.SubMenu
              className="thinfont"
              key="help"
              icon={<img src={help} alt="help" />}
              title="Get Help"
            >
              <a href="/profile">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  key="home2"
                  icon={<HomeOutlined />}
                >
                  Home
                </Menu.Item>
              </a>
            </Menu.SubMenu>
            <Menu.SubMenu
              className="thinfont"
              key="settings"
              icon={<img src={settings} alt="settings" className="mr-1"/>}
              title="Settings"
            >
              <a href="/profile">
                <Menu.Item
                  className="thinfont hover:bg-teal-700 hover:text-white"
                  key="home"
                  icon={<HomeOutlined />}
                >
                  Home
                </Menu.Item>
              </a>
            </Menu.SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
};

export default Sidebar;
