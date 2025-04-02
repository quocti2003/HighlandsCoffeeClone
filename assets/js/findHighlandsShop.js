let map;
let userMarker;
let storeMarkers = [];
let allStores = []; // Lưu trữ toàn bộ danh sách cửa hàng từ JSON

// Hàm đọc dữ liệu từ file JSON
async function loadStoresFromJson() {
  try {
    const response = await fetch('../../server/ListHighlandsShops.json');
    const stores = await response.json();
    return stores;
  } catch (error) {
    console.error("Lỗi khi đọc file ListHighlandsShops.json:", error);
    return [];
  }
}

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
  // Remove the district filtering since you don't store it
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

  // Nếu không có cửa hàng nào khớp chính xác, zoom vào cửa hàng đầu tiên trong danh sách lọc
  /*if (filteredStores.length > 0 && filteredStores[0].lat && filteredStores[0].lng && !searchText) {
    map.setView([filteredStores[0].lat, filteredStores[0].lng], 14);
  }*/ //This code is not needed since we will always zoom to the first result and open its popup.
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
    return deg * (Math.PI / 180)
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
document.addEventListener("DOMContentLoaded", async () => {
  allStores = await loadStoresFromJson();
  initMap(allStores);

  const streetInput = document.getElementById('street');
  const suggestionsContainer = document.getElementById('suggestions');
  const districtInput = document.getElementById('district'); // Get the district input


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
    const searchText = streetInput.value.trim(); // Changed street to searchText for consistency
    filterStores(searchText); //Call the filterStores function passing the searchText
    suggestionsContainer.style.display = 'none';
  });
});











// const stores = [
//   // Quận 1
//   { name: "Highlands Coffee Phạm Ngũ Lão", address: "187 Phạm Ngũ Lão, Quận 1, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Lê Duẩn", address: "34 Lê Duẩn, Bến Nghé, Quận 1, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nguyễn Thái Học", address: "132A Nguyễn Thái Học, Phường Phạm Ngũ Lão, Quận 1, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nguyễn Trãi", address: "210 Nguyễn Trãi, Phường Phạm Ngũ Lão, Quận 1, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Đồng Khởi", address: "106 Đồng Khởi, Bến Nghé, Quận 1, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nguyễn Huệ", address: "123 Nguyễn Huệ, Bến Nghé, Quận 1, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Lê Lợi", address: "456 Lê Lợi, Bến Thành, Quận 1, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Pasteur", address: "789 Pasteur, Bến Nghé, Quận 1, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   // Quận 3
//   { name: "Highlands Coffee Nguyễn Thị Minh Khai", address: "101 Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Cao Thắng", address: "2 Cao Thắng, Phường 5, Quận 3, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nam Kỳ Khởi Nghĩa", address: "234 Nam Kỳ Khởi Nghĩa, Phường 6, Quận 3, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Lê Văn Sỹ", address: "456 Lê Văn Sỹ, Phường 14, Quận 3, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   // Quận 7
//   { name: "Highlands Coffee Tôn Dật Tiên", address: "Tôn Dật Tiên, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nguyễn Thị Thập", address: "139 Nguyễn Thị Thập, Phường Tân Hưng, Quận 7, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nguyễn Hữu Thọ", address: "77 Nguyễn Hữu Thọ, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Tân Trào", address: "Tòa nhà UOA Tower, 6 Tân Trào, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nguyễn Văn Linh", address: "123 Nguyễn Văn Linh, Phường Tân Thuận Tây, Quận 7, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Lê Văn Lương", address: "456 Lê Văn Lương, Phường Tân Hưng, Quận 7, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Hoàng Văn Thái", address: "77 Hoàng Văn Thái, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nguyễn Đức Cảnh", address: "234 Nguyễn Đức Cảnh, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Bùi Bằng Đoàn", address: "567 Bùi Bằng Đoàn, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   // Quận Bình Thạnh
//   { name: "Highlands Coffee Điện Biên Phủ", address: "561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee The Manor", address: "94 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Vincom Saigonres", address: "79/81 Nguyễn Xí, Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Đinh Bộ Lĩnh", address: "170-172 Đinh Bộ Lĩnh, Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Xô Viết Nghệ Tĩnh", address: "123 Xô Viết Nghệ Tĩnh, Phường 17, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nguyễn Gia Trí", address: "456 Nguyễn Gia Trí (D2), Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Ung Văn Khiêm", address: "234 Ung Văn Khiêm, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   { name: "Highlands Coffee Nguyễn Hữu Cảnh", address: "567 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
//   // Quận Phú Nhuận 
//   { name: "Highlands Coffee Hoàng Văn Thụ", address: "213 Hoàng Văn Thụ, Phường 8, Quận Phú Nhuận, TP. Hồ Chí Minh, Việt Nam", lat: null, lng: null },
// ];