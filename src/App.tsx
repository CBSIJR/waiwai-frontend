// import AuthProvider from './provider/authProvider';
import { ThemeContext } from "@/contexts";
import { useLocalStorage, useReadFromLocalStorage } from "@/hooks";
import Routes from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { EnumTheme } from "./types/themeTypes";
import { AuthProvider } from "./contexts/AuthProvider";
import { ConfigProvider } from "antd";

// Create a client
const queryClient = new QueryClient();

function App() {
    const defaultTheme =
        useReadFromLocalStorage<EnumTheme>("theme") ?? EnumTheme.LIGHT;

    const [theme, setTheme] = useLocalStorage<EnumTheme>("theme", defaultTheme);

    const toggleThemeMode = (theme: EnumTheme) => {
        setTheme(theme);
    };

    return (
        <ThemeContext.Provider
            value={{ themeMode: theme, toggleThemeMode: toggleThemeMode }}
        >
            <ConfigProvider theme={{token: {colorPrimary: '#A63429'}}}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <Routes />
                </AuthProvider>
            </QueryClientProvider>
            </ConfigProvider>
        </ThemeContext.Provider>
    );
}

export default App;
