import React, {useState} from 'react';
import TabBar from './TabBar';

const TabBarContainer = ({ tabs, ...otherProps }) => {

    const firstTab = tabs[0];

    const [activeItem, setActiveItem] = useState(firstTab.name)
    const handleItemClick = ( name) => setActiveItem(name)
    return (
        <TabBar
            {...otherProps}
            currentTab={activeItem}
            onTabClick={handleItemClick}
            tabs={tabs}/>
     );
}
 

export default TabBarContainer;