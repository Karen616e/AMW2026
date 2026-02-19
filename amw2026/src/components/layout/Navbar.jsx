import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ['Home', 'Call for Papers', 'Organization', 'Past Workshops'];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0 font-bold text-2xl text-blue-700">
        AMW <span className="text-slate-500">2026</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
            {item}
            </a>
        ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
        </button>
        </div>
        </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 animate-fade-in-down">
            {menuItems.map((item) => (
                <a key={item} href="#" className="block px-4 py-2 text-slate-600 hover:bg-blue-50">
                {item}
                </a>
            ))}
            </div>
        )}
        </nav>
    );
};

export default Navbar;
