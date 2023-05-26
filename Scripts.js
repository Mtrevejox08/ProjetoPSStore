const menuList = document.getElementById("menu-list");
const menuIcon = document.getElementsByClassName("menu-icon");

menuList.style.maxHeight = "0px";

const showMenu = () => {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "120px";
  } else {
    menuList.style.maxHeight = "0px";
  }
};
