import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Pr Templates",
    newTab: false,
    path: "category/pr-templates",
    submenu: [
      {
        id: 2.1,
        title: "Logo Stings",
        newTab: false,
        path: "category/pr-templates/logo-stings",
      },
      {
        id: 2.4,
        title: "Openers",
        newTab: false,
        path: "category/pr-templates/openers",
      },
      {
        id: 2.5,
        title: "Product Promo",
        newTab: false,
        path: "category/pr-templates/product-promo",
      },
      {
        id: 2.6,
        title: "Video Displays",
        newTab: false,
        path: "category/pr-templates/video-displays",
      },
      {
        id: 2.7,
        title: "Titles",
        newTab: false,
        path: "category/pr-templates/titles",
      },
      {
        id: 2.8,
        title: "Elements",
        newTab: false,
        path: "category/pr-templates/elements",
      },
      {
        id: 2.9,
        title: "Infographics",
        newTab: false,
        path: "category/pr-templates/infographics",
      },
      {
        id: 2.10,
        title: "Broadcast Packages",
        newTab: false,
        path: "category/pr-templates/broadcast-packages",
      },
    ],
  },
  {
    id: 3,
    title: "Ae Templates",
    newTab: false,
    path: "category/ae-templates",
    submenu: [
      {
        id: 3.1,
        title: "Logo Stings",
        newTab: false,
        path: "category/ae-templates/logo-stings",
      },
      {
        id: 3.4,
        title: "Openers",
        newTab: false,
        path: "category/ae-templates/openers",
      },
      {
        id: 3.5,
        title: "Product Promo",
        newTab: false,
        path: "category/ae-templates/product-promo",
      },
      {
        id: 3.6,
        title: "Video Displays",
        newTab: false,
        path: "category/ae-templates/video-displays",
      },
      {
        id: 3.7,
        title: "Titles",
        newTab: false,
        path: "category/ae-templates/titles",
      },
      {
        id: 3.8,
        title: "Elements",
        newTab: false,
        path: "category/ae-templates/elements",
      },
      {
        id: 3.9,
        title: "Infographics",
        newTab: false,
        path: "category/ae-templates/infographics",
      },
      {
        id: 3.10,
        title: "Broadcast Packages",
        newTab: false,
        path: "category/ae-templates/broadcast-packages",
      },
    ],
  },
  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
