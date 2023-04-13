const list = [
  {
    name: "Dashboard",

    isCollapsible: true,

    open: false,

    active: false,
    subMenu: [
      {
        name: "Jewel AR",

        subLink: "/jewelar",

        count: 0,

        key: "JEWEL AR",
      },

      {
        name: "Gold Chit",

        subLink: "/goldchit",

        count: 0,

        key: "GOLD CHIT",
      },
    ],
  },

  {
    name: "Jewel AR",

    isCollapsible: true,

    open: false,

    active: false,

    subMenu: [
      {
        name: "Appointment",

        subLink: "/appointment",

        count: 0,

        key: "APPOINTMENT",
      },

      {
        name: "Category",

        subLink: "/category",

        count: 0,

        key: "CATEGORY",
      },

      {
        name: "Order",

        subLink: "/orders",

        count: 0,

        key: "ORDER",
      },

      {
        name: "Products",

        subLink: "/products",

        count: 0,

        key: "PRODUCT",
      },
    ],
  },
  {
    name: "Gold Chit",

    isCollapsible: true,

    open: false,

    active: false,

    subMenu: [
      {
        name: "Scheme",

        subLink: "/scheme",

        count: 0,

        key: "SCHEME",
      },

      {
        name: "User Scheme",

        subLink: "/userschemes",

        count: 0,

        key: "USER SCHEME",
      },
    ],
  },
  {
    name: "Customer",

    isCollapsible: false,

    open: false,

    link: "/customer",

    active: false,
  },
  {
    name: "Settings",

    isCollapsible: true,

    open: false,

    active: false,

    subMenu: [
      {
        name: "Store",

        subLink: "/store",

        count: 0,

        key: "STORE",
      },

      {
        name: "Staff",

        subLink: "/staff",

        count: 0,

        key: "STAFF",
      },
      {
        name: "Rate",

        subLink: "/rate",

        count: 0,

        key: "RATE",
      },
    ],
  },
  {
    name: "Report",

    isCollapsible: true,

    open: false,

    active: false,

    subMenu: [
      {
        name: "Order Report",

        subLink: "/report/orderreport",

        count: 0,

        key: "ORDER REPORT",
      },

      {
        name: "UserScheme Report",

        subLink: "/report/userscheme",

        count: 0,

        key: "USER SCHEME REPORT",
      },
    ],
  },
  {
    name: "CMS Page",

    isCollapsible: true,

    open: false,

    active: false,

    subMenu: [
      {
        name: "Settings",

        subLink: "/settings",

        count: 0,

        key: "SETTING",
      },

      {
        name: "Notification",

        subLink: "/notifications",

        count: 0,

        key: "NOTIFICATIONS",
      },
    ],
  },
];

export default list;
