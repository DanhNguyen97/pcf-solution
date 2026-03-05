import { Link } from 'react-router-dom';
import { categoriesData } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-[#040d1a] pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center">
                <span className="text-[#040d1a] font-black text-xl">P</span>
              </div>
              PCF SOLUTION
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
              <li>Trụ sở Hà Nội</li>
              <li>VPĐD Hồ Chí Minh</li>
              <li>Nhà máy Hưng Yên</li>
              <li>Nhà máy Bắc Ninh</li>
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
