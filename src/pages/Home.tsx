import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import pcfAbout from '../images/about.png';
import tranNhom from '../images/tran-nhom.png';
import lamChanNang from '../images/lam-chan-nang.png';
import tamOpNhom from '../images/tam-op-nhom.png';
import tranSoiKhoang from '../images/tran-soi-khoang.png';

const products = [
  {
    id: 'tran-nhom',
    title: 'Trần nhôm',
    subtitle: 'ALUMINUM CEILING',
    description: 'Trần nhôm PCF SOLUTION (Aluminum Ceiling) là dòng trần nhôm cao cấp được sản xuất từ hợp kim nhôm chất lượng cao, nổi bật với độ bền, tính thẩm mỹ và khả năng chống oxy hóa vượt trội. Bề mặt được xử lý sơn tĩnh điện hoặc phủ lớp PE/PVDF, giúp sản phẩm luôn bền màu, chống ăn mòn và chống ẩm mốc, thích ứng tốt với nhiều điều kiện môi trường.',
    image: tranNhom,
  },
  {
    id: 'lam-nhom-chan-nang',
    title: 'Lam chắn nắng',
    subtitle: 'SUN LOUVER',
    description: 'Lam nhôm chắn nắng PCF SOLUTION (Aluminum Sun Louver) là hệ thanh lam được sản xuất từ hợp kim nhôm cao cấp, nổi bật với độ bền vượt trội, tính thẩm mỹ tinh tế và khả năng chống oxy hóa ưu việt. Bề mặt sản phẩm được xử lý sơn tĩnh điện hoặc phủ lớp PE/PVDF, giúp lam luôn bền màu, chống ăn mòn và thích ứng với nhiều điều kiện môi trường.',
    image: lamChanNang,
  },
  {
    id: 'tam-op-nhom',
    title: 'Tấm ốp nhôm',
    subtitle: 'ALUMINUM FACADE',
    description: 'Tấm ốp nhôm mặt dựng PCF SOLUTION (Aluminum Solid Panel) được sản xuất từ hợp kim nhôm cao cấp 3003 H24, là dòng tấm ốp nhôm đặc có độ bền cao nhưng trọng lượng nhẹ, mang đến giải pháp hoàn thiện kiến trúc hiện đại, sang trọng. Bề mặt được xử lý sơn tĩnh điện hoặc phủ lớp PE/PVDF, giúp tấm ốp chống ăn mòn, chống tia UV và bền màu vượt trội trong mọi điều kiện thời tiết.',
    image: tamOpNhom,
  },
  {
    id: 'tran-soi-khoang',
    title: 'Trần sợi khoáng',
    subtitle: 'MINERAL FIBER CEILING',
    description: 'Trần sợi khoáng PCF SOLUTION (Mineral Fiber Ceiling sử dụng hệ khung trần thả T-shaped, giữ chắc hai gờ đối diện của tấm vào khung chính, giúp bề mặt trần luôn thẳng hàng và cân bằng. Với trọng lượng nhẹ, khả năng cách âm – tiêu âm vượt trội, giảm nhiệt và kháng lửa hiệu quả, đây là giải pháp tối ưu cho không gian hiện đại.',
    image: tranSoiKhoang,
  }
];

const projects = [
  { name: 'Nhà ga T3 sân bay Tân Sơn Nhất', image: 'https://picsum.photos/seed/p1/600/400' },
  { name: 'Bảo tàng lịch sử quân sự Việt Nam', image: 'https://picsum.photos/seed/p2/600/400' },
  { name: 'Trụ sở tập đoàn Viettel', image: 'https://picsum.photos/seed/p3/600/400' },
  { name: 'Sân bay quốc tế Cam Ranh', image: 'https://picsum.photos/seed/p4/600/400' },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/80 via-[#0a192f]/50 to-[#0a192f] z-10" />
          <img 
            src="https://picsum.photos/seed/architecture/1920/1080" 
            alt="Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Kiến tạo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Không gian hiện đại
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Thương hiệu dẫn đầu tại Việt Nam trong lĩnh vực sản xuất và cung cấp các giải pháp Trần nhôm, Lam chắn nắng và vật liệu hoàn thiện kiến trúc.
            </p>
            <a href="#products" className="inline-flex group items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all hover:gap-5">
              Khám phá ngay
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0a192f] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Về chúng tôi</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">PCF SOLUTIONS</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Chúng tôi tập trung vào các giải pháp trần nhôm, lam chắn nắng và vật liệu hoàn thiện kiến trúc bằng kim loại tấm, với định hướng thiết kế tinh gọn, bền vững và tối ưu hiệu năng cho công trình.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Từ nền tảng pháp lý minh bạch đến quy trình vận hành chuẩn hóa, PCF SOLUTIONS theo đuổi trải nghiệm dịch vụ nhanh, rõ ràng và đáng tin cậy cho đối tác, nhà thầu và chủ đầu tư.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="rounded-xl border border-slate-800 bg-[#061121] p-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Tên doanh nghiệp (VN)</div>
                  <div className="text-white font-semibold">CÔNG TY TNHH PCF SOLUTIONS</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#061121] p-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Tên doanh nghiệp (EN)</div>
                  <div className="text-white font-semibold">PCF SOLUTIONS COMPANY LIMITED</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#061121] p-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Tên viết tắt</div>
                  <div className="text-white font-semibold">PCF SOLUTIONS CO., LTD</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#061121] p-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Thời hạn hoạt động</div>
                  <div className="text-white font-semibold">50 năm từ ngày cấp GCN đăng ký kinh doanh</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-6">
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider mb-2">Trụ sở chính</div>
                  <div className="text-white font-medium">
                    Số 13B Đường số 12, Phường An Khánh, TP. Hồ Chí Minh, Việt Nam
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider mb-2">Lĩnh vực</div>
                  <div className="text-white font-medium">
                    Trần nhôm, lam chắn nắng, tấm ốp nhôm & vật liệu hoàn thiện kiến trúc
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img 
                  src={pcfAbout} 
                  alt="PCF SOLUTION Factory" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 border border-slate-700 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-[#061121]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Giải pháp của chúng tôi</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Sản phẩm chính</h3>
          </motion.div>

          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
              >
                <div className="w-full md:w-1/2 relative group">
                  <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-4 left-4 md:-left-8 md:-top-8 text-6xl md:text-8xl font-black text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                    {product.id}
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-3">{product.subtitle}</div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">{product.title}</h4>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <Link to={`/product/${product.id}`} className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group">
                    Xem chi tiết
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link to="/category" className="inline-flex items-center gap-3 bg-transparent border border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white px-10 py-4 rounded-full font-medium transition-all group">
              Xem tất cả sản phẩm
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Công trình tiêu biểu</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Dự án nổi bật</h3>
            </motion.div>
            <a href="#" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors border-b border-slate-800 pb-1 group">
              Xem tất cả dự án
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl aspect-video mb-6 relative">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">Dự án</div>
                <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
