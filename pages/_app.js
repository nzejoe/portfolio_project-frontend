import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "@/components/reuseable/MainLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    // Create a client
    const queryClient = new QueryClient();

    // set axios default baseURL
    axios.defaults.baseURL = "https://safekart.onrender.com";
    // axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.withCredentials = true;
    return (
        <QueryClientProvider client={queryClient}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </QueryClientProvider>
    );
}
