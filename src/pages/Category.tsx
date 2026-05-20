import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { categoriesData } from '../constants';
import tranNhom from '../images/tran-nhom.png';
import tamOpNhom from '../images/tam-op-nhom.png';
import vachTamOpNhom from '../images/vach-tam-op-nhom/z7842251411561_8bd91df65432bf7e240e537fbfd4e50d.jpg';
import tranNhomCaro from '../images/trannhom/caro/Trần Nhôm Caro.jpg';
import tranNhomClipinTile from '../images/trannhom/clip-in/tran-nhom-clip-in-tile-2-768x467.jpg';
import tranNhomMultiBShaped from '../images/trannhom/multib-shaped/z7656426610924_780e960b15bd2ac57d08d6ad05508adb.jpg';
import sanGo from '../images/san/sango.jpg';
import sanEpoxy from '../images/san/thicongsanepoxy.jpg';
import thamTraiSan from '../images/san/Thi-cong-tham-trai-san-van-phong-.webp';
import sanGoComposite from '../images/san/Thiet-ke-khong-ten-1.jpg';

const categoryImages: Record<string, string> = {
  'san': sanGo,
  'tran-nhom': tranNhom,
  'vach-tam-op-nhom': vachTamOpNhom,
};

const categoryDescriptions: Record<string, string> = {
  'san': 'Giải pháp sàn công nghiệp và dân dụng cao cấp, bền vững cho mọi không gian.',
  'tran-nhom': 'Trần nhôm cao cấp từ hợp kim nhôm chất lượng, chống oxy hóa và bền màu vượt trội.',
  'vach-tam-op-nhom': 'Tấm ốp nhôm hoàn thiện kiến trúc hiện đại, sang trọng và bền đẹp theo thời gian.',
};

const productsData: Record<string, { id: string; name: string; image: string; subtitle?: string }[]> = {
  'san': [
    { id: 'san-go-ngoai-troi', name: 'Sàn gỗ ngoài trời', subtitle: 'OUTDOOR WOOD FLOORING', image: sanGo },
    { id: 'san-epoxy', name: 'Sàn Epoxy', subtitle: 'EPOXY FLOORING', image: sanEpoxy },
    { id: 'tham-trai-san-van-phong', name: 'Thảm trải sàn văn phòng', subtitle: 'OFFICE CARPET', image: thamTraiSan },
    { id: 'san-go-composite', name: 'Sàn gỗ Composite', subtitle: 'COMPOSITE WOOD FLOORING', image: sanGoComposite },
  ],
  'tran-nhom': [
    { id: 'tran-nhom-cell-caro', name: 'Trần nhôm Cell Caro', subtitle: 'CELL CARO CEILING', image: tranNhomCaro },
    { id: 'tran-nhom-clip-in-tile', name: 'Trần nhôm Clip-in Tile', subtitle: 'CLIP-IN TILE CEILING', image: tranNhomClipinTile },
    { id: 'tran-nhom-multi-b-shaped', name: 'Trần nhôm Multi B-Shaped', subtitle: 'MULTI B-SHAPED CEILING', image: tranNhomMultiBShaped },
  ],
  'vach-tam-op-nhom': [
    { id: 'tam-op-nhom-duc-lo', name: 'Tấm ốp nhôm đục lỗ trang trí', subtitle: 'PERFORATED ALUMINUM CLADDING', image: vachTamOpNhom },
  ],
};

export default function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();

  if (!categoryId) {
    return (
      <div className="pt-24 pb-24 min-h-screen bg-[#0a192f]">
        <div className="bg-[#061121] py-16 mb-16 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link to="/" className="hover:text-blue-400 transition-colors">Trang chủ</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Danh mục sản phẩm</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Tất cả danh mục</h1>
            <p className="text-slate-400 text-lg">Khám phá các giải pháp vật liệu hoàn thiện kiến trúc của PCF SOLUTIONS</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoriesData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/category/${category.id}`} className="block rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-2 bg-[#061121]">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={categoryImages[category.id] || tranNhom}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061121] via-[#061121]/30 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {category.count} sản phẩm
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{category.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{categoryDescriptions[category.id]}</p>
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                      Xem sản phẩm
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

  const activeCategoryId = categoryId && productsData[categoryId] ? categoryId : 'tran-nhom';
  const activeCategory = categoriesData.find(c => c.id === activeCategoryId) || categoriesData[0];
  const products = productsData[activeCategoryId] || [];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#0a192f]">
      {/* Page Header with category banner */}
      <div className="relative bg-[#061121] py-20 mb-16 border-y border-slate-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${categoryImages[activeCategoryId] || tranNhom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061121] via-[#061121]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/category" className="hover:text-blue-400 transition-colors">Sản phẩm</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{activeCategory.name}</span>
          </div>
          <div className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-3">Giải pháp của chúng tôi</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{activeCategory.name}</h1>
          <p className="text-slate-400 text-lg max-w-xl">{categoryDescriptions[activeCategoryId]}</p>
        </div>
      </div>

      {/* Category nav tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3">
          {categoriesData.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-slate-700 text-slate-400 hover:border-blue-500/50 hover:text-white'
                }`}
              >
                {category.name}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-blue-500/50' : 'bg-slate-800'}`}>
                  {category.count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={`${activeCategoryId}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block bg-[#061121] rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061121]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  {product.subtitle && (
                    <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">{product.subtitle}</div>
                  )}
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-snug">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-blue-400 transition-colors text-sm font-medium">
                    Xem chi tiết
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
