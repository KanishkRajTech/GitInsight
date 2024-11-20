import { createContext, useContext } from "react";

export const ThemContext = createContext({
    themeMode:"light",
    darkTheme:() =>{},
    lightTheme:()=>{},
})

export const ThemeProvider = ThemContext.Provider

export default function useTheme(){
    return useContext(ThemContext)
}