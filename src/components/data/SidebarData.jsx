import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />, 
        list_item_style: 'list_item_style',
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />, 
        list_item_style: 'list_item_style',
    }
]
    