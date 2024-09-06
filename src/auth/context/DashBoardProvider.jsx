import { useDashboard } from "../hooks/useDashboard"
import { DashBoardContext } from "./DashBoardContext";


export const DashBoardProvider=({children})=>{


    const{
        sideBarOpen,
        screenWidth,
        op,
        login,
        initialLogin,
        errors,
        isUser,
        username,
        isInDB,
        handlerDeleteCard,
        handlerGetCard,
        handlerSaveCard,
        setUsername,
        handlerFindUserr,
        handlerUpdateUser,
        handlerSaveVenta,
        handlerUpdatePass,
        handleSaveClient,
        handlerLoginAdmin,
        handlerLogin,
        handlerLogout,
        setOp,
        setSideBarOpen,
        setScreenWidth,
        toggleSideBar,

    }=useDashboard();

    return(



        <DashBoardContext.Provider value={

            {
                sideBarOpen,
                screenWidth,
                op,
                login,
                initialLogin,
                errors,
                isUser,
                username,
                isInDB,
                handlerDeleteCard,
                handlerGetCard,
                handlerSaveCard,
                setUsername,
                handlerFindUserr,
                handlerUpdateUser,
                handlerSaveVenta,
                handlerUpdatePass,
                handleSaveClient,
                handlerLoginAdmin,
                handlerLogin,
                handlerLogout,
                setOp,
                setSideBarOpen,
                setScreenWidth,
                toggleSideBar,
            }
        }>

        {children}

        </DashBoardContext.Provider>
    )


}