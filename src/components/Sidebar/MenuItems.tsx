import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

interface MenuItemsProps {
  menuItems: MenuItem[];
}

const MenuItems: React.FC<MenuItemsProps> = ({ menuItems }) => {
  const navigate = useNavigate();

  return (
    <>
      {menuItems.map((item) => (
        <ListItemButton key={item.text} onClick={() => navigate(item.path)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </>
  );
};

export default MenuItems;