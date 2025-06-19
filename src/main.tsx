import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppSidebar from "./components/basic/AppSidebar.tsx";
import Navbar from "./components/basic/Navbar.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex">
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <Navbar />
              <App />
            </main>
          </SidebarProvider>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
