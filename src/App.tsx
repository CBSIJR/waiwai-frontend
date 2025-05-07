// import AuthProvider from './provider/authProvider';
import { ThemeContext } from "@/contexts";
import { useReadFromLocalStorage, useLocalStorage } from "@/hooks";
import { EnumTheme } from "./types/themeTypes";
import Routes from "@/routes";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    const defaultTheme =
        useReadFromLocalStorage<EnumTheme>("theme") ?? EnumTheme.DARK;

    const [theme, setTheme] = useLocalStorage<EnumTheme>("theme", defaultTheme);

    const toggleThemeMode = (theme: EnumTheme) => {
        setTheme(theme);
    };

    return (
        <ThemeContext.Provider
            value={{ themeMode: theme, toggleThemeMode: toggleThemeMode }}
        >
            <AuthProvider>
            <Routes />
            </AuthProvider>
        </ThemeContext.Provider>
    );
}

export default App;
