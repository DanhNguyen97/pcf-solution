import { ChevronRight, Phone } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import structureLam132s from '../images/cau-tao-lam-132s.png';
import tranNhomClipin from '../images/tran-nhom-clip-in.png';
import imageLam132s from '../images/lam-chan-nang-132s-sun-louver.jpg';
import tranNhomClipinCauTao from '../images/tran-nhom-clip-in-cau-tao.png';
import tranNhomCaro from '../images/trannhom/caro/Trần Nhôm Caro.jpg';
import tranNhomCaroStructure from '../images/trannhom/caro/tran-nhom-cell-caro-17-768x467.jpg';
import tranNhomClipinTile from '../images/trannhom/clip-in/tran-nhom-clip-in-tile-2-768x467.jpg';
import tranNhomClipinTileStructure from '../images/trannhom/clip-in/tran-nhom-clip-in-tile-12-768x467.jpg';
import tranNhomMultiBShaped from '../images/trannhom/multib-shaped/z7656426610924_780e960b15bd2ac57d08d6ad05508adb.jpg';
import tranNhomMultiBShapedStructure from '../images/trannhom/multib-shaped/z7656426617170_3077c6f4b9f3e9464414fb9fdf494d65.jpg';
import caroGal1 from '../images/trannhom/caro/tran-nhom-cell-caro-2-768x467.png';
import caroGal2 from '../images/trannhom/caro/tran-nhom-cell-caro-6-768x467.jpg';
import caroGal3 from '../images/trannhom/caro/z7842248658915_c35356659883c5acefba4605dd39356d.jpg';
import caroGal4 from '../images/trannhom/caro/z7842248659149_1621938fcc4ddd2132ff0ba2230ebfa1.jpg';
import caroGal5 from '../images/trannhom/caro/z7842248671308_eab116e291dbd180a0bf5513228ed718.jpg';
import clipGal1 from '../images/trannhom/clip-in/tran-nhom-clip-in-tile-13-768x467.jpg';
import clipGal2 from '../images/trannhom/clip-in/z7604691864039_f9072e32365d0d046f1bdcfdd7fa1fa7.jpg';
import clipGal3 from '../images/trannhom/clip-in/z7604691875774_5fca80ef92daf0d95b2adc8e46ec891a.jpg';
import clipGal4 from '../images/trannhom/clip-in/z7604691888746_e5569947b2d7892232aff1d407f11017.jpg';
import clipGal5 from '../images/trannhom/clip-in/z7604691909394_c0f2f3f95080b19caaf69fdd44549d62.jpg';
import clipGal6 from '../images/trannhom/clip-in/z7604691909563_e6340aa37d9b8b9f4a6278b9f2ef233a.jpg';
import clipGal7 from '../images/trannhom/clip-in/z7604691926475_3eb43baf155229ecd3c4ea5d18cd2dc2.jpg';
import clipGal8 from '../images/trannhom/clip-in/z7604691926700_f0ec99cd6287c671a0282d41c8f2321f.jpg';
import multiGal1 from '../images/trannhom/multib-shaped/z7656426618889_717535c8e53ea8e5fda5b9476a3cb608.jpg';
import multiGal2 from '../images/trannhom/multib-shaped/z7656426634843_30cecd91056750a2a5f861a5b8153e2a.jpg';
import multiGal3 from '../images/trannhom/multib-shaped/z7656426636111_ad0924f02c932e1629ca1d5825fa3b28.jpg';
import multiGal4 from '../images/trannhom/multib-shaped/z7656426636330_bc18269d248ee75c40440e816945583c.jpg';
import vachMain from '../images/vach-tam-op-nhom/z7842251411561_8bd91df65432bf7e240e537fbfd4e50d.jpg';
import vachStructure from '../images/vach-tam-op-nhom/z7842251394873_0ed012cb8c3dd712624249926424a289.jpg';
import vachGal1 from '../images/vach-tam-op-nhom/z7842251408951_903e6e5e5ac606d6df2086366fa2b8e5.jpg';
import vachGal2 from '../images/vach-tam-op-nhom/z7842251430227_e4da556614c591becdafc531c048e6a7.jpg';
import vachGal3 from '../images/vach-tam-op-nhom/z7842251430486_2037c4a4f01ea805b187e15bccb58f6d.jpg';
import vachGal4 from '../images/vach-tam-op-nhom/z7842251438659_8ab458fdccab5fb5a5074aa2e463854b.jpg';
import vachGal5 from '../images/vach-tam-op-nhom/z7842251449194_9507b1ba0f21eb69d3a27e63a56dfbae.jpg';
import vachGal6 from '../images/vach-tam-op-nhom/z7842251451012_94bb0d326f4fa1b347f4d9d15262156e.jpg';
import vachGal7 from '../images/vach-tam-op-nhom/z7842251462097_5a42afe8f16bfc76eb73c8867bf73823.jpg';
import vachGal8 from '../images/vach-tam-op-nhom/z7842251471664_a661b474b1f8a3488cfe3c9db48d4f3d.jpg';
import vachGal9 from '../images/vach-tam-op-nhom/z7842251482567_bd5e5ee080b1f8ad842bab31fc4632f7.jpg';
import sanGo from '../images/san/sango.jpg';
import sanEpoxy from '../images/san/thicongsanepoxy.jpg';
import thamTraiSan from '../images/san/Thi-cong-tham-trai-san-van-phong-.webp';
import sanGoComposite from '../images/san/Thiet-ke-khong-ten-1.jpg';

const productDetails: Record<string, any> = {
  'tam-op-nhom-duc-lo': {
    name: 'Tấm ốp nhôm đục lỗ trang trí',
    category: 'Vách Tấm Ốp Nhôm',
    categorySlug: 'vach-tam-op-nhom',
    description: 'Tấm ốp nhôm đục lỗ CNC – điểm nhấn kiến trúc độc đáo cho mặt đứng công trình.',
    longDescription: 'Tấm ốp nhôm đục lỗ trang trí PCF SOLUTION (Perforated Aluminum Panel) là dòng tấm ốp mặt đứng được gia công đục lỗ CNC với độ chính xác cao, tạo ra các họa tiết hoa văn hoặc hình ảnh nghệ thuật trên bề mặt nhôm. Sản phẩm kết hợp hoàn hảo giữa chức năng che nắng, thông gió và tính thẩm mỹ kiến trúc cao cấp. Ban ngày tạo hiệu ứng ánh sáng độc đáo, ban đêm khi có đèn chiếu từ bên trong tạo nên vẻ đẹp lung linh đặc trưng cho công trình.',
    image: vachMain,
    structureImage: vachStructure,
    features: [
      'Đục lỗ CNC độ chính xác cao, họa tiết đa dạng theo yêu cầu thiết kế riêng.',
      'Vật liệu nhôm nguyên chất 3003/5052, nhẹ, bền và không gỉ sét.',
      'Bề mặt sơn tĩnh điện hoặc PVDF bền màu, chống tia UV ngoài trời.',
      'Hiệu ứng ánh sáng đặc sắc – tạo điểm nhấn nghệ thuật ngày lẫn đêm.',
      'Chức năng che nắng và thông thoáng tự nhiên qua các lỗ đục.',
      'Kích thước tấm linh hoạt, lắp đặt bằng hệ khung ẩn không lộ điểm bắt.',
      '100% tái chế, đạt tiêu chuẩn công trình xanh.',
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Tấm ốp nhôm đục lỗ trang trí' },
      { label: 'Kích thước tấm', value: 'Theo yêu cầu (tối đa 1500×4000mm)' },
      { label: 'Chiều dày tấm', value: '2.0 – 4.0 (mm)' },
      { label: 'Vật liệu', value: 'Hợp kim nhôm 3003 / 5052' },
      { label: 'Gia công lỗ', value: 'CNC Laser / CNC Punching' },
      { label: 'Bề mặt hoàn thiện', value: 'Sơn tĩnh điện / PVDF / Anodized' },
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM B209/B209M' },
      { label: 'Tiêu chuẩn sơn phủ', value: 'ASTM D3359 / AAMA 2605' },
      { label: 'Chống cháy', value: 'QCVN 06:2022/BXD' },
      { label: 'Chịu tải gió', value: 'TCVN 2737:2023' },
    ],
    colors: [
      { code: 'RAL 9016', name: 'White', hex: '#F6F6F6' },
      { code: 'AUS 3311', name: 'Gray silver', hex: '#C7C7C7' },
      { code: 'RAL 8004', name: 'Copper brown', hex: '#8E402A' },
      { code: 'AUS 9011', name: 'Black', hex: '#0A0A0A' },
      { code: 'RAL 1014', name: 'Ivory', hex: '#D2B070' },
      { code: 'Custom', name: 'Theo yêu cầu', hex: '#6B7B8D' },
    ],
    applications: 'Tấm ốp nhôm đục lỗ trang trí được ứng dụng cho mặt đứng tòa nhà văn phòng, khách sạn, trung tâm thương mại, nhà hàng, showroom, bảo tàng, nhà ga, sân bay và các công trình kiến trúc yêu cầu điểm nhấn thẩm mỹ mạnh mẽ, độc đáo.',
    structureDetails: [
      { label: 'Tấm nhôm đục lỗ', value: 'Dày 2.0–4.0mm' },
      { label: 'Hệ khung phụ', value: 'Nhôm U-channel / L-bracket' },
      { label: 'Hệ khung chính', value: 'Thép hộp hoặc nhôm chuyên dụng' },
      { label: 'Kết nối tấm', value: 'Bắt vít ẩn hoặc kẹp clip' },
      { label: 'Khe hở tấm', value: '8–15mm (theo thiết kế)' },
    ],
    gallery: [vachGal1, vachGal2, vachGal3, vachGal4, vachGal5, vachGal6, vachGal7, vachGal8, vachGal9],
    links: {
      quote: 'https://pcfsolution.com.vn',
      zalo: 'https://zalo.me/0932786216',
    },
  },
  'tran-nhom-cell-caro': {
    name: 'Trần nhôm Cell Caro',
    category: 'Trần Nhôm',
    categorySlug: 'tran-nhom',
    description: 'Trần lưới ô vuông hở – thông thoáng, thẩm mỹ và kiểm soát âm thanh hiệu quả.',
    longDescription: 'Trần nhôm Cell Caro PCF SOLUTION là hệ trần lưới dạng ô vuông hở, được lắp ráp từ các thanh nhôm ngang – dọc tạo thành lưới đều, cho phép không khí và ánh sáng lưu thông tự nhiên. Hệ thống che giấu hiệu quả các đường kỹ thuật phía trên đồng thời tạo điểm nhấn kiến trúc độc đáo. Phù hợp cho các không gian rộng lớn, yêu cầu thông thoáng và tính thẩm mỹ cao.',
    image: tranNhomCaro,
    structureImage: tranNhomCaroStructure,
    features: [
      'Cấu trúc lưới ô vuông hở, cho phép thông gió và ánh sáng tự nhiên xuyên qua.',
      'Che giấu hiệu quả hệ thống kỹ thuật, điện, điều hòa, PCCC phía trên trần.',
      'Kích thước ô lưới đa dạng: 50×50mm, 100×100mm, 150×150mm theo yêu cầu.',
      'Vật liệu hợp kim nhôm cao cấp, nhẹ, bền và chống ăn mòn vượt trội.',
      'Bề mặt sơn tĩnh điện đa màu, không phai màu theo thời gian.',
      'Dễ tháo lắp từng module để tiếp cận hệ kỹ thuật khi bảo trì.',
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Trần nhôm Cell Caro' },
      { label: 'Kích thước ô lưới', value: '50×50 / 100×100 / 150×150 (mm)' },
      { label: 'Chiều dày thanh', value: '0.5 – 0.8 (mm)' },
      { label: 'Chiều cao thanh', value: '25 – 50 (mm)' },
      { label: 'Vật liệu', value: 'Hợp kim nhôm 3003' },
      { label: 'Bề mặt hoàn thiện', value: 'Sơn tĩnh điện / PVDF' },
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM B209/B209M' },
      { label: 'Tiêu chuẩn sơn phủ', value: 'ASTM D3359' },
      { label: 'Chống cháy', value: 'QCVN 06:2022/BXD' },
    ],
    colors: [
      { code: 'RAL 9016', name: 'White', hex: '#F6F6F6' },
      { code: 'AUS 3311', name: 'Gray silver', hex: '#C7C7C7' },
      { code: 'RAL 7022', name: 'Gray', hex: '#4B4D4B' },
      { code: 'AUS 9011', name: 'Black', hex: '#0A0A0A' },
      { code: 'AUS 1567', name: 'Brown', hex: '#4B3621' },
    ],
    applications: 'Trần nhôm Cell Caro được ứng dụng rộng rãi cho sân bay, nhà ga, trung tâm thương mại, siêu thị, văn phòng lớn, trung tâm triển lãm và các công trình công cộng yêu cầu thông gió tốt, che giấu hệ kỹ thuật và thẩm mỹ cao.',
    structureDetails: [
      { label: 'Thanh lưới ngang/dọc', value: 'Nhôm dày 0.5–0.8mm' },
      { label: 'Kích thước ô', value: '50×50 – 150×150mm' },
      { label: 'Hệ khung treo', value: 'Khung T-grid chuyên dụng' },
      { label: 'Ty treo', value: 'Ty ren M6/M8' },
      { label: 'Khoảng cách treo', value: 'Theo thiết kế' },
    ],
    gallery: [caroGal1, caroGal2, caroGal3, caroGal4, caroGal5],
    links: {
      quote: 'https://pcfsolution.com.vn',
      zalo: 'https://zalo.me/0932786216',
    },
  },
  'tran-nhom-clip-in-tile': {
    name: 'Trần nhôm Clip-in Tile',
    category: 'Trần Nhôm',
    categorySlug: 'tran-nhom',
    description: 'Tấm trần nhôm phẳng kín dạng tile – bề mặt liền mạch, thẩm mỹ cao và dễ lắp đặt.',
    longDescription: 'Trần nhôm Clip-in Tile PCF SOLUTION là hệ trần tấm phẳng kín, lắp đặt bằng cơ cấu cài clip chuyên dụng giúp tấm bám chắc vào khung xương mà không lộ điểm kết nối. Bề mặt phẳng hoàn toàn, liền mạch tạo không gian trần sạch sẽ, hiện đại. Từng tấm có thể tháo rời độc lập để tiếp cận hệ thống kỹ thuật bên trên mà không ảnh hưởng đến các tấm xung quanh.',
    image: tranNhomClipinTile,
    structureImage: tranNhomClipinTileStructure,
    features: [
      'Bề mặt phẳng kín hoàn toàn, tạo không gian trần sạch và chuyên nghiệp.',
      'Cơ cấu clip ẩn, không lộ điểm bắt vít hay khung xương trên bề mặt.',
      'Tháo lắp từng tấm độc lập, tiện lợi khi cần bảo trì hệ thống kỹ thuật.',
      'Kích thước module đa dạng: 300×300, 600×600, 600×1200mm.',
      'Chống ẩm, chống ăn mòn, phù hợp cả môi trường điều hòa không khí.',
      'Trọng lượng nhẹ, giảm tải trọng cho kết cấu công trình.',
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Trần nhôm Clip-in Tile' },
      { label: 'Kích thước phổ biến', value: '300×300 / 600×600 / 600×1200 (mm)' },
      { label: 'Chiều dày tấm', value: '0.5 – 0.8 (mm)' },
      { label: 'Vật liệu', value: 'Hợp kim nhôm 3003 H24' },
      { label: 'Bề mặt hoàn thiện', value: 'Sơn tĩnh điện / PVDF' },
      { label: 'Hệ lắp đặt', value: 'Clip-in chuyên dụng' },
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM B209/B209M' },
      { label: 'Tiêu chuẩn sơn phủ', value: 'ASTM D3359' },
      { label: 'Chống cháy', value: 'QCVN 06:2022/BXD' },
    ],
    colors: [
      { code: 'RAL 9016', name: 'White', hex: '#F6F6F6' },
      { code: 'AUS 3311', name: 'Gray silver', hex: '#C7C7C7' },
      { code: 'RAL 7022', name: 'Gray', hex: '#4B4D4B' },
      { code: 'AUS 9011', name: 'Black', hex: '#0A0A0A' },
      { code: 'RAL 1015', name: 'Ivory', hex: '#E8DCCA' },
    ],
    applications: 'Trần nhôm Clip-in Tile phù hợp cho sân bay, nhà ga, bệnh viện, trung tâm thương mại, siêu thị, văn phòng, hành lang và các không gian nội thất lớn yêu cầu bề mặt trần phẳng kín, thẩm mỹ cao và dễ bảo trì.',
    structureDetails: [
      { label: 'Tấm nhôm Clip-in', value: '0.5–0.8mm' },
      { label: 'Khung xương chính', value: 'T-grid hoặc C-channel' },
      { label: 'Cơ cấu clip', value: 'Clip ẩn chuyên dụng' },
      { label: 'Ty treo', value: 'Ty ren M6/M8' },
      { label: 'Khoảng cách treo', value: 'Theo module tấm' },
    ],
    gallery: [clipGal1, clipGal2, clipGal3, clipGal4, clipGal5, clipGal6, clipGal7, clipGal8],
    links: {
      quote: 'https://pcfsolution.com.vn',
      zalo: 'https://zalo.me/0932786216',
    },
  },
  'tran-nhom-multi-b-shaped': {
    name: 'Trần nhôm Multi B-Shaped',
    category: 'Trần Nhôm',
    categorySlug: 'tran-nhom',
    description: 'Trần thanh tuyến tính dạng B – đường nét hiện đại, phù hợp cả nội thất lẫn ngoại thất.',
    longDescription: 'Trần nhôm Multi B-Shaped PCF SOLUTION là hệ trần thanh tuyến tính với profile dạng chữ B đặc trưng, tạo ra các đường nét song song liên tục mang lại cảm giác không gian rộng và hiện đại. Sản phẩm phù hợp lắp đặt cả trong nhà lẫn ngoài trời nhờ khả năng chống chịu thời tiết vượt trội. Khoảng hở giữa các thanh cho phép thông gió tự nhiên đồng thời che giấu hệ thống kỹ thuật một cách tinh tế.',
    image: tranNhomMultiBShaped,
    structureImage: tranNhomMultiBShapedStructure,
    features: [
      'Profile chữ B đặc trưng, tạo đường nét tuyến tính mạnh mẽ và hiện đại.',
      'Lắp đặt linh hoạt theo phương ngang hoặc dọc tùy thiết kế kiến trúc.',
      'Khoảng hở điều chỉnh được, vừa thông gió vừa che giấu hệ kỹ thuật.',
      'Phù hợp cả nội thất và ngoại thất nhờ sơn PE/PVDF bền màu ngoài trời.',
      'Chiều dài thanh linh hoạt theo yêu cầu, tối đa 6m.',
      'Lắp đặt nhanh bằng hệ khung treo chuyên dụng, không cần hàn tại chỗ.',
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Trần nhôm Multi B-Shaped' },
      { label: 'Bề rộng thanh', value: '84 / 100 / 150 (mm)' },
      { label: 'Chiều dày vật liệu', value: '0.6 – 1.0 (mm)' },
      { label: 'Chiều dài', value: 'Theo yêu cầu (tối đa 6m)' },
      { label: 'Vật liệu', value: 'Hợp kim nhôm 3003 H24' },
      { label: 'Bề mặt hoàn thiện', value: 'Sơn tĩnh điện / PE / PVDF' },
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM B209/B209M' },
      { label: 'Tiêu chuẩn sơn phủ', value: 'ASTM D3359' },
      { label: 'Chống cháy', value: 'QCVN 06:2022/BXD' },
    ],
    colors: [
      { code: 'RAL 9016', name: 'White', hex: '#F6F6F6' },
      { code: 'AUS 3311', name: 'Gray silver', hex: '#C7C7C7' },
      { code: 'RAL 7022', name: 'Gray', hex: '#4B4D4B' },
      { code: 'AUS 9011', name: 'Black', hex: '#0A0A0A' },
      { code: 'AUS 1567', name: 'Brown', hex: '#4B3621' },
    ],
    applications: 'Trần nhôm Multi B-Shaped được ứng dụng cho mái hiên, sảnh ngoài trời, hành lang lộ thiên, mặt đứng công trình, trần nội thất văn phòng, trung tâm thương mại, khách sạn và các không gian kiến trúc yêu cầu đường nét tuyến tính mạnh mẽ.',
    structureDetails: [
      { label: 'Thanh B-Shaped', value: 'Nhôm dày 0.6–1.0mm' },
      { label: 'Hệ khung treo', value: 'Nhôm/Thép chuyên dụng' },
      { label: 'Khoảng cách thanh', value: 'Theo thiết kế (10–50mm)' },
      { label: 'Ty treo', value: 'Ty ren M6/M8 hoặc bắt vít trực tiếp' },
      { label: 'Chiều dài tối đa', value: '6000mm' },
    ],
    gallery: [multiGal1, multiGal2, multiGal3, multiGal4],
    links: {
      quote: 'https://pcfsolution.com.vn',
      zalo: 'https://zalo.me/0932786216',
    },
  },
  'san-go-ngoai-troi': {
    name: 'Sàn gỗ ngoài trời',
    category: 'Sàn',
    categorySlug: 'san',
    description: 'Giải pháp sàn gỗ tự nhiên cao cấp cho không gian ngoài trời – bền bỉ và thẩm mỹ.',
    longDescription: 'Sàn gỗ ngoài trời PCF SOLUTION được sản xuất từ gỗ tự nhiên cứng, trải qua quy trình xử lý nhiệt và bảo quản chuyên sâu, giúp chống chịu tốt với các điều kiện thời tiết khắc nghiệt như mưa, nắng, độ ẩm cao. Sản phẩm phù hợp cho sân thượng, ban công, hồ bơi, khu nghỉ dưỡng và các không gian ngoài trời cao cấp.',
    image: sanGo,
    structureImage: sanGo,
    features: [
      'Gỗ tự nhiên cứng, chịu lực tốt và độ bền cao ngoài trời.',
      'Bề mặt chống trơn trượt, an toàn khi ẩm ướt.',
      'Xử lý chống mối mọt, chống nấm mốc và chống UV.',
      'Màu sắc tự nhiên, thẩm mỹ cao, phù hợp nhiều phong cách kiến trúc.',
      'Lắp đặt nhanh bằng hệ clip ẩn, không lộ đinh vít.',
      'Dễ bảo trì, có thể chà nhám và sơn lại khi cần.',
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Sàn gỗ ngoài trời' },
      { label: 'Kích thước phổ biến', value: '90×15mm / 120×20mm / 140×20mm' },
      { label: 'Chiều dài', value: 'Theo yêu cầu (tối đa 6m)' },
      { label: 'Vật liệu', value: 'Gỗ tự nhiên cứng (Hardwood)' },
      { label: 'Bề mặt', value: 'Chà nhám / Xẻ rãnh chống trơn' },
      { label: 'Hệ lắp đặt', value: 'Clip ẩn chuyên dụng' },
    ],
    standards: [
      { label: 'Tiêu chuẩn gỗ', value: 'FSC / PEFC' },
      { label: 'Chống cháy', value: 'Class B – EN 13501-1' },
      { label: 'Chống trơn trượt', value: 'R11 – DIN 51130' },
    ],
    colors: [
      { code: 'Teak', name: 'Vàng nâu', hex: '#C8A96E' },
      { code: 'Walnut', name: 'Nâu đậm', hex: '#5C3D2E' },
      { code: 'Mahogany', name: 'Nâu đỏ', hex: '#7B3F00' },
      { code: 'Natural', name: 'Tự nhiên', hex: '#D4A96A' },
    ],
    applications: 'Sàn gỗ ngoài trời phù hợp cho sân thượng, ban công, hồ bơi, khu vui chơi, nhà hàng ngoài trời, khu nghỉ dưỡng, resort và các công trình cảnh quan cần tính thẩm mỹ cao.',
    structureDetails: [
      { label: 'Tấm gỗ mặt', value: 'Gỗ cứng xẻ rãnh' },
      { label: 'Hệ clip lắp đặt', value: 'Clip ẩn inox 304' },
      { label: 'Xà gỗ đỡ', value: 'Gỗ 50×100mm' },
      { label: 'Khoảng cách xà', value: '400–600mm' },
    ],
    links: {
      quote: 'https://pcfsolution.com.vn',
      zalo: 'https://zalo.me/0904662600',
      technical: 'https://pcfsolution.com.vn',
      autocad: 'https://pcfsolution.com.vn',
    },
  },
  'san-epoxy': {
    name: 'Sàn Epoxy',
    category: 'Sàn',
    categorySlug: 'san',
    description: 'Giải pháp sàn Epoxy công nghiệp – bền bỉ, chống hóa chất và dễ vệ sinh.',
    longDescription: 'Sàn Epoxy PCF SOLUTION là hệ sơn phủ sàn gốc epoxy hai thành phần, tạo ra bề mặt liền khối, không mạch nối, cứng chắc và có khả năng chịu lực, chịu mài mòn cực tốt. Sản phẩm được ứng dụng rộng rãi trong nhà máy, kho xưởng, bãi đỗ xe, bệnh viện và các không gian công nghiệp yêu cầu cao về vệ sinh và độ bền.',
    image: sanEpoxy,
    structureImage: sanEpoxy,
    features: [
      'Bề mặt liền khối, không mạch nối, dễ vệ sinh và khử trùng.',
      'Chịu lực nén cao, chống mài mòn và va đập tốt.',
      'Chống thấm nước, chống hóa chất và dầu mỡ.',
      'Bề mặt bóng phản chiếu giúp cải thiện ánh sáng không gian.',
      'Đa dạng màu sắc, có thể kẻ vạch phân làn theo yêu cầu.',
      'Thi công nhanh, ít gián đoạn hoạt động sản xuất.',
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Sàn Epoxy công nghiệp' },
      { label: 'Chiều dày lớp phủ', value: '0.3 – 3.0mm (tùy hệ)' },
      { label: 'Độ cứng bề mặt', value: '≥ 80 Shore D' },
      { label: 'Khả năng chịu nén', value: '≥ 70 MPa' },
      { label: 'Thành phần', value: 'Epoxy 2 thành phần (A+B)' },
      { label: 'Bề mặt hoàn thiện', value: 'Bóng / Mờ / Chống trơn' },
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM C579 / C580' },
      { label: 'Chống cháy', value: 'QCVN 06:2022/BXD' },
    ],
    colors: [
      { code: 'RAL 6001', name: 'Xanh lá', hex: '#368A37' },
      { code: 'RAL 7035', name: 'Xám nhạt', hex: '#D5D6C9' },
      { code: 'RAL 9003', name: 'Trắng', hex: '#F2F3ED' },
      { code: 'RAL 5005', name: 'Xanh dương', hex: '#1F4094' },
      { code: 'RAL 9005', name: 'Đen', hex: '#0A0A0A' },
    ],
    applications: 'Sàn Epoxy phù hợp cho nhà máy sản xuất, kho lạnh, bãi đỗ xe, phòng sạch, bệnh viện, phòng thí nghiệm, siêu thị và các không gian công nghiệp – thương mại yêu cầu độ sạch và bền cao.',
    structureDetails: [
      { label: 'Lớp lót', value: 'Epoxy primer (0.1–0.2mm)' },
      { label: 'Lớp trung gian', value: 'Epoxy self-leveling' },
      { label: 'Lớp phủ mặt', value: 'Epoxy topcoat bóng/mờ' },
      { label: 'Tổng chiều dày', value: '0.5 – 3.0mm' },
    ],
    links: {
      quote: 'https://pcfsolution.com.vn',
      zalo: 'https://zalo.me/0904662600',
      technical: 'https://pcfsolution.com.vn',
      autocad: 'https://pcfsolution.com.vn',
    },
  },
  'tham-trai-san-van-phong': {
    name: 'Thảm trải sàn văn phòng',
    category: 'Sàn',
    categorySlug: 'san',
    description: 'Giải pháp thảm sàn dạng tấm – cách âm, chống tĩnh điện và thẩm mỹ cao.',
    longDescription: 'Thảm trải sàn văn phòng PCF SOLUTION là dòng thảm sàn dạng tấm (carpet tile) cao cấp, được sản xuất từ sợi nylon hoặc polyester bền màu, kết hợp lớp đế PVC chống trượt. Sản phẩm có khả năng cách âm, giảm tiếng ồn bước chân, chống tĩnh điện và tạo không gian làm việc chuyên nghiệp, ấm áp cho văn phòng hiện đại.',
    image: thamTraiSan,
    structureImage: thamTraiSan,
    features: [
      'Dạng tấm module 50×50cm, dễ thay thế cục bộ khi bị hư hỏng.',
      'Cách âm tốt, giảm tiếng ồn bước chân hiệu quả.',
      'Chống tĩnh điện, bảo vệ thiết bị điện tử văn phòng.',
      'Bề mặt sợi dày, mềm mại, tạo cảm giác thoải mái khi đi bộ.',
      'Đa dạng màu sắc và hoa văn, dễ phối hợp với nội thất.',
      'Dễ vệ sinh bằng máy hút bụi hoặc giặt chuyên dụng.',
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Thảm trải sàn văn phòng (Carpet Tile)' },
      { label: 'Kích thước tấm', value: '500×500mm' },
      { label: 'Chiều cao sợi', value: '4 – 6mm' },
      { label: 'Trọng lượng', value: '3.5 – 5.0 kg/m²' },
      { label: 'Vật liệu sợi', value: 'Nylon / Polyester' },
      { label: 'Lớp đế', value: 'PVC chống trượt' },
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Chống tĩnh điện', value: 'EN 1081' },
      { label: 'Chống cháy', value: 'Class Bfl-s1 – EN 13501-1' },
      { label: 'Chống trơn trượt', value: 'DS/R 11 – EN 13893' },
    ],
    colors: [
      { code: 'C-001', name: 'Xám trung tính', hex: '#8A8A8A' },
      { code: 'C-002', name: 'Xám xanh', hex: '#6B7B8D' },
      { code: 'C-003', name: 'Be ấm', hex: '#C9B99A' },
      { code: 'C-004', name: 'Nâu nhạt', hex: '#9B7653' },
      { code: 'C-005', name: 'Đen than', hex: '#2C2C2C' },
    ],
    applications: 'Thảm trải sàn văn phòng phù hợp cho văn phòng làm việc, phòng họp, phòng giám đốc, khách sạn, sân bay, trung tâm thương mại và các không gian nội thất yêu cầu sự sang trọng và cách âm tốt.',
    structureDetails: [
      { label: 'Lớp sợi mặt', value: 'Nylon/Polyester (4–6mm)' },
      { label: 'Lớp đệm giữa', value: 'Foam PE/PP' },
      { label: 'Lớp đế', value: 'PVC chống trượt' },
      { label: 'Kích thước module', value: '500×500mm' },
    ],
    links: {
      quote: 'https://pcfsolution.com.vn',
      zalo: 'https://zalo.me/0904662600',
      technical: 'https://pcfsolution.com.vn',
      autocad: 'https://pcfsolution.com.vn',
    },
  },
  'san-go-composite': {
    name: 'Sàn gỗ Composite',
    category: 'Sàn',
    categorySlug: 'san',
    description: 'Giải pháp sàn gỗ Composite ngoài trời – bền vượt thời gian, không cần bảo dưỡng.',
    longDescription: 'Sàn gỗ Composite PCF SOLUTION (WPC – Wood Plastic Composite) là sự kết hợp hoàn hảo giữa bột gỗ tự nhiên và nhựa polymer tái chế, tạo ra sản phẩm có vẻ đẹp của gỗ tự nhiên nhưng vượt trội hơn về khả năng chống chịu thời tiết, chống mối mọt và không cần sơn dầu định kỳ. Sản phẩm lý tưởng cho sân thượng, hành lang ngoài trời và khu nghỉ dưỡng cao cấp.',
    image: sanGoComposite,
    structureImage: sanGoComposite,
    features: [
      'Kết hợp bột gỗ tự nhiên và nhựa polymer – vừa đẹp vừa bền.',
      'Không cần sơn dầu bảo dưỡng định kỳ như gỗ tự nhiên.',
      'Chống mối mọt, chống nấm mốc và không bị cong vênh.',
      'Bề mặt vân gỗ tự nhiên, chống trơn trượt khi ẩm ướt.',
      '100% có thể tái chế, thân thiện với môi trường.',
      'Lắp đặt nhanh với hệ clip ẩn, dễ tháo lắp bảo trì.',
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Sàn gỗ Composite WPC' },
      { label: 'Kích thước phổ biến', value: '140×22mm / 150×25mm' },
      { label: 'Chiều dài', value: 'Theo yêu cầu (tối đa 5.8m)' },
      { label: 'Vật liệu', value: 'WPC (60% bột gỗ + 40% nhựa PE)' },
      { label: 'Bề mặt', value: 'Vân gỗ chống trơn' },
      { label: 'Hệ lắp đặt', value: 'Clip ẩn inox 304' },
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM D7032' },
      { label: 'Chống cháy', value: 'Class C – EN 13501-1' },
      { label: 'Chống trơn trượt', value: 'R11 – DIN 51130' },
    ],
    colors: [
      { code: 'WPC-01', name: 'Vàng teak', hex: '#C8A96E' },
      { code: 'WPC-02', name: 'Nâu cà phê', hex: '#6B3A2A' },
      { code: 'WPC-03', name: 'Xám bạc', hex: '#9B9B9B' },
      { code: 'WPC-04', name: 'Đen than', hex: '#2A2A2A' },
    ],
    applications: 'Sàn gỗ Composite phù hợp cho sân thượng, ban công, hành lang ngoài trời, hồ bơi, cầu cảnh quan, khu nghỉ dưỡng resort, nhà hàng ngoài trời và các công trình cần vật liệu bền vững, ít bảo dưỡng.',
    structureDetails: [
      { label: 'Tấm gỗ Composite', value: 'WPC rỗng hoặc đặc' },
      { label: 'Hệ clip lắp đặt', value: 'Clip ẩn inox 304' },
      { label: 'Xà đỡ nhôm', value: 'Nhôm 40×60mm' },
      { label: 'Khoảng cách xà', value: '400–500mm' },
    ],
    links: {
      quote: 'https://pcfsolution.com.vn',
      zalo: 'https://zalo.me/0904662600',
      technical: 'https://pcfsolution.com.vn',
      autocad: 'https://pcfsolution.com.vn',
    },
  },
  'tran-nhom-clip-in': {
    name: 'Trần nhôm Clip-in',
    category: 'Trần nhôm',
    categorySlug: 'tran-nhom',
    description: 'Giải pháp trần kim loại phẳng, kín khít – thẩm mỹ cao và dễ bảo trì.',
    longDescription: 'Trần nhôm Clip-in là hệ trần treo kín dạng panel, lắp đặt bằng cách cài tấm lên khung xương chuyên dụng giúp bề mặt liền mạch, gọn gàng và hiện đại. Hệ thống phù hợp cho các không gian cần tính thẩm mỹ cao, kiểm soát vệ sinh tốt và bảo trì thuận tiện. Tấm trần có thể tháo lắp từng panel, dễ tiếp cận hệ thống kỹ thuật phía trên khi cần kiểm tra hoặc thay thế.',
    image: tranNhomClipin,
    structureImage: tranNhomClipinCauTao,
    features: [
      'Bề mặt phẳng, kín khít, tạo cảm giác không gian sạch và hiện đại.',
      'Lắp đặt nhanh bằng cơ cấu clip-in, dễ tháo lắp từng tấm.',
      'Không lộ khung xương, phù hợp các không gian yêu cầu thẩm mỹ cao.',
      'Khả năng chống ẩm, chống ăn mòn và độ bền tốt trong môi trường trong nhà.',
      'Dễ vệ sinh, bảo trì và thay thế cục bộ khi cần.'
    ],
    specifications: [
      { label: 'Tên sản phẩm', value: 'Trần nhôm Clip-in' },
      { label: 'Kích thước phổ biến', value: '300x300, 600x600 (mm)' },
      { label: 'Chiều dày tấm', value: '0.5 – 0.7 (mm)' },
      { label: 'Vật liệu chính', value: 'Hợp kim nhôm' },
      { label: 'Bề mặt hoàn thiện', value: 'Sơn tĩnh điện / PVDF' },
      { label: 'Hệ khung treo', value: 'Khung cài Clip-in chuyên dụng' }
    ],
    standards: [
      { label: 'Hệ thống quản lý', value: 'ISO 9001-2015' },
      { label: 'Tiêu chuẩn vật liệu', value: 'ASTM B209/B209M' },
      { label: 'Tiêu chuẩn lớp sơn phủ', value: 'ASTM D3359' }
    ],
    colors: [
      { code: 'AUS 3311', name: 'Gray silver', hex: '#C7C7C7' },
      { code: 'RAL 9016', name: 'White', hex: '#F6F6F6' },
      { code: 'RAL 7022', name: 'Gray', hex: '#4B4D4B' },
      { code: 'AUS 9011', name: 'Black', hex: '#0A0A0A' },
      { code: 'AUS 1567', name: 'Brown', hex: '#4B3621' }
    ],
    applications: 'Phù hợp cho văn phòng, hành lang, khu thương mại, bệnh viện, trường học và các không gian nội thất cần bề mặt trần phẳng – kín – dễ vệ sinh.',
    structureDetails: [
      { label: 'Tấm trần nhôm', value: 'Clip-in (0.5–0.7mm)' },
      { label: 'Khung xương chính', value: 'Khung Clip-in chuyên dụng' },
      { label: 'Ty treo', value: 'Ty ren M6/M8' },
      { label: 'Khoảng cách treo', value: 'Theo thiết kế' }
    ],
    links: {
      quote: 'https://pcfsolution.com.vn/wp-content/uploads/tai-lieu/BANG-BAO-GIA-PCF-SOLUTION-MOI_v5.8.pdf',
      zalo: 'https://zalo.me/0932786216',
      technical: 'https://pcfsolution.com.vn/wp-content/uploads/tai-lieu/Trannhom-Clipin-Tai-lieu-ky-thuat.pdf',
      autocad: 'https://pcfsolution.com.vn/san-pham/tran-nhom-clip-in/#signup-link'
    }
  },
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

const installationSteps: Record<string, string[]> = {
  'tam-op-nhom-duc-lo': [
    'Khảo sát mặt đứng công trình, lập bản vẽ thi công xác định vị trí neo, kích thước tấm và bố cục họa tiết.',
    'Lắp đặt hệ khung chính (thép hộp hoặc nhôm) vào kết cấu công trình bằng bulong neo chịu lực.',
    'Gắn hệ khung phụ (U-channel / L-bracket nhôm) lên khung chính, căn chỉnh phẳng và thẳng đứng.',
    'Lắp tấm nhôm đục lỗ vào hệ khung bằng vít ẩn hoặc clip, duy trì khe hở đều giữa các tấm.',
    'Kiểm tra toàn bộ mặt đứng, xử lý góc cạnh, lắp thanh kết thúc và vệ sinh bề mặt hoàn thiện.',
  ],
  'tran-nhom-cell-caro': [
    'Khảo sát mặt bằng, xác định cao độ trần và lập bản vẽ lưới bố trí ô Caro.',
    'Lắp đặt ty treo và thanh xương chính T-grid theo lưới quy định, căn chỉnh mặt phẳng.',
    'Lắp thanh xương phụ tạo ô vuông theo kích thước thiết kế (50×50 hoặc 100×100mm).',
    'Lắp các module lưới Caro vào hệ khung, căn chỉnh đều và thẳng hàng toàn diện.',
    'Kiểm tra độ phẳng, xử lý góc tường bằng thanh viền và vệ sinh hoàn thiện.',
  ],
  'tran-nhom-clip-in-tile': [
    'Khảo sát mặt bằng, xác định cao độ trần, vị trí đèn và hệ thống kỹ thuật phía trên.',
    'Lắp đặt ty treo và hệ khung xương T-grid hoặc C-channel theo module tấm.',
    'Căn chỉnh toàn bộ khung theo mặt phẳng chuẩn, kiểm tra độ ngang bằng laser.',
    'Cài tấm nhôm Clip-in Tile vào khung theo thứ tự từ giữa ra ngoài, kiểm tra cài chắc.',
    'Lắp tấm kỹ thuật (cho đèn âm trần, điều hòa), hoàn thiện viền góc và vệ sinh bề mặt.',
  ],
  'tran-nhom-multi-b-shaped': [
    'Khảo sát mặt bằng hoặc mặt đứng, xác định phương lắp (ngang/dọc) và khoảng cách thanh.',
    'Lắp đặt hệ khung treo nhôm/thép vào kết cấu chính, kiểm tra độ thẳng và phẳng.',
    'Gắn thanh ngang (hanger bar) vào khung theo bước thiết kế, căn chỉnh đều.',
    'Lắp từng thanh B-Shaped vào hệ ngang, duy trì khoảng hở đều giữa các thanh.',
    'Lắp thanh kết thúc đầu hồi, xử lý góc cắt gọn và vệ sinh bề mặt hoàn thiện.',
  ],
  'tran-nhom-clip-in': [
    'Khảo sát mặt bằng, xác định cao độ trần, vị trí ty treo và đường kỹ thuật phía trên.',
    'Lắp đặt ty ren M6/M8 vào kết cấu sàn bên trên theo lưới quy định.',
    'Gắn thanh xương chính và xương phụ vào hệ ty treo, căn chỉnh theo mặt phẳng chuẩn.',
    'Cài tấm nhôm Clip-in vào hệ khung theo thứ tự, căn chỉnh khe hở đều.',
    'Kiểm tra độ phẳng toàn bộ bề mặt trần, xử lý góc tường và vệ sinh hoàn thiện.',
  ],
  'lam-chan-nang-132s-sun-louver': [
    'Khảo sát mặt đứng công trình, xác định vị trí neo và khoảng cách lam theo bản vẽ.',
    'Lắp đặt khung xương thép hộp 40×80mm vào kết cấu chính bằng bulong chịu lực.',
    'Gắn móc treo (Hanger) lên khung theo bước 200mm, kiểm tra thẳng hàng theo phương đứng.',
    'Lắp từng thanh lam nhôm 132S vào hệ móc, kiểm tra góc nghiêng 45° và khoảng cách đều.',
    'Lắp thanh kết thúc đầu hồi, che chân lam và vệ sinh bề mặt hoàn thiện.',
  ],
  'lam-chan-nang-85c-sun-louver': [
    'Khảo sát mặt đứng, xác định vị trí neo và lưới bố trí lam theo thiết kế.',
    'Lắp đặt khung xương thép hoặc nhôm vào kết cấu chính, kiểm tra độ thẳng đứng.',
    'Gắn khung cài C85 chuyên dụng lên xương, đảm bảo khoảng cách đều và thẳng hàng.',
    'Lắp thanh lam nhôm 85C vào khung cài theo góc nghiêng 45°, cố định chắc chắn.',
    'Xử lý đầu hồi, lắp thanh kết thúc và vệ sinh bề mặt hoàn thiện.',
  ],
  'lam-chan-nang-aeroscreen-sun-louver': [
    'Khảo sát công trình, lập bản vẽ thi công xác định phương lắp (ngang/đứng) và khoảng cách lam.',
    'Lắp đặt hệ khung nhôm chuyên dụng vào kết cấu công trình, kiểm tra độ phẳng và thẳng.',
    'Gắn tay đỡ lam (nhôm đúc đồng bộ) vào khung theo vị trí thiết kế.',
    'Lắp tấm lam Aeroscreen vào tay đỡ, cố định và kiểm tra góc nghiêng (hoặc kết nối động cơ nếu lắp động).',
    'Kiểm tra toàn bộ hệ thống, xử lý đầu thu, che chân và vệ sinh hoàn thiện.',
  ],
  'san-go-ngoai-troi': [
    'Chuẩn bị nền: kiểm tra độ phẳng, độ dốc thoát nước tối thiểu 1–2%, vệ sinh sạch bề mặt.',
    'Lắp đặt hệ xà gỗ đỡ 50×100mm theo khoảng cách 400–600mm, cố định bằng bulong chống rỉ.',
    'Căn chỉnh toàn bộ xà theo cùng cao độ, đảm bảo mặt phẳng đều và thoát nước tốt.',
    'Lắp tấm gỗ mặt bằng hệ clip ẩn inox, duy trì khe thoát nước 5–8mm giữa các tấm.',
    'Xử lý đầu hồi bằng thanh kết thúc, bôi dầu dưỡng gỗ lần đầu sau khi hoàn thiện.',
  ],
  'san-epoxy': [
    'Mài nền bê tông bằng máy mài, làm sạch hoàn toàn dầu mỡ, bụi bẩn và vết nứt.',
    'Trám vá các vết nứt và lỗ rỗng bằng vữa epoxy chuyên dụng, chờ cứng hoàn toàn.',
    'Phun lớp lót epoxy primer, dàn đều bằng con lăn, chờ khô 4–6 giờ ở nhiệt độ thường.',
    'Thi công lớp epoxy self-leveling (tự phẳng), dàn đều và lăn gai để thoát bọt khí.',
    'Phun lớp topcoat hoàn thiện (bóng hoặc mờ), chờ 24 giờ trước khi đi lại nhẹ và 7 ngày chịu tải hoàn toàn.',
  ],
  'tham-trai-san-van-phong': [
    'Chuẩn bị nền sàn: vệ sinh sạch bụi bẩn, đảm bảo nền khô và phẳng (độ lệch ≤ 3mm/2m).',
    'Kẻ trục định vị từ tâm phòng ra bốn hướng làm điểm bắt đầu lát thảm.',
    'Quét keo dán thảm áp lực (pressure-sensitive adhesive) đều trên nền theo từng ô nhỏ.',
    'Lát tấm thảm 50×50cm theo hướng mũi tên trên lưng tấm, dán chắc và cán phẳng bằng con lăn.',
    'Cắt xử lý các tấm góc, chân tường và lắp thanh chắn kim loại tại cửa ra vào.',
  ],
  'san-go-composite': [
    'Chuẩn bị nền: kiểm tra thoát nước, độ dốc tối thiểu 1%, vệ sinh và ổn định kết cấu nền.',
    'Lắp đặt hệ xà nhôm 40×60mm theo khoảng cách 400–500mm, cố định bằng vít inox chống rỉ.',
    'Căn chỉnh toàn bộ xà nhôm theo cùng mặt phẳng, kiểm tra bằng thước dài.',
    'Gắn clip ẩn inox 304 vào xà, lắp tấm gỗ Composite vào clip theo thứ tự từ trong ra ngoài.',
    'Lắp thanh kết thúc đầu hồi, vệ sinh bề mặt và kiểm tra toàn bộ mặt sàn hoàn thiện.',
  ],
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
          <div className={`rounded-2xl overflow-hidden border border-slate-800 bg-[#061121] h-full ${activeProductId === 'tran-nhom-clip-in' ? 'flex items-center justify-center' : ''}`}>
            <img 
              src={product.image} 
              alt={product.name} 
              className={activeProductId === 'tran-nhom-clip-in' ? 'h-full w-auto object-contain' : 'w-full h-full object-cover'}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{product.name}</h1>
            <p className="text-lg text-blue-400 font-medium mb-4">{product.description}</p>
            <p className="text-slate-400 leading-snug mb-4">{product.longDescription}</p>

            {/* Quick Specs */}
            <div className="bg-[#061121] rounded-xl border border-slate-800 mb-5">
              <div className="px-5 py-3 border-b border-slate-800">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Thông số kỹ thuật</span>
              </div>
              <div className="divide-y divide-slate-800">
                {product.specifications.map((spec: any, i: number) => (
                  <div key={i} className="grid grid-cols-2 px-5 py-2.5">
                    <span className="text-slate-500 text-sm">{spec.label}</span>
                    <span className="text-white text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-[#061121] rounded-xl border border-slate-800 mb-5">
              <div className="px-5 py-3 border-b border-slate-800">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Đặc điểm nổi bật</span>
              </div>
              <ul className="px-5 py-3 space-y-2">
                {product.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <a href="https://zalo.me/0932786216" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0058DD] text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.149 0 11.5c0 3.33 1.515 6.312 3.908 8.354L2.84 24l4.331-1.411C8.572 23.499 10.254 24 12 24c6.627 0 12-5.149 12-11.5S18.627 0 12 0z"/></svg>
                TƯ VẤN ZALO
              </a>
              <a href="tel:+84932786216" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +84 932 786 216
              </a>
            </div>

            {/* Zalo QR */}
            <div className="bg-[#061121] rounded-xl border border-slate-800 p-4 flex items-center gap-5">
              <div className="bg-white p-2 rounded-xl flex-shrink-0">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://zalo.me/0932786216&bgcolor=ffffff&color=000000&margin=2"
                  alt="Zalo QR Code"
                  className="w-24 h-24"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-bold text-sm">Quét mã Zalo để tư vấn ngay</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">Mở ứng dụng Zalo → nhấn biểu tượng quét mã → quét mã QR bên cạnh để kết nối với chuyên viên PCF SOLUTION.</p>
                <p className="text-blue-400 text-xs mt-2 font-medium">Zalo: 0932 786 216</p>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery - Công trình thực tế */}
        {product.gallery && product.gallery.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4 uppercase">Công trình thực tế</h2>
              <span className="text-slate-500 text-sm">{product.gallery.length} hình ảnh</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {product.gallery.map((img: string, index: number) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl group cursor-pointer relative ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                  style={{ aspectRatio: index === 0 ? '4/3' : '4/3' }}
                >
                  <img
                    src={img}
                    alt={`${product.name} công trình ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0a192f]/0 group-hover:bg-[#0a192f]/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Details Sections */}
        <div className="space-y-12">

          {/* Tiêu chuẩn + Ứng dụng */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8">
              <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4 uppercase">Tiêu chuẩn áp dụng</h2>
              <div className="border-t border-slate-800">
                {product.standards.map((std: any, index: number) => (
                  <div key={index} className="grid grid-cols-2 py-3 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">{std.label}</span>
                    <span className="text-white text-sm font-medium">{std.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8">
              <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4 uppercase">Ứng dụng</h2>
              <p className="text-slate-400 leading-relaxed text-sm">{product.applications}</p>
            </div>
          </div>

          {/* Màu sắc */}
          <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4 uppercase">Màu sắc</h2>
            <p className="text-slate-400 mb-8">PCF SOLUTION cung cấp nhiều lựa chọn màu sắc và chất liệu hoàn thiện. Các màu theo bảng dưới đây, ngoài ra có thể thực hiện theo yêu cầu riêng.</p>
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
          </div>

          {/* Cấu tạo */}
          <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase">Cấu tạo hệ thống</h2>
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
                  * Hệ thống được thiết kế tối ưu cho lắp đặt nhanh, đảm bảo thẩm mỹ và độ bền kết cấu.
                </p>
              </div>
            </div>
          </div>

          {/* Quy trình thi công */}
          {installationSteps[activeProductId] && (
            <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase">Quy trình thi công</h2>
              <div className="space-y-4">
                {installationSteps[activeProductId].map((step: string, index: number) => (
                  <div key={index} className="flex gap-5 items-start">
                    <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-[#0a192f] rounded-xl px-5 py-4 border border-slate-800">
                      <p className="text-slate-300 text-sm leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bảo hành & Hỗ trợ */}
          <div className="bg-[#061121] rounded-2xl border border-slate-800 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase">Bảo hành & Hỗ trợ</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#0a192f] rounded-xl p-6 border border-slate-800 text-center">
                <div className="text-blue-400 text-4xl font-black mb-2">12</div>
                <div className="text-white font-bold mb-2">Tháng bảo hành</div>
                <p className="text-slate-400 text-sm">Bảo hành chính hãng toàn bộ sản phẩm PCF SOLUTION kể từ ngày nghiệm thu công trình.</p>
              </div>
              <div className="bg-[#0a192f] rounded-xl p-6 border border-slate-800 text-center">
                <div className="text-blue-400 text-4xl font-black mb-2">24/7</div>
                <div className="text-white font-bold mb-2">Hỗ trợ kỹ thuật</div>
                <p className="text-slate-400 text-sm">Đội ngũ kỹ thuật luôn sẵn sàng tư vấn, hỗ trợ xử lý sự cố trong và sau thi công.</p>
              </div>
              <div className="bg-[#0a192f] rounded-xl p-6 border border-slate-800 text-center">
                <div className="text-blue-400 text-4xl font-black mb-2">Free</div>
                <div className="text-white font-bold mb-2">Tư vấn thiết kế</div>
                <p className="text-slate-400 text-sm">Miễn phí tư vấn giải pháp kỹ thuật, bản vẽ thi công và lựa chọn màu sắc theo yêu cầu dự án.</p>
              </div>
            </div>
            <div className="bg-[#0a192f] rounded-xl p-6 border border-slate-800">
              <h3 className="text-white font-bold mb-4">Điều kiện bảo hành</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />Sản phẩm được lắp đặt đúng kỹ thuật theo hướng dẫn của PCF SOLUTION.</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />Không bị hư hỏng do tác động cơ học, hóa chất ăn mòn hoặc thiên tai.</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />Có hóa đơn mua hàng hoặc biên bản nghiệm thu từ PCF SOLUTION.</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />Liên hệ hotline <a href="tel:+84932786216" className="text-blue-400 hover:underline">+84 932 786 216</a> để được hỗ trợ bảo hành tại công trình.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
