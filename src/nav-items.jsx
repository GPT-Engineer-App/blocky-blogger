import { Home, PenTool } from "lucide-react";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "New Post",
    to: "/new-post",
    icon: <PenTool className="h-4 w-4" />,
    page: <NewPost />,
  },
];
