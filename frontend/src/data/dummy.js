import React from "react";
import menu from "./Menu.png";
import leaderboard from "./leaderboard.png";
import events from "./events.png";
import shop from "./shop.png";
import notif from "./notification.png";
import guides from "./Discovery.png";
import help from "./Question.png";
import settings from "./settings.png";
import profile from "./profile.png";
import logout from "./logout.png";
import avatar from "./avatar.png"

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        icon: <img src={menu} alt="" />,
        children: [
          {
            title: "Home",
            path: "/",
            icon: <img />,
          },
          {
            title: "Profile",
            path: "/",
            icon: <img />,
          },
          {
            title: "My Courses",
            path: "/",
            icon: <img />,
          },
          {
            title: "Library",
            path: "/",
            icon: <img />,
          },
          {
            title: "Calendar",
            path: "/",
            icon: <img />,
          },
          {
            title: "Bundle Packages",
            path: "/",
            icon: <img />,
          },
        ],
      },
      {
        name: "Leaderboard",
        icon: <img src={leaderboard} alt="" />,
      },
      {
        name: "Events",
        icon: <img src={events} alt="" />,
      },
      {
        name: "Shop",
        icon: <img src={shop} alt="" />,
        children: [
          {
            title: "Users",
            path: "/",
            icon: <img />,
          },
          {
            title: "Revenue",
            path: "/",
            icon: <img />,
          },
        ],
      },
      {
        name: "Notification",
        icon: <img src={notif} alt="" />,
      },
      {
        name: "Guides",
        icon: <img src={guides} alt="" />,
        children: [
          {
            title: "Users",
            path: "/",
            icon: <img />,
          },
          {
            title: "Revenue",
            path: "/",
            icon: <img />,
          },
        ],
      },
      {
        name: "Get Help",
        icon: <img src={help} alt="" />,
        subNav: [
          {
            title: "Users",
            path: "/",
            icon: <img />,
          },
          {
            title: "Revenue",
            path: "/",
            icon: <img />,
          },
        ],
      },
      {
        name: "Settings",
        icon: <img src={settings} alt="" />,
        subNav: [
          {
            title: "Users",
            path: "/",
            icon: <img />,
          },
          {
            title: "Revenue",
            path: "/",
            icon: <img />,
          },
        ],
      },
    ],
  },
];

export const userProfileData = [
  {
    icon: <img src={profile} />,
    title: "My Profile",
    href: "/profile",
  },
  {
    icon: <img src={settings} />,
    title: "Settings",
    href: "/settings",
  },
  {
    icon: <img src={logout} />,
    title: "Logout",
    href: "/logout",
  },
];


export const chatData = [
  {
    image: avatar,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image: avatar,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image: avatar,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image: avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];