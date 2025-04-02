let map;
let userMarker;
let storeMarkers = [];

const allStores = [
  {
    name: "Highlands Coffee 2B Le Duan HCM",
    address: "2B Lê Duẩn P.Bến Nghé Q.1, TP.HCM",
    lat: 10.779610202022978,
    lng: 106.69782359786723
  },
  {
    name: "Highlands Coffee DIAMOND HCM",
    address: "34 Lê Duẩn P.Bến Nghé Q.1, TP.HCM",
    lat: 10.7807972,
    lng: 106.6985826
  },
  {
    name: "Highlands Coffee NDC - HCM",
    address: "27B Nguyễn Đình Chiểu P.Đa Kao Q.1, TP.HCM",
    lat: 10.7875861,
    lng: 106.6993438
  },
  {
    name: "Highlands Coffee Liberty HCM",
    address: "187 Phạm Ngũ Lão P.Phạm Ngũ Lão Q.1, TP.HCM",
    lat: 10.7686177,
    lng: 106.6935317
  },
  {
    name: "Highlands Coffee Calmette - HCM",
    address: "161-163 Calmette P.Nguyễn Thái Bình Q.1, TP.HCM",
    lat: 10.770054147425652,
    lng: 106.69759657179254
  },
  {
    name: "Highlands Coffee Nguyen Thai Hoc HCM",
    address: "132A Nguyễn Thái Học P.Phạm Ngũ Lão Q.1, TP.HCM",
    lat: 10.7687495,
    lng: 106.6952098
  },
  {
    name: "Highlands Coffee City Museum",
    address: "65 Lý Tự Trọng P.Bến Nghé Q.1, TP.HCM",
    lat: 10.778569486821247,
    lng: 106.7015995871049
  },
  {
    name: "Highlands Coffee CMT8 - HCM",
    address: "90 Cách Mạng Tháng Tám P.Võ Thị Sáu Q.3, TP.HCM",
    lat: 10.776672530159853,
    lng: 106.68382607339427
  },
  {
    name: "Highlands Coffee Hai Ba Trung HCM",
    address: "265 Hai Bà Trưng P.Võ Thị Sáu Q.3, TP.HCM",
    lat: 10.791730920119212,
    lng: 106.68706128443604
  },
  {
    name: "Highlands Coffee Ly Chinh Thang HCM",
    address: "45 Lý Chính Thắng P.Võ Thị Sáu Q.3, TP.HCM",
    lat: 10.7901736,
    lng: 106.6863392
  },
  {
    name: "Highlands Coffee Saigon Pavillon HCM",
    address: "53-55 Bà Huyện Thanh Quan P.Võ Thị Sáu Q.3, TP.HCM",
    lat: 10.778745136676946,
    lng: 106.68630660267507
  },
  {
    name: "Highlands Coffee 91 Nguyen Thien Thuat, Q3",
    address: "91 Nguyễn Thiện Thuật, Phường 2, Quận 3, Thành phố Hồ Chí Minh",
    lat: 10.766848551895615,
    lng: 106.6813553305916
  },
  {
    name: "Highlands Coffee KY DONG, Q3",
    address: "138bis Kỳ Đồng, Phường 9, Quận 3, Thành phố Hồ Chí Minh",
    lat: 10.780892616429858,
    lng: 106.68128368952426
  },
  {
    name: "Highlands Coffee CMT8 SACOMBANK TOWER",
    address: "278 Cách Mạng Tháng 8, Phường 10, Quận 3, Thành phố Hồ Chí Minh",
    lat: 10.777885653969145,
    lng: 106.6791720871052
  },
  {
    name: "Highlands Coffee Saigon South HCM",
    address: "152 Nguyễn Lương Bằng P.Tân Phú Q.7, TP.HCM",
    lat: 10.729062299999999,
    lng: 106.72121537436453
  },
  {
    name: "Highlands Coffee RMIT - HCM",
    address: "702 Nguyễn Văn Linh P.Tân Phong Q.7, TP.HCM",
    lat: 10.729755149999999,
    lng: 106.69401198787065
  },
  {
    name: "Highlands Coffee Lotte Mart 2 - HCM",
    address: "469 Nguyễn Hữu Thọ P.Tân Hưng Q.7, TP.HCM",
    lat: 10.74164,
    lng: 106.7017062
  },
  {
    name: "Highlands Coffee Phan Huy Ich - HCM",
    address: "399 Phan Huy Ích P.14 Q.Gò Vấp, TP.HCM",
    lat: 10.8371830453159,
    lng: 106.63621365278566
  },
  {
    name: "Highlands Coffee Nguyen Van Luong Gò Vấp",
    address: "507-509 Nguyễn Văn Lượng, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh",
    lat: 10.83594325,
    lng: 106.67343515
  },
  {
    name: "Highlands Coffee Vincom Plaza Quang Trung",
    address: "190 Quang Trung, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh",
    lat: 10.831414170784742,
    lng: 106.66852145740195
  },
  {
    name: "Highlands Coffee Nguyen Cu Trinh HCM",
    address: "369 - 371 Nguyễn Trãi, Nguyễn Cư Trinh, Quận 1",
    lat: 10.760723900063397,
    lng: 106.68552185757041
  },
  {
    name: "Highlands Coffee 149 Nguyen Xi HCM",
    address: "149 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
    lat: 10.815041170248781,
    lng: 106.70795667688375
  },
  {
    name: "Highlands Coffee Nguyen Xi HCM",
    address: "154 Nguyễn Xí P.26 Q.Bình Thạnh, TP.HCM",
    lat: 10.815041170248781,
    lng: 106.70795667688375
  },
  {
    name: "Highlands Coffee Liberty Plaza",
    address: "216-218 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Quận 1",
    lat: 10.757131729551793,
    lng: 106.6856860952705
  },
  {
    name: "Highlands Coffee D5 Nguyen Huu Canh, Q.Binh Thanh",
    address: "539 Đường D5, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh",
    lat: 10.805608143781573,
    lng: 106.7174110442381
  },
  {
    name: "Highlands Coffee Etown",
    address: "364 Cộng Hòa P.13 Q.Tân Bình, TP.HCM",
    lat: 10.80185,
    lng: 106.6407242
  },
  {
    name: "Highlands Coffee CT.Plaza Ground Floor Out Side",
    address: "60A Trường Sơn P.2 Q.Tân Bình, TP.HCM",
    lat: 10.80307525,
    lng: 106.66544504348394
  },
  {
    name: "Highlands Coffee Vincom Cong Hoa HCM",
    address: "15-17 Cộng Hòa P.4 Q.Tân Bình, TP.HCM",
    lat: 10.8004946,
    lng: 106.6588006
  },
  {
    name: "Highlands Coffee Bau Cat - HCM",
    address: "1-3-5 Bàu Cát P.14 Q.Tân Bình, TP.HCM",
    lat: 10.792632870364583,
    lng: 106.64210171491705
  },
  {
    name: "Highlands Coffee Tran Quoc Hoan Q.Tan Binh",
    address: "46 Trần Quốc Hoàn, Phường 4, Tân Bình, Thành phố Hồ Chí Minh",
    lat: 10.804094500889434,
    lng: 106.66415905029676
  },
  {
    name: "Highlands Coffee 18E Cong Hoa, Q.Tan Binh",
    address: "18E Cộng Hòa, Phường 4, Tân Bình, Thành phố Hồ Chí Minh",
    lat: 10.801131860164006,
    lng: 106.65733223805593
  },
  {
    name: "Highlands Coffee Padora Cộng Hòa",
    address: "246-248 Cộng Hòa, Phường 12, Tân Bình, Thành phố Hồ Chí Minh",
    lat: 10.802004172779654,
    lng: 106.65171648939489
  },
  {
    name: "Highlands Coffee Pico Plaza Cộng Hòa",
    address: "20 Cộng Hòa P. 12, Tân Bình",
    lat: 10.802004172779654,
    lng: 106.65171648939489
  },
  {
    name: "Highlands Coffee Pico Plaza",
    address: "364 Cộng Hòa, Phường 13, Tân Bình, Thành phố Hồ Chí Minh",
    lat: 10.8009329,
    lng: 106.6407219
  },
  {
    name: "Highlands Coffee Airport Plaza",
    address: "1 Bạch Đằng, Phường 2, Tân Bình, Thành phố Hồ Chí Minh",
    lat: 10.8143773,
    lng: 106.6702289
  },
  {
    name: "Highlands Coffee 106 Nguyễn Văn Trỗi Q. Phú Nhuận",
    address: "106 Nguyễn Văn Trỗi, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh",
    lat: 10.7973141,
    lng: 106.67324713544713
  },
  {
    name: "Highlands Coffee Central Point - HCM",
    address: "106 Nguyễn Văn Trỗi P.8 Q.Phú Nhuận, TP.HCM",
    lat: 10.7973141,
    lng: 106.67324713544713
  },
  {
    name: "Highlands Coffee Phan Xich Long HCM",
    address: "193 Phan Xích Long P.2 Q.Phú Nhuận, TP.HCM",
    lat: 10.800616193108603,
    lng: 106.68432727249072
  },
  {
    name: "Highlands Coffee Nguyen Trong Tuyen HCM",
    address: "129 Nguyễn Trọng Tuyển P.15 Q.Phú Nhuận, TP.HCM",
    lat: 10.79729817713031,
    lng: 106.67897744302499
  },
  {
    name: "Highlands Coffee 106 Hồ Văn Huê, Phú Nhuận",
    address: "106 Hồ Văn Huê, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh",
    lat: 10.80576054276535,
    lng: 106.67831244238461
  },
  {
    name: "Highlands Coffee Big C Hoàng Văn Thụ",
    address: "202B Hoàng Văn Thụ, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh",
    lat: 10.8002755,
    lng: 106.6700708
  },
  {
    name: "Highlands Coffee Superbowl Q.Phú Nhuận",
    address: "43A Trương Quốc Dung, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh",
    lat: 10.798528966522564,
    lng: 106.67284545911187
  },
  {
    name: "Highlands Coffee Vincom Thủ Đức",
    address: "216 Võ Văn Ngân, Bình Thọ, Thủ Đức, Thành phố Hồ Chí Minh",
    lat: 10.8498242,
    lng: 106.7652582621637
  },
  {
    name: "Highlands Coffee Co.opXtra Linh Trung, Thủ Đức",
    address: "Khu Chế Xuất Linh Trung I, Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh",
    lat: 10.866479250000001,
    lng: 106.77146307079583
  },
  {
    name: "Highlands Coffee Nguyen Duy Trinh",
    address: "307 Nguyễn Duy Trinh, Bình Trưng Tây, Thủ Đức, Thành phố Hồ Chí Minh",
    lat: 10.788314168182364,
    lng: 106.7581578817812
  },
  {
    name: "Highlands Coffee New City HCM",
    address: "17 Mai Chí Thọ P.An Khánh TP.Thủ Đức, TP.HCM",
    lat: 10.780987549999999,
    lng: 106.73822995
  },
  {
    name: "Highlands Coffee Phan Đình Phùng, Q. Tân Phú",
    address: "79-81 Phan Đình Phùng, Tân Thành, Tân Phú, Thành phố Hồ Chí Minh",
    lat: 10.790347738180255,
    lng: 106.63078657076312
  },
  {
    name: "Highlands Coffee Tân Thắng, Tân Phú",
    address: "81C đường Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú, Thành phố Hồ Chí Minh",
    lat: 10.799850833416704,
    lng: 106.61530243366681
  },
  {
    name: "Highlands Coffee Bờ Bao Tân Thắng Q.Tân Phú",
    address: "Số 2 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, Thành phố Hồ Chí Minh",
    lat: 10.80608264761128,
    lng: 106.62259411031923
  },
  {
    name: "Highlands Coffee Aeon Tân Phú",
    address: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, Thành phố Hồ Chí Minh",
    lat: 10.8013943,
    lng: 106.6186522
  },
  {
    name: "Highlands Coffee 28 Phan Đình Phùng, Tân Thành",
    address: "28 Phan Đình Phùng P. Tân Thành",
    lat: 10.790347738180255,
    lng: 106.63078657076312
  },
  {
    name: "Highlands Coffee La San Tan Phu",
    address: "285 Cách Mạng Tháng 8, Phường 12, Quận 10",
    lat: 10.77783285,
    lng: 106.67989419088198
  },
  {
    name: "Highlands Coffee Luy Ban Bich - HCM",
    address: "462 Lũy Bán Bích P.Hòa Thạnh Q. Tân Phú, TP.HCM",
    lat: 10.779151800000001,
    lng: 106.63564408343653
  },
  {
    name: "Highlands Coffee Nguyen Tri Phuong, P10",
    address: "726 Nguyễn Trãi P.11",
    lat: 10.75321628492547,
    lng: 106.66242842151496
  },
  {
    name: "Highlands Coffee Le Dai Hanh",
    address: "415 Lê Đại Hành, 11, Quận 11",
    lat: 10.7579857,
    lng: 106.65957325
  },
  {
    name: "Highlands Coffee 192 Nguyễn Tri Phương",
    address: "192 Nguyễn Tri Phương, Phường 4, Quận 10",
    lat: 10.76133845622658,
    lng: 106.66859558422696
  },
  {
    name: "Highlands Coffee Phu Tho Hoa, Q.11",
    address: "220 Phú Thọ Hòa, Phú Thọ Hòa, Tân Phú, Thành phố Hồ Chí Minh, Việt Nam",
    lat: 10.784713538559785,
    lng: 106.62710227460741
  },
  {
    name: "Highlands Coffee 22 Tran Hung Dao, Q.5",
    address: "22 Trần Hưng Đạo, P. Phạm Ngũ Lão, Quận 1",
    lat: 10.7673918,
    lng: 106.6946476
  },
  {
    name: "Highlands Coffee Nguyen Luong Bang, Q7",
    address: "152 Nguyễn Lương Bằng, P. Tân Phú, Quận 7",
    lat: 10.729062299999999,
    lng: 106.72121537436453
  },
  {
    name: "Highlands Coffee Pham Van Chieu, Q. Go Vap",
    address: "552-554 Phạm Văn Chiêu, P. 16, Quận Gò Vấp",
    lat: 10.851636943510037,
    lng: 106.65820771337647
  }
];

// Icon cho cửa hàng
const storeIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  shadowSize: [41, 41],
});

// Icon cho vị trí người dùng
const userIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  shadowSize: [41, 41],
});

// Khởi tạo bản đồ
function initMap(stores) {
  const hcmCenter = [10.7769, 106.7009];
  map = L.map("map", {
    center: hcmCenter,
    zoom: 12,
    zoomControl: true,
    scrollWheelZoom: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  stores.forEach((store) => {
    if (store.lat && store.lng) {
      const marker = L.marker([store.lat, store.lng], { icon: storeIcon })
        .addTo(map)
        .bindPopup(
          `
          <div class="popup-container">
            <button class="popup-close" aria-label="Close popup">✖</button>
            <div class="popup-left-container">
              <img src="assets/images/highlands-coffee-signature.jpg" alt="Highlands Coffee" class="popup-image">
              <a style="color: white" href="order.html?name=${encodeURIComponent(store.name)}&address=${encodeURIComponent(store.address)}" class="popup-order-btn">Đặt bàn</a>
            </div>
            <div class="popup-right-container">
              <div class="popup-name">${store.name}</div>
              <div class="popup-address-label">Địa chỉ:</div>
              <div class="popup-address">${store.address}</div>
            </div>
          </div>
          `,
          { closeButton: false }
        );
      marker.on('popupopen', () => {
        document.querySelector('.popup-close').addEventListener('click', () => marker.closePopup());
      });
      storeMarkers.push(marker);
    }
  });
}

// Hàm hiển thị gợi ý
function showSuggestions(inputValue, suggestionsContainer) {
  if (!inputValue) {
    suggestionsContainer.style.display = 'none';
    return;
  }

  const filteredStores = allStores.filter(store =>
    store.name.toLowerCase().includes(inputValue.toLowerCase()) ||
    store.address.toLowerCase().includes(inputValue.toLowerCase())
  );

  if (filteredStores.length === 0) {
    suggestionsContainer.style.display = 'none';
    return;
  }

  suggestionsContainer.innerHTML = '';
  filteredStores.slice(0, 10).forEach(store => { // Giới hạn 10 gợi ý
    const suggestionItem = document.createElement('div');
    suggestionItem.className = 'suggestion-item';
    suggestionItem.textContent = `${store.name} - ${store.address}`;
    suggestionItem.addEventListener('click', () => {
      document.getElementById('street').value = store.address;
      suggestionsContainer.style.display = 'none';
      filterStores(store.address); // Lọc ngay khi chọn gợi ý
    });
    suggestionsContainer.appendChild(suggestionItem);
  });
  suggestionsContainer.style.display = 'block';
}

// Hàm lọc cửa hàng và cập nhật bản đồ
function filterStores(searchText) {
  const filteredStores = allStores.filter(store =>
    searchText ? store.address.toLowerCase().includes(searchText.toLowerCase()) || store.name.toLowerCase().includes(searchText.toLowerCase()) : true
  );

  // Xóa các marker cũ
  storeMarkers.forEach(marker => map.removeLayer(marker));
  storeMarkers = [];

  // Thêm marker mới cho các cửa hàng lọc được
  if (filteredStores.length > 0) {
    filteredStores.forEach((store, index) => {
      if (store.lat && store.lng) {
        const marker = L.marker([store.lat, store.lng], { icon: storeIcon })
          .addTo(map)
          .bindPopup(
            `
            <div class="popup-container">
              <button class="popup-close" aria-label="Close popup">✖</button>
              <div class="popup-left-container">
                <img src="assets/images/highlands-coffee-signature.jpg" alt="Highlands Coffee" class="popup-image">
                <a style="color: white" href="order.html?name=${encodeURIComponent(store.name)}&address=${encodeURIComponent(store.address)}" class="popup-order-btn">Đặt bàn</a>
              </div>
              <div class="popup-right-container">
                <div class="popup-name">${store.name}</div>
                <div class="popup-address-label">Địa chỉ:</div>
                <div class="popup-address">${store.address}</div>
              </div>
            </div>
            `,
            { closeButton: false }
          );
        marker.on('popupopen', () => {
          document.querySelector('.popup-close').addEventListener('click', () => marker.closePopup());
        });
        storeMarkers.push(marker);

        // Zoom vào cửa hàng khớp chính xác nhất với chuỗi tìm kiếm (chỉ zoom vào kết quả đầu tiên)
        if (index === 0) {
          map.setView([store.lat, store.lng], 16); // Zoom level 16
          marker.openPopup();
        }
      }
    });
  } else {
    alert("Không tìm thấy cửa hàng nào phù hợp.");
  }
}

// Function to calculate distance between two coordinates
function distance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// Function to find the nearest stores
function findNearestStores(userLat, userLng, stores) {
  const storesWithDistance = stores.map(store => {
    const dist = distance(userLat, userLng, store.lat, store.lng);
    return { ...store, distance: dist };
  });

  storesWithDistance.sort((a, b) => a.distance - b.distance);
  return storesWithDistance.slice(0, 3);
}

// Function to change marker color
function changeMarkerColor(marker, color) {
  const newIcon = L.icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    shadowSize: [41, 41],
  });
  marker.setIcon(newIcon);
}

// Xử lý nút "Xác định vị trí của tôi"
document.getElementById("getLocationBtn").addEventListener("click", () => {
  const locationModal = document.getElementById("locationModal");
  locationModal.style.display = "flex";

  document.getElementById("allowLocationBtn").addEventListener("click", () => {
    locationModal.style.display = "none";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          map.setView([lat, lng], 15);
          if (userMarker) map.removeLayer(userMarker);
          userMarker = L.marker([lat, lng], { icon: userIcon }).addTo(map).bindPopup("<b>Vị trí của bạn</b>").openPopup();

          // Find nearest stores and highlight them
          const nearestStores = findNearestStores(lat, lng, allStores);

          // Change the color of the nearest store markers
          storeMarkers.forEach(marker => {
            const store = allStores.find(s => s.lat === marker.getLatLng().lat && s.lng === marker.getLatLng().lng);
            if (nearestStores.some(nearest => nearest.name === store.name)) {
              changeMarkerColor(marker, 'blue'); // Change to blue for nearest stores
            }
          });
        },
        (error) => {
          console.error("Lỗi xác định vị trí:", error);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
  });

  document.getElementById("denyLocationBtn").addEventListener("click", () => {
    locationModal.style.display = "none";
  });
});

// Xử lý form tìm kiếm và gợi ý
document.addEventListener("DOMContentLoaded", () => {
  initMap(allStores);

  const streetInput = document.getElementById('street');
  const suggestionsContainer = document.getElementById('suggestions');

  streetInput.addEventListener('input', () => {
    const inputValue = streetInput.value.trim();
    showSuggestions(inputValue, suggestionsContainer);
  });

  // Ẩn gợi ý khi click ra ngoài
  document.addEventListener('click', (e) => {
    if (!streetInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
      suggestionsContainer.style.display = 'none';
    }
  });

  document.querySelector('.search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = streetInput.value.trim();
    filterStores(searchText);
    suggestionsContainer.style.display = 'none';
  });
});