import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "DashBoard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "JewelAR ",
        path: "/dashboard/jewelardaschboard",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Gold Chit",
        path: "/dashboard/goldchitdashboard",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Jewel AR",
    path: "/jewelar",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Jewel AR",
        path: "/jewelar/category",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Jewel AR 2",
        path: "/jewelar/products",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Jewel AR 3",
        path: "/jewelar/orders",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Jewel AR 4",
        path: "/jewelar/appointments",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Jewel AR 3",
        path: "/jewelar/transaction",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Gold Chit",
    path: "/goldchit",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Gold Chit 2",
    path: "/goldchit/scheme",
    icon: <IoIcons.IoIosPaper />,
    cName: "sub-nav",
  },
  {
    title: "Gold Chit 3",
    path: "/goldchit/userscheme",
    icon: <IoIcons.IoIosPaper />,
    cName: "sub-nav",
  },
  {
    title: "Gold Chit 4",
    path: "/goldchit/transaction",
    icon: <IoIcons.IoIosPaper />,
    cName: "sub-nav",
  },
  {
    title: "Gold Chit 5",
    path: "/goldchit/customer",
    icon: <IoIcons.IoIosPaper />,
    cName: "sub-nav",
  },

  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Message 2",
        path: "/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
