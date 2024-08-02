import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">友情链接</h3>
            <ul className="space-y-2">
              <li><a href="https://reactjs.org" className="hover:text-gray-300">React</a></li>
              <li><a href="https://tailwindcss.com" className="hover:text-gray-300">Tailwind CSS</a></li>
              <li><a href="https://ui.shadcn.com" className="hover:text-gray-300">shadcn/ui</a></li>
            </ul>
          </div>
          <div className="flex items-center">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300">
              <Github className="mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
