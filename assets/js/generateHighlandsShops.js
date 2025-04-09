const stores = [
  // Quận 1
  { name: "Highlands Coffee 2B Le Duan HCM", address: "2B Lê Duẩn P.Bến Nghé Q.1, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee DIAMOND HCM", address: "34 Lê Duẩn P.Bến Nghé Q.1, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee NDC - HCM", address: "27B Nguyễn Đình Chiểu P.Đa Kao Q.1, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee FIDECO - HCM", address: "Tòa nhà Fideco, 81-85 Hàm Nghi P.Nguyễn Thái Bình Q.1, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Liberty HCM", address: "187 Phạm Ngũ Lão P.Phạm Ngũ Lão Q.1, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Calmette - HCM", address: "161-163 Calmette P.Nguyễn Thái Bình Q.1, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Nguyen Thai Hoc HCM", address: "132A Nguyễn Thái Học P.Phạm Ngũ Lão Q.1, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee City Museum", address: "65 Lý Tự Trọng P.Bến Nghé Q.1, TP.HCM", lat: null, lng: null },
  {name: "Highlands Coffee Vincom B3 HCM", address: "TTTM Vincom Tầng B3, số 70-72 Lê Thánh Tôn P.Bến Nghé Q.1, TP.HCM", lat: null, lng: null },

  // Quận 3
  { name: "Highlands Coffee CMT8 - HCM", address: "90 Cách Mạng Tháng Tám P.Võ Thị Sáu Q.3, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Hai Ba Trung HCM", address: "265 Hai Bà Trưng P.Võ Thị Sáu Q.3, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Ly Chinh Thang HCM", address: "45 Lý Chính Thắng P.Võ Thị Sáu Q.3, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Saigon Pavillon HCM", address: "53-55 Bà Huyện Thanh Quan P.Võ Thị Sáu Q.3, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee 91 Nguyen Thien Thuat, Q3", address: "91 Nguyễn Thiện Thuật, Phường 2, Quận 3, Thành phố Hồ Chí Minh", lat: null, lng: null },
  { name: "Highlands Coffee KY DONG, Q3", address: "138bis Kỳ Đồng, Phường 9, Quận 3, Thành phố Hồ Chí Minh", lat: null, lng: null },
  { name: "Highlands Coffee CMT8 SACOMBANK TOWER", address: "278 Cách Mạng Tháng 8, Phường 10, Quận 3, Thành phố Hồ Chí Minh", lat: null, lng: null },
  { name: "Highlands Coffee VINH HƯNG PLAZA, Q3", address: "Tầng trệt TTTM Vinh Hưng Plaza, 25A Nguyễn Thị Minh Khai, Phường Bến Nghé, Quận 1", lat: null, lng: null },
  { name: "Highlands Coffee LY CHINH THANG, Q3", address: "99C Lý Chính Thắng, Phường 7, Quận 3, Thành phố Hồ Chí Minh", lat: null, lng: null },

  // Quận 2 (bao gồm TP Thủ Đức)
  { name: "Highlands Coffee Cantavil D2 - HCM", address: "Cantavil Xa Lộ Hà Nội P.An Phú TP. Thủ Đức, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Thao Dien Pearl", address: "12 Quốc Hương, Thảo Điền, Quận 2, Thành phố Hồ Chí Minh", lat: null, lng: null },
  { name: "Highlands Coffee Vincom Mega Mall Thao Dien", address: "Số 161 Xa lộ Hà Nội, P, Thảo Điền, Quận 2, Thành phố Hồ Chí Minh", lat: null, lng: null },
  { name: "Highlands Coffee Sala 2", address: "125 Nguyễn Cơ Thạch P.An Lợi Đông Q.2, TP.HCM", lat: null, lng: null },

  // Quận 7
  { name: "Highlands Coffee Garden Plaza D7", address: "SB-01, Garden Plaza, 1 Tôn Dật Tiên P.Tân Phong Q.7, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Saigon South HCM", address: "152 Nguyễn Lương Bằng P.Tân Phú Q.7, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee RMIT - HCM", address: "702 Nguyễn Văn Linh P.Tân Phong Q.7, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Crescent Mall HCM", address: "TTTM Crescent Mall, 101 Tôn Dật Tiên P.Tân Phú Q.7, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Vincom Nam Long - HCM", address: "TTTM Vincom Plaza Trần Trọng Cung P.Tân Thuận Đông Q.7, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Lotte Mart 2 - HCM", address: "469 Nguyễn Hữu Thọ P.Tân Hưng Q.7, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Riverside D7 - HCM", address: "Shop House ST-01 Khối E,Tầng 1 tòa nhà Riverside Resident,182 Nguyễn Lương Bằng P.Phú Mỹ Q.7, TP.HCM", lat: null, lng: null },
   { name: "Highlands Coffee Sky Garden", address: "33 Phạm Văn Nghị, Khu Sky Garden 2, Tân Phong, Quận 7, Thành phố Hồ Chí Minh", lat: null, lng: null },

  // Quận Go Vap
  { name: "Highlands Coffee Vincom Quang Trung HCM", address: "TTTM Vincom Go Vap - 190 Quang Trung P.10 Q.Gò Vấp, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Vincom Go Vap", address: "TTTM Vincom Plaza, 12 Phan Văn Trị P.7 Q.Gò Vấp, TP.HCM", lat: null, lng: null },
  { name: "Highlands Coffee Phan Huy Ich - HCM", address: "399 Phan Huy Ích P.14 Q.Gò Vấp, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Nguyen Van Luong Gò Vấp", address: "507-509 Nguyễn Văn Lượng, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Quang Trung Coopmart Nguyễn Kiệm", address: "304A Quang Trung P. 11 Coopmart Nguyễn Kiệm, Gò Vấp, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Vincom Plaza Gò Vấp", address: "12 Phan Văn Trị, Phường 7, Gò Vấp, Thành phố Hồ Chí Minh", lat: null, lng: null },
      { name: "Highlands Coffee Vincom Plaza Quang Trung", address: "190 Quang Trung, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh", lat: null, lng: null },

    // Bình Thạnh
    { name: "Highlands Coffee Sun Village", address: "31-33 Nguyễn Văn Đậu P.6 Q.Bình Thạnh, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee TTC Ung Van Khiem HCM", address: "Tang 1, So 26 Ung Văn Khiêm P.25 Q.Bình Thạnh, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Vincom Saigonres - HCM", address: "TTTM Vincom Plaza, 181 Nguyễn Xí P.26 Q.Bình Thạnh, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Nguyen Cu Trinh HCM", address: "369 - 371 Nguyễn Trãi, Nguyễn Cư Trinh, Quận 1", lat: null, lng: null },
    { name: "Highlands Coffee 149 Nguyen Xi HCM", address: "149 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Nguyen Xi HCM", address: "154 Nguyễn Xí P.26 Q.Bình Thạnh, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Liberty Plaza", address: "216-218 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Quận 1", lat: null, lng: null },
    { name: "Highlands Coffee D5 Nguyen Huu Canh, Q.Binh Thanh", address: "539 Đường D5, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh", lat: null, lng: null },

    // Tân Bình
    { name: "Highlands Coffee Etown", address: "364 Cộng Hòa P.13 Q.Tân Bình, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee CT.Plaza Ground Floor Out Side", address: "60A Trường Sơn P.2 Q.Tân Bình, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Vincom Cong Hoa HCM", address: "15-17 Cộng Hòa P.4 Q.Tân Bình, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Bau Cat - HCM", address: "1-3-5 Bàu Cát P.14 Q.Tân Bình, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Phan Van Hon, Tan Binh", address: "402 Phan Văn Hớn, Tân Thới Nhất, Tân Bình, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Tran Quoc Hoan Q.Tan Binh", address: "46 Trần Quốc Hoàn, Phường 4, Tân Bình, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee 18E Cong Hoa, Q.Tan Binh", address: "18E Cộng Hòa, Phường 4, Tân Bình, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Padora Cộng Hòa", address: "246-248 Cộng Hòa, Phường 12, Tân Bình, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Pico Plaza Cộng Hòa", address: "20 Cộng Hòa P. 12, Tân Bình", lat: null, lng: null },
    { name: "Highlands Coffee Pico Plaza", address: "364 Cộng Hòa, Phường 13, Tân Bình, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Airport Plaza", address: "1 Bạch Đằng, Phường 2, Tân Bình, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Tran Viet Chau, Q. Tan Binh", address: "14-16 Trần Việt Châu, Phường 13, Tân Bình, Thành phố Hồ Chí Minh", lat: null, lng: null },

     // Phú Nhuận
    { name: "Highlands Coffee 106 Nguyễn Văn Trỗi Q. Phú Nhuận", address: "106 Nguyễn Văn Trỗi, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Hoa Hong Phu Nhuan HCM", address: "46 Hoa Hồng P.7 Q.Phú Nhuận, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Central Point - HCM", address: "106 Nguyễn Văn Trỗi P.8 Q.Phú Nhuận, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Phan Xich Long HCM", address: "193 Phan Xích Long P.2 Q.Phú Nhuận, TP.HCM", lat: null, lng: null },
    { name: "Highlands Coffee Nguyen Trong Tuyen HCM", address: "129 Nguyễn Trọng Tuyển P.15 Q.Phú Nhuận, TP.HCM", lat: null, lng: null },
   { name: "Highlands Coffee 106 Hồ Văn Huê, Phú Nhuận", address: "106 Hồ Văn Huê, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Big C Hoàng Văn Thụ", address: "202B Hoàng Văn Thụ, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Superbowl Q.Phú Nhuận", address: "43A Trương Quốc Dung, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh", lat: null, lng: null },

  // Thủ Đức
  { name: "Highlands Coffee Vincom Thủ Đức", address: "216 Võ Văn Ngân, Bình Thọ, Thủ Đức, Thành phố Hồ Chí Minh", lat: null, lng: null },
  { name: "Highlands Coffee Nguyễn Tri Phương, Thủ Đức", address: "109 Nguyễn Tri Phương, Linh Chiểu, Thủ Đức, Thành phố Hồ Chí Minh", lat: null, lng: null },
  { name: "Highlands Coffee Co.opXtra Linh Trung, Thủ Đức", address: "Khu Chế Xuất Linh Trung I, Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh", lat: null, lng: null },
  { name: "Highlands Coffee Joy Citypoint - HCM", address: "Linh Trung 1 QL1A P.Linh Trung TP.Thủ Đức, TP.HCM", lat: null, lng: null },
   { name: "Highlands Coffee Linh Trung", address: "Kios số 7, Số 2 Đường số 7, Linh Trung, Thành phố Thủ Đức", lat: null, lng: null },
 { name: "Highlands Coffee Nguyen Duy Trinh", address: "307 Nguyễn Duy Trinh, Bình Trưng Tây, Thủ Đức, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Cantavil", address: "Xã Lộ Hà Nội, Khu nhà ở Cantavil Premier, An Phú, Quận 2, Thành phố Hồ Chí Minh", lat: null, lng: null },
 { name: "Highlands Coffee New City HCM", address: "17 Mai Chí Thọ P.An Khánh TP.Thủ Đức, TP.HCM", lat: null, lng: null },

    // Tân Phú
    { name: "Highlands Coffee Phan Đình Phùng, Q. Tân Phú", address: "79-81 Phan Đình Phùng, Tân Thành, Tân Phú, Thành phố Hồ Chí Minh", lat: null, lng: null },
     { name: "Highlands Coffee Tân Thắng, Tân Phú", address: "81C đường Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Bờ Bao Tân Thắng Q.Tân Phú", address: "Số 2 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, Thành phố Hồ Chí Minh", lat: null, lng: null },
 { name: "Highlands Coffee Lotte Mart âu Cơ", address: "Tầng 1 Lotte Mart 968A Âu Cơ, Tân Thạnh, Tân Phú, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee Aeon Tân Phú", address: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, Thành phố Hồ Chí Minh", lat: null, lng: null },
    { name: "Highlands Coffee 28 Phan Đình Phùng, Tân Thành", address: "28 Phan Đình Phùng P. Tân Thành", lat: null, lng: null },
{ name: "Highlands Coffee La San Tan Phu", address: "285 Cách Mạng Tháng 8, Phường 12, Quận 10", lat: null, lng: null },
  { name: "Highlands Coffee Luy Ban Bich - HCM", address: "462 Lũy Bán Bích P.Hòa Thạnh Q. Tân Phú, TP.HCM", lat: null, lng: null },

  // 4, 6, 10, 11, 12, Binh Tan, Binh Chanh ... Các quận còn lại

     { name: "Highlands Coffee Vinhomes Grand Park 1", address: "458 P, Nguyễn Xiển, Long Thạnh Mỹ, Quận 9", lat: null, lng: null },
    { name: "Highlands Coffee Nguyen Tri Phuong, P10", address: "726 Nguyễn Trãi P.11", lat: null, lng: null },
    { name: "Highlands Coffee Le Duc Tho, Q6", address: "26 Đường Số 5, Khu dân cư Bình Phú, 11, Quận 6", lat: null, lng: null },
    { name: "Highlands Coffee Le Dai Hanh", address: "415 Lê Đại Hành, 11, Quận 11", lat: null, lng: null },
    { name: "Highlands Coffee 407 Ba Tháng 2, Q.10", address: "407 Ba Tháng Hai P.10, Quận 11", lat: null, lng: null },
    { name: "Highlands Coffee 192 Nguyễn Tri Phương", address: "192 Nguyễn Tri Phương, Phường 4, Quận 10", lat: null, lng: null },
 { name: "Highlands Coffee Vincom 15/16 Binh Duong", address: "83 Châu Thị Vĩnh Tế, 15, Bình Dương, Quận 4", lat: null, lng: null },
  { name: "Highlands Coffee Phu Tho Hoa, Q.11", address: "220 Phú Thọ Hòa, Phú Thọ Hòa, Tân Phú, Thành phố Hồ Chí Minh, Việt Nam", lat: null, lng: null },
  { name: "Highlands Coffee C3 - Hoang Dieu", address: "C3 Hẻm 219 Đ.Hoàng Diệu, Phường 9, Quận 4, Thành phố Hồ Chí Minh, Việt Nam", lat: null, lng: null },
  { name: "Highlands Coffee 22 Tran Hung Dao, Q.5", address: "22 Trần Hưng Đạo, P. Phạm Ngũ Lão, Quận 1", lat: null, lng: null },
  { name: "Highlands Coffee Nguyen Luong Bang, Q7", address: "152 Nguyễn Lương Bằng, P. Tân Phú, Quận 7", lat: null, lng: null },
  { name: "Highlands Coffee Pham Van Chieu, Q. Go Vap", address: "552-554 Phạm Văn Chiêu, P. 16, Quận Gò Vấp", lat: null, lng: null },
];



// Hàm lấy tọa độ từ Nominatim API
async function getCoordinatesFromAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1&limit=1`;
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "HighlandsCoffeeApp/1.0" },
    });
    const data = await response.json();
    if (data && data.length > 0) {
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    } else {
      console.error(`Không tìm thấy tọa độ cho địa chỉ: ${address}`);
      return null;
    }
  } catch (error) {
    console.error(`Lỗi khi gọi Nominatim API cho địa chỉ ${address}:`, error);
    return null;
  }
}

// Fetch tất cả tọa độ và tạo JSON
async function generateJson() {
  for (let i = 0; i < stores.length; i++) {
    const store = stores[i];
    if (store.lat && store.lng) {
      console.log(`Đã có tọa độ cho: ${store.address}`);
      continue;
    }
    console.log(`Đang lấy tọa độ cho: ${store.address}`);
    const coords = await getCoordinatesFromAddress(store.address);
    if (coords) {
      store.lat = coords.lat;
      store.lng = coords.lng;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Giới hạn 1 request/giây
  }

  // Xuất JSON
  const jsonData = JSON.stringify(stores, null, 2);
  console.log("Dữ liệu JSON đã tạo:");
  console.log(jsonData);
}


generateJson();