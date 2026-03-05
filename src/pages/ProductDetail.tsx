import { ChevronRight, Download, MessageCircle, FileText, Image as ImageIcon } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import structureLam132s from '../images/cau-tao-lam-132s.png';
import imageLam132s from '../images/lam-chan-nang-132s-sun-louver.jpg';

const productDetails: Record<string, any> = {
  'lam-chan-nang-132s-sun-louver': {
    name: 'Lam chắn nắng 132S – Sun Louver',
    category: 'Lam nhôm chắn nắng',
    categorySlug: 'lam-nhom-chan-nang',
    description: 'Giải pháp lam nhôm mặt đứng che nắng hiệu quả – thẩm mỹ – bền vững.',
    longDescription: 'Lam chắn nắng 132S – Sun Louver là hệ lam nhôm mặt đứng cố định, thiết kế dạng thanh chữ Z với độ nghiêng 45 độ, mang lại hiệu quả chắn nắng cao và tạo điểm nhấn kiến trúc mạnh mẽ cho mặt đứng công trình. Hệ thống bao gồm các thanh lam nhôm bản rộng 132mm được lắp đặt vào hệ khung xương thép hoặc nhôm chuyên dụng bằng hệ móc cài (Hanger). Sản phẩm đảm bảo khả năng thông gió tự nhiên, che nắng tối ưu và bền bỉ với thời gian.',
    image: imageLam132s,
    structureImage: structureLam132s,
    features: [
      'Bản lam: Khoảng 132 mm.',
      'Dạng: Thanh nhôm chữ Z, lắp nghiêng khoảng 45° để chắn nắng và vẫn thông gió.',
      'Độ dày: Thường từ 0.6mm – 0.8mm.',
      'Vật liệu: Hợp kim nhôm cao cấp (Aluminum 3003 hoặc tương đương).',
      'Bề mặt: Sơn tĩnh điện hoặc sơn gia nhiệt PE/PVDF bền màu.',
      'Hệ khung xương: Thép hộp hoặc nhôm chuyên dụng kết hợp móc treo (Hanger).',
      'Ưu điểm: Chống cháy, chống nước, không oxy hóa, độ bền cao ngoài trời.'
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Lam chắn nắng 132S Sun Louver' },
      { label: 'Bản rộng lam', value: '132 (mm)' },
      { label: 'Chiều dày vật liệu', value: '0.6 – 0.8 (mm)' },
      { label: 'Góc nghiêng', value: '45 độ' },
      { label: 'Vật liệu chính', value: 'Hợp kim nhôm 3003' },
      { label: 'Lớp sơn phủ', value: 'Sơn PE/PVDF' }
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM B209/B209M-21a' },
      { label: 'Tiêu chuẩn chống cháy', value: 'QCVN 06:2022/BXD' },
      { label: 'Tiêu chuẩn lớp sơn phủ', value: 'ASTM D3359-93' }
    ],
    colors: [
      { code: 'AUS 3311', name: 'Gray silver', hex: '#C7C7C7' },
      { code: 'RAL 7022', name: 'Gray', hex: '#4B4D4B' },
      { code: 'AUS 1004', name: 'Gray', hex: '#373E48' },
      { code: 'AUS 9011', name: 'Black', hex: '#0A0A0A' },
      { code: 'AUS 1567', name: 'Brown', hex: '#4B3621' }
    ],
    applications: 'Sản phẩm lam chắn nắng 132S – Sun Louver được ứng dụng rộng rãi cho: Mặt dựng tòa nhà, cửa sổ, façade, ban công, trung tâm thương mại, sân bay, nhà ga, bệnh viện, trường học và các công trình công cộng khác đòi hỏi tính thẩm mỹ và hiệu quả chắn nắng cao.',
    structureDetails: [
      { label: 'Thanh lam nhôm', value: '132S (dày 0.6mm)' },
      { label: 'Móc treo (Hanger)', value: 'Nhôm/Thép' },
      { label: 'Khung xương', value: 'Thép hộp 40x80mm' },
      { label: 'Khoảng cách lam', value: '200mm (tùy chỉnh)' },
      { label: 'Góc nghiêng', value: '45 độ' }
    ],
    links: {
      quote: 'https://pcfsolution.com.vn/wp-content/uploads/tai-lieu/BANG-BAO-GIA-PCF-SOLUTION-MOI_v5.8.pdf',
      zalo: 'https://zalo.me/0904662600',
      technical: 'https://pcfsolution.com.vn/wp-content/uploads/tai-lieu/132S-Tai-lieu-ky-thuat.pdf',
      autocad: 'https://pcfsolution.com.vn/san-pham/lam-chan-nang-132s-sun-louver/#signup-link'
    }
  },
  'lam-chan-nang-85c-sun-louver': {
    name: 'Lam chắn nắng 85C – Sun Louver',
    category: 'Lam nhôm chắn nắng',
    categorySlug: 'lam-nhom-chan-nang',
    description: 'Giải pháp lam nhôm mặt đứng cố định – Gọn nhẹ, thanh thoát và bền vững.',
    longDescription: 'Lam chắn nắng 85C – Sun Louver là hệ lam nhôm mặt đứng cố định dạng thanh chữ C bản rộng 85mm, được thiết kế với độ nghiêng 45 độ, giúp che chắn nắng hiệu quả mà vẫn giữ được cảm quan nhẹ nhàng, thanh thoát cho mặt đứng công trình. Các thanh lam được liên kết với thanh xương cài C85 chuyên dụng, đảm bảo các lam luôn thẳng hàng và cân đối. Bề mặt sản phẩm được phủ sơn PE gia nhiệt chất lượng cao, bền màu theo thời gian, với nhiều lựa chọn màu sắc phù hợp kiến trúc tổng thể. Lam được sản xuất linh hoạt về chiều dài theo yêu cầu thiết kế của từng dự án.',
    image: 'https://picsum.photos/seed/l2/400/300',
    structureImage: 'https://picsum.photos/seed/structure85c/1200/800',
    features: [
      'Sản xuất từ hợp kim nhôm 3003 H14-H24, dày 0.6 – 0.8mm, có độ bền chắc cao.',
      'Dạng thanh chữ C bản rộng 85mm, thiết kế tinh gọn, phù hợp mặt đứng hiện đại.',
      'Góc nghiêng 45 độ, tối ưu hiệu quả che nắng và tăng tính thông thoáng.',
      'Liên kết bằng khung cài chuyên dụng C85, đảm bảo lắp đặt nhanh chóng, chính xác.',
      'Bề mặt sơn PE gia nhiệt, chống phai màu, đa dạng về màu sắc lựa chọn.',
      'Chống cháy, chống nước, không oxy hóa, bền vững với môi trường ngoài trời.',
      '100% tái chế, thân thiện môi trường, hỗ trợ mục tiêu công trình xanh – tiết kiệm năng lượng.'
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Lam chắn nắng 85C Sun Louver' },
      { label: 'Kích thước quy cách', value: '85 (mm)' },
      { label: 'Chiều dày vật liệu', value: '0.6 – 0.8 (mm)' },
      { label: 'Vật liệu chính', value: 'Nhôm A3003 H14-H24' },
      { label: 'Lớp sơn phủ', value: 'Sơn PE gia nhiệt' },
      { label: 'Hệ khung treo', value: 'Khung cài C85 chuyên dụng' }
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM B209/B209M-21a' },
      { label: 'Tiêu chuẩn chống cháy', value: 'QCVN 06:2022/BXD' },
      { label: 'Tiêu chuẩn lớp sơn phủ', value: 'ASTM D3359-93' }
    ],
    colors: [
      { code: 'AUS 3311', name: 'Gray silver', hex: '#C7C7C7' },
      { code: 'RAL 7022', name: 'Gray', hex: '#4B4D4B' },
      { code: 'AUS 1004', name: 'Gray', hex: '#373E48' },
      { code: 'AUS 9011', name: 'Black', hex: '#0A0A0A' },
      { code: 'AUS 1567', name: 'Brown', hex: '#4B3621' }
    ],
    applications: 'Sản phẩm lam chắn nắng C85 được ứng dụng rộng rãi trong các công trình đòi hỏi thẩm mỹ cao, khả năng chắn nắng hiệu quả và độ bền vượt trội như: Tòa nhà văn phòng, Trung tâm hành chính, Trường học, Bệnh viện, Viện nghiên cứu, Trung tâm thương mại, Trung tâm thể thao, Nhà ga, Sân bay, Bến xe, Khách sạn, resort, trung tâm hội nghị, Trung tâm truyền hình, Viễn thông và Các công trình công cộng khác.',
    structureDetails: [
      { label: 'Thanh lam nhôm', value: '85C (dày 0.6mm)' },
      { label: 'Khung cài', value: 'C85 chuyên dụng' },
      { label: 'Khung xương', value: 'Thép hộp hoặc nhôm' },
      { label: 'Góc nghiêng', value: '45 độ' }
    ],
    links: {
      quote: 'https://pcfsolution.com.vn/wp-content/uploads/tai-lieu/BANG-BAO-GIA-PCF-SOLUTION-MOI_v5.8.pdf',
      zalo: 'https://zalo.me/0904662600',
      technical: 'https://pcfsolution.com.vn/wp-content/uploads/tai-lieu/85C-Sun-Louver-Tai-lieu-ky-thuat.pdf',
      autocad: 'https://pcfsolution.com.vn/san-pham/lam-chan-nang-85c-sun-louver/#signup-link'
    }
  },
  'lam-chan-nang-aeroscreen-sun-louver': {
    name: 'Lam chắn nắng Aeroscreen – Sun Louver',
    category: 'Lam nhôm chắn nắng',
    categorySlug: 'lam-nhom-chan-nang',
    description: 'Giải pháp chắn nắng mặt đứng linh hoạt – hiện đại – thẩm mỹ vượt trội.',
    longDescription: 'Lam chắn nắng Aeroscreen – Sun Louver là hệ lam nhôm mặt đứng dạng cánh cung lớn, với bản rộng từ 200mm đến 400mm, được thiết kế cho cả hai phương án lắp cố định hoặc chuyển động điều chỉnh góc che nắng. Sản phẩm có thể lắp theo chiều ngang hoặc chiều dọc, phù hợp với nhiều phong cách kiến trúc hiện đại. Các thanh lam được liên kết bằng hệ khung và phụ kiện đồng bộ, đảm bảo độ ổn định và tính thẩm mỹ cao. Bề mặt được phủ sơn tĩnh điện, sơn gia nhiệt PE hoặc sơn PVDF, với nhiều màu sắc tùy chọn theo yêu cầu thiết kế. Chiều dài thanh lam có thể tùy biến linh hoạt theo dự án, giúp công trình đạt hiệu quả tối ưu cả về chức năng che nắng, tiết kiệm năng lượng và giá trị thẩm mỹ.',
    image: 'https://picsum.photos/seed/l3/400/300',
    structureImage: 'https://picsum.photos/seed/structureaero/1200/800',
    features: [
      'Sản xuất từ hợp kim nhôm 3003 H14-H24 và nhôm 6063 T5, dày 1.0 – 3.0mm, có độ bền chắc cao.',
      'Dạng lam cánh cung bản lớn (200–400mm), mang lại cảm giác mềm mại, hiện đại cho mặt dựng.',
      'Lắp đặt linh hoạt theo phương ngang hoặc phương đứng, cố định hoặc tích hợp động cơ điều chỉnh góc lam.',
      'Bề mặt phủ sơn cao cấp: Sơn tĩnh điện, PE, hoặc PVDF – bền màu, chống bám bụi và ăn mòn.',
      'Liên kết với khung nhôm và tay đỡ đồng bộ, dễ dàng thi công và bảo trì.',
      'Khả năng chống cháy, chống nước, không oxy hóa, phù hợp lắp ngoài trời trong điều kiện khí hậu khắc nghiệt.',
      'Sản phẩm 100% tái chế, thân thiện với môi trường và bền vững lâu dài.'
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Lam chắn nắng Aeroscreen Sun Louver' },
      { label: 'Kích thước quy cách', value: '200 – 400 (mm)' },
      { label: 'Chiều dày vật liệu', value: '1.0 – 3.0 (mm)' },
      { label: 'Vật liệu chính', value: 'Nhôm 6063 T5' },
      { label: 'Lớp sơn phủ', value: 'Sơn tĩnh điện / PE / PVDF' },
      { label: 'Hệ khung treo', value: 'Khung nhôm và tay đỡ đồng bộ' }
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM B221/B221M-21' },
      { label: 'Tiêu chuẩn chống cháy', value: 'QCVN 06:2022/BXD' },
      { label: 'Tiêu chuẩn lớp sơn phủ', value: 'ASTM D3359-93' }
    ],
    colors: [
      { code: 'AUS 3311', name: 'Gray silver', hex: '#C7C7C7' },
      { code: 'RAL 7022', name: 'Gray', hex: '#4B4D4B' },
      { code: 'AUS 1004', name: 'Gray', hex: '#373E48' },
      { code: 'AUS 9011', name: 'Black', hex: '#0A0A0A' },
      { code: 'AUS 1567', name: 'Brown', hex: '#4B3621' }
    ],
    applications: 'Sản phẩm được ứng dụng các công trình kiến trúc mặt đứng cao cấp, đáp ứng các yêu cầu khắt khe về hiệu quả che nắng, tính thẩm mỹ cao, và chất lượng kỹ thuật vượt trội, bao gồm: Tòa nhà văn phòng cao tầng, Trường học, Bệnh viện, viện nghiên cứu, Trung tâm thương mại, Trung tâm thể thao, Nhà ga, Sân bay, Bến xe liên tỉnh, Khách sạn, Resort, Trung tâm hội nghị, Ngân hàng, Trung tâm truyền hình và viễn thông.',
    structureDetails: [
      { label: 'Thanh lam nhôm', value: 'Aeroscreen (200-400mm)' },
      { label: 'Tay đỡ lam', value: 'Nhôm đúc đồng bộ' },
      { label: 'Khung xương', value: 'Hệ khung nhôm chuyên dụng' },
      { label: 'Góc nghiêng', value: 'Cố định hoặc chuyển động' }
    ],
    links: {
      quote: 'https://pcfsolution.com.vn/wp-content/uploads/tai-lieu/BANG-BAO-GIA-PCF-SOLUTION-MOI_v5.8.pdf',
      zalo: 'https://zalo.me/0904662600',
      technical: 'https://pcfsolution.com.vn/wp-content/uploads/tai-lieu/Aeroscreen-Tai-lieu-ky-thuat.pdf',
      autocad: 'https://pcfsolution.com.vn/san-pham/lam-chan-nang-aeroscreen-sun-louver/#signup-link'
    }
  }
};

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  
  // Default to the 132S product if none is provided or if it's invalid
  const activeProductId = productId && productDetails[productId] ? productId : 'lam-chan-nang-132s-sun-louver';
  const product = productDetails[activeProductId];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#0a192f]">
      {/* Breadcrumb */}
      <div className="bg-[#061121] py-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link to="/" className="hover:text-blue-400 transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/category/${product.categorySlug}`} className="hover:text-blue-400 transition-colors">{product.category}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="grid lg:grid-cols-2 gap-6 mb-10 items-stretch">
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#061121] h-full">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{product.name}</h1>
            <p className="text-lg text-blue-400 font-medium mb-4">{product.description}</p>
            <p className="text-slate-400 leading-snug mb-4">{product.longDescription}</p>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <a href={product.links.quote} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm">
                <Download className="w-4 h-4" />
                NHẬN BÁO GIÁ
              </a>
              <a href={product.links.zalo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0058DD] text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm">
                <MessageCircle className="w-4 h-4" />
                TƯ VẤN QUA ZALO
              </a>
              <a href={product.links.technical} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-4 py-3 rounded-lg font-medium transition-all text-sm">
                <FileText className="w-4 h-4" />
                Tài liệu Kỹ Thuật
              </a>
              <a href={product.links.autocad} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-4 py-3 rounded-lg font-medium transition-all text-sm">
                <ImageIcon className="w-4 h-4" />
                Bản vẽ (Autocad)
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-[#061121] p-4 rounded-xl border border-slate-800">
              <h3 className="text-base font-bold text-white mb-3">Để lại thông tin của bạn để nhận ngay tài liệu và báo giá từ PCF SOLUTION</h3>
              <form className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Người liên hệ *" className="bg-[#0a192f] border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" required />
                  <input type="tel" placeholder="Điện thoại liên hệ *" className="bg-[#0a192f] border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="email" placeholder="Email liên hệ" className="bg-[#0a192f] border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" />
                  <input type="text" placeholder="Tên công ty *" className="bg-[#0a192f] border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" required />
                </div>
                <textarea placeholder="Ghi chú" rows={2} className="bg-[#0a192f] border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"></textarea>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">
                  Gửi thông tin
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Technical Details Sections */}
        <div className="space-y-12">
          {/* Specifications & Standards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8">
              <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4 uppercase">THÔNG TIN: {product.name}</h2>
              <div className="space-y-0 border-t border-slate-800">
                {product.specifications.map((spec: any, index: number) => (
                  <div key={index} className="grid grid-cols-2 py-3 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">{spec.label}</span>
                    <span className="text-white text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8">
              <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4 uppercase">TIÊU CHUẨN: {product.name}</h2>
              <div className="space-y-0 border-t border-slate-800">
                {product.standards.map((std: any, index: number) => (
                  <div key={index} className="grid grid-cols-2 py-3 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">{std.label}</span>
                    <span className="text-white text-sm font-medium">{std.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase">MÀU SẮC: {product.name}</h2>
            <p className="text-slate-400 mb-8">PCF SOLUTION Việt Nam cung cấp nhiều lựa chọn về màu sắc và chất liệu hoàn thiện. Các màu có sẵn theo bảng màu bên dưới, các yêu cầu khác có thể thực hiện theo yêu cầu.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {product.colors.map((color: any, index: number) => (
                <div key={index} className="group cursor-pointer">
                  <div 
                    className="aspect-square rounded-xl mb-3 shadow-lg transition-transform group-hover:scale-105 border border-white/10"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="text-center">
                    <p className="text-white text-sm font-bold">{color.code}</p>
                    <p className="text-slate-500 text-xs">{color.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-slate-500 text-sm">Lưu ý: Tham khảo thêm bảng màu <a href="https://pcfsolution.com.vn/bang-mau-tran-nhom-lam-chan-nang-tam-op-nhom-pcf-solution/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ral Color K5 Classic</a></p>
            </div>
          </div>

          {/* Structure Section */}
          <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase">CẤU TẠO: {product.name}</h2>
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 rounded-xl overflow-hidden bg-white p-4">
                <img 
                  src={product.structureImage} 
                  alt={`Cấu tạo ${product.name}`} 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-[#0a192f] p-6 rounded-xl border border-slate-800">
                  <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    THÀNH PHẦN HỆ THỐNG
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {product.structureDetails?.map((detail: any, index: number) => (
                      <li key={index} className={`flex justify-between ${index !== product.structureDetails.length - 1 ? 'border-b border-slate-800 pb-2' : ''}`}>
                        <span className="text-slate-400">{detail.label}</span>
                        <span className="text-white font-medium">{detail.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-400 text-sm italic">
                  * Hệ thống {product.name} được thiết kế để lắp đặt nhanh chóng, đảm bảo tính thẩm mỹ và khả năng chịu lực tốt trước tác động của gió.
                </p>
              </div>
            </div>
          </div>

          {/* Features & Applications */}
          <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8 md:p-12">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase">ĐẶC ĐIỂM NỔI BẬT: {product.name}</h2>
              <ul className="space-y-4">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase">ỨNG DỤNG: {product.name}</h2>
              <p className="text-slate-400 leading-relaxed">
                {product.applications}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
