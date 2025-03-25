
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary-600">SimpleWebStack</span>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <NavLinks />
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLinks setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </Transition>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <a
        href="#"
        className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
      >
        Home
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
      >
        About
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
      >
        Contact
      </a>
    </>
  );
}

function MobileNavLinks({ setIsMenuOpen }) {
  return (
    <>
      <a
        href="#"
        className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#"
        className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
        onClick={() => setIsMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#"
        className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </a>
    </>
  );
}
