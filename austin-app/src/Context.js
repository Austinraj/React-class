import React from "react";

export const AppContext = React.createContext({ name: "Austin"});
export const ThemeContext = React.createContext({ });

export  function ThemeContext1(props){
    // console.log(AppContext);
const [theme, setTheme] = React.useState("light");

const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

return(
    <ThemeContext.Provider value={{theme, changeTheme}}>
        {props.children}
    </ThemeContext.Provider>
)
}


// export default ThemeContext1;