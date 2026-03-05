import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { categoriesData } from '../constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!dropdownOpen) {
      return;
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current) {
        return;
      }
      if (!dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-[#0a192f]/90 backdrop-blur-md py-4 shadow-lg shadow-blue-900/20' : 'bg-transparent py-6'}`}>
        <div className="w-full px-8 xl:px-12">
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-500 rounded-md flex items-center justify-center">
                <span className="text-[#0a192f] font-black text-xl">P</span>
              </div>
              <div className="leading-none translate-y-[1px]">
                <div className="text-white">PCF SOLUTION</div>
                <div className="text-[9px] text-slate-400 uppercase tracking-[0.28em] mt-1">Architectural Product</div>
              </div>
            </Link>
            
            <div className="flex-1 flex justify-center gap-7 text-[13px] font-semibold uppercase tracking-[0.18em] items-center text-slate-300">
              <Link to="/" className="hover:text-blue-400 transition-colors">Trang chủ</Link>
              <Link to={{ pathname: '/', hash: '#about' }} className="hover:text-blue-400 transition-colors">Giới thiệu</Link>
              
              {/* Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((open) => !open)}
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  SẢN PHẨM
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-[#0a192f] border border-slate-800 rounded-xl mt-2 py-4 shadow-2xl shadow-black/50 overflow-hidden">
                    <Link
                      to="/category"
                      className="block px-6 py-3 text-slate-300 hover:bg-blue-600/20 hover:text-blue-400 transition-colors font-medium"
                    >
                      Tất cả danh mục
                    </Link>
                    {categoriesData.map((category) => (
                      <Link 
                        key={category.id}
                        to={`/category/${category.id}`}
                        className="block px-6 py-3 text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            <Link to={{ pathname: '/', hash: '#contact' }} className="text-slate-300 hover:text-blue-400 transition-colors">Liên hệ</Link>
            </div>

            <div className="flex items-center gap-4 justify-end">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Tìm kiếm PCF"
                  className="w-52 rounded-full bg-white/5 border border-slate-700 text-sm text-slate-200 placeholder:text-slate-500 pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">⌕</span>
              </div>
              <button className="w-9 h-9 rounded-full bg-red-600 text-white text-xs font-bold">VN</button>
            </div>
          </div>

          <div className="md:hidden flex justify-between items-center">
            <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-500 rounded-md flex items-center justify-center">
                <span className="text-[#0a192f] font-black text-xl">P</span>
              </div>
              <div className="leading-none translate-y-[1px]">
                <div className="text-white">PCF SOLUTION</div>
                <div className="text-[9px] text-slate-400 uppercase tracking-[0.28em] mt-1">Architectural Product</div>
              </div>
            </Link>
            <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a192f] pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-xl font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-blue-400 transition-colors">Trang chủ</Link>
            <Link to={{ pathname: '/', hash: '#about' }} onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-blue-400 transition-colors">Giới thiệu</Link>
            
            <div className="flex flex-col gap-4">
              <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">SẢN PHẨM</div>
              {categoriesData.map((category) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-blue-400 transition-colors pl-4"
                >
                  {category.name}
                </Link>
              ))}
              <Link 
                to="/category" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-blue-400 hover:text-blue-300 transition-colors pl-4 font-bold"
              >
                Tất cả danh mục
              </Link>
            </div>

            <Link to={{ pathname: '/', hash: '#contact' }} onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-blue-400 transition-colors">Liên hệ</Link>
          </div>
        </div>
      )}
    </>
  );
}
