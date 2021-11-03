import React, {useState} from 'react';
import TabBar from './TabBar';

const TabBarContainer = () => {
    const [activeItem, setActiveItem] = useState('unitInfo')
    const handleItemClick = (e, { name }) => setActiveItem(name)
    return (  );
}
 
export default TabBarContainer;