import React, {useState, useContext, createContext} from 'react'
import sublinks from './data'

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links: []});
    const [columns, setColumns] = useState('col-1');

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((item) => text === item.page)
        setPage(page);
        setIsSubmenuOpen(true);
        setLocation(coordinates);

    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSubmenu,
            openSidebar,
            closeSidebar,
            closeSubmenu,
            location,
            page,
            columns,
            setColumns,
        }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return (
        useContext(AppContext)
    );
};

export {
    AppProvider,
    useGlobalContext,
};
