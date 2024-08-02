import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { navItems } from "./nav-items";
import { Button } from "@/components/ui/button";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-xl font-bold">My Blog</Link>
            <div className="flex items-center space-x-4">
              <ul className="flex space-x-4">
                {navItems.map(({ title, to, icon }) => (
                  <li key={to}>
                    <Link to={to} className="text-white hover:text-gray-300 flex items-center">
                      {icon}
                      <span className="ml-2">{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-800">
                Login
              </Button>
            </div>
          </div>
        </nav>
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
