import { motion } from 'motion/react';
import { ChevronRight, Filter } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { categoriesData } from '../constants';
import tranNhomClipin from '../images/tran-nhom-clip-in.png';
import tranNhom from '../images/tran-nhom.png';
import lamChanNang from '../images/lam-chan-nang.png';
import tamOpNhom from '../images/tam-op-nhom.png';
import tranSoiKhoang from '../images/tran-soi-khoang.png';

const categoryImages: Record<string, string> = {
  'tran-nhom': tranNhom,
  'lam-nhom-chan-nang': lamChanNang,
  'tam-op-nhom': tamOpNhom,
  'tran-soi-khoang': tranSoiKhoang
};

const productsData: Record<string, { id: string; name: string; image: string }[]> = {
  'tran-nhom': [  
    { id: 'tran-nhom-clip-in', name: 'Trần nhôm Clip-in', image: tranNhomClipin },
    { id: 'tran-nhom-lay-in', name: 'Trần nhôm Lay-in', image: 'https://picsum.photos/seed/t2/400/300' },
    { id: 'tran-nhom-cell-caro', name: 'Trần nhôm Cell (Caro)', image: 'https://picsum.photos/seed/t3/400/300' },
  ],
  'lam-nhom-chan-nang': [
    { id: 'lam-chan-nang-132s-sun-louver', name: 'Lam chắn nắng 132S – Sun Louver', image: 'https://picsum.photos/seed/l1/400/300' },
    { id: 'lam-chan-nang-85c-sun-louver', name: 'Lam chắn nắng 85C – Sun Louver', image: 'https://picsum.photos/seed/l2/400/300' },
    { id: 'lam-chan-nang-aeroscreen-sun-louver', name: 'Lam chắn nắng Aeroscreen – Sun Louver', image: 'https://picsum.photos/seed/l3/400/300' },
    { id: 'lam-chan-nang-asc-p150-sun-louver', name: 'Lam chắn nắng ASC P150 – Sun Louver', image: 'https://picsum.photos/seed/l4/400/300' },
    { id: 'lam-chan-nang-az-sun-louver', name: 'Lam chắn nắng AZ – Sun Louver', image: 'https://picsum.photos/seed/l5/400/300' },
    { id: 'lam-chan-nang-dau-dan-aerobrise', name: 'Lam chắn nắng đầu đạn Aerobrise', image: 'https://picsum.photos/seed/l6/400/300' },
    { id: 'lam-chan-nang-hinh-thoi-aerofoil', name: 'Lam chắn nắng hình thoi Aerofoil', image: 'https://picsum.photos/seed/l7/400/300' },
    { id: 'lam-chan-nang-hop-chu-nhat', name: 'Lam chắn nắng hộp chữ nhật', image: 'https://picsum.photos/seed/l8/400/300' },
    { id: 'lam-chan-nang-la-lieu', name: 'Lam chắn nắng lá liễu', image: 'https://picsum.photos/seed/l9/400/300' },
    { id: 'lam-nhom-chan-nang-85r', name: 'Lam nhôm chắn nắng 85R', image: 'https://picsum.photos/seed/l10/400/300' },
  ],
  'tam-op-nhom': [
    { id: 'tam-op-nhom-dac-solid-panel', name: 'Tấm ốp nhôm đặc Solid Panel', image: 'https://picsum.photos/seed/o1/400/300' },
    { id: 'tam-op-nhom-duc-lo', name: 'Tấm ốp nhôm đục lỗ', image: 'https://picsum.photos/seed/o2/400/300' },
  ],
  'tran-soi-khoang': [
    { id: 'tran-soi-khoang-tieu-am', name: 'Trần sợi khoáng tiêu âm', image: 'https://picsum.photos/seed/s1/400/300' },
    { id: 'tran-soi-khoang-chong-am', name: 'Trần sợi khoáng chống ẩm', image: 'https://picsum.photos/seed/s2/400/300' },
  ]
};

export default function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // If no categoryId is provided, show all categories
  if (!categoryId) {
    return (
      <div className="pt-24 pb-24 min-h-screen bg-[#0a192f]">
        <div className="bg-[#061121] py-12 mb-12 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
              <Link to="/" className="hover:text-blue-400 transition-colors">Trang chủ</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Danh mục sản phẩm</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Tất cả danh mục</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoriesData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/category/${category.id}`} className="block bg-[#061121] rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={categoryImages[category.id] || tranNhom} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">{category.count} sản phẩm</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const activeCategoryId = categoryId && productsData[categoryId] ? categoryId : 'lam-nhom-chan-nang';
  const activeCategory = categoriesData.find(c => c.id === activeCategoryId) || categoriesData[1];
  const products = productsData[activeCategoryId] || [];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#0a192f]">
      {/* Page Header */}
      <div className="bg-[#061121] py-12 mb-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link to="/" className="hover:text-blue-400 transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300">Sản phẩm</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{activeCategory.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{activeCategory.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-[#061121] rounded-xl p-6 border border-slate-800 sticky top-32">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-400" />
                Danh mục sản phẩm
              </h3>
              <ul className="space-y-2">
                {categoriesData.map((category) => {
                  const isActive = category.id === activeCategoryId;
                  return (
                    <li key={category.id}>
                      <Link 
                        to={`/category/${category.id}`}
                        className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-blue-600/20 text-blue-400 font-medium border border-blue-500/30' 
                            : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${isActive ? 'bg-blue-600/30 text-blue-300' : 'bg-slate-800 text-slate-500'}`}>
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <p className="text-slate-400">Hiển thị 1–{products.length} của {products.length} kết quả</p>
              <select className="bg-[#061121] border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none">
                <option>Thứ tự mặc định</option>
                <option>Mới nhất</option>
                <option>Giá: Thấp đến cao</option>
                <option>Giá: Cao đến thấp</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={`${activeCategoryId}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[#061121] rounded-xl overflow-hidden border border-slate-800 group hover:border-blue-500/50 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#0a192f]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-6 flex flex-col h-[180px]">
                    <Link to={`/product/${product.id}`} className="text-lg font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {product.name}
                    </Link>
                    <div className="mt-auto">
                      <Link to={`/product/${product.id}`} className="inline-flex items-center justify-center w-full gap-2 bg-slate-800 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm uppercase tracking-wider">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
