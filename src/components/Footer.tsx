import { Link } from 'react-router-dom';
import { categoriesData } from '../constants';
import logoWhite from '../images/logo/logo_nobackground.png';

export default function Footer() {
  return (
    <footer className="bg-[#040d1a] pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoWhite} alt="PCF SOLUTION" className="h-18 w-auto object-contain" />
              <div className="leading-none">
                <div className="text-white font-bold text-xl">PCF Solutions</div>
                <div className="text-[9px] text-slate-400 uppercase tracking-[0.28em] mt-1">Architectural Product</div>
              </div>
            </Link>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Thương hiệu dẫn đầu tại Việt Nam trong lĩnh vực sản xuất và cung cấp các giải pháp Trần nhôm, Lam chắn nắng và vật liệu hoàn thiện kiến trúc hiện đại.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Sản phẩm</h5>
            <ul className="space-y-4 text-slate-400">
              {categoriesData.map((category) => (
                <li key={category.id}>
                  <Link to={`/category/${category.id}`} className="hover:text-blue-400 transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Liên hệ</h5>
            <ul className="space-y-4 text-slate-400">
              <li className="text-xs text-slate-500 uppercase tracking-wider">Nhân viên Sale</li>
              <li>
                <a href="tel:0932786216" className="hover:text-blue-400 transition-colors">0932 786 216</a>
              </li>
              <li>VPĐD Hồ Chí Minh</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} PCF SOLUTION Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
