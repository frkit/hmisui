import React, { useState } from 'react';
import Header from './Header';
import Profile from './Profile';

function Menu() {
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (index) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [index]: !prevOpenMenus[index],
    }));
  };

  const menuItems = [
    {
      header: "PERSONAL",
      items: [
        {
          title: "Dashboard",
          icon: "fa fa-dashboard",
          active: true,
          children: [
            { title: "Dashboard 1", link: "dashboard", active: true },
          
          ],
        },
      ],
    },
    {
      title: "OPD",
      icon: "fa fa-bullseye",
      children: [
        { title: "Patient Registration", link: "/registrations" },
       
      ],
    },
  ];

  return (
    <>
   
      <div className="wrapper boxed-wrapper" >
        <Header />
       
     
        <aside className="main-sidebar"   >
            <Profile/>
          <div className="sidebar" >
            <ul className="sidebar-menu"  data-widget="tree">
              {menuItems.map((menu, index) => (
                <React.Fragment key={index}>
                  {menu.header && <li className="header">{menu.header}</li>}

                  {(menu.items || [menu]).map((item, subIndex) => (
                    <li
                      className={`treeview ${item.active ? 'active' : ''} ${
                        openMenus[`${index}-${subIndex}`] ? 'menu-open' : ''
                      }`}
                      key={subIndex}
                    >
                      <a href="#" onClick={() => handleToggle(`${index}-${subIndex}`)}>
                        <i className={item.icon} /> <span>{item.title}</span>
                        {item.children && (
                          <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right" />
                          </span>
                        )}
                      </a>
                      {item.children && (
                        <ul
                          className="treeview-menu"
                          style={{
                            display: openMenus[`${index}-${subIndex}`]
                              ? 'block'
                              : 'none',
                          }}
                        >
                          {item.children.map((child, childIndex) => (
                            <li
                              className={child.active ? 'active' : ''}
                              key={childIndex}
                            >
                              <a href={child.link}>{child.title}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      
    </>
  );
}

export default Menu;
