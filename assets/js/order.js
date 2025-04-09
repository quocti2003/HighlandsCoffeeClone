// Xử lý URL parameters
const allStores = [
  {
    name: 'Highlands Coffee 2B Le Duan HCM',
    address: '2B Lê Duẩn P.Bến Nghé Q.1, TP.HCM'
  },
  {
    name: 'Highlands Coffee DIAMOND HCM',
    address: '34 Lê Duẩn P.Bến Nghé Q.1, TP.HCM'
  },
  {
    name: 'Highlands Coffee NDC - HCM',
    address: '27B Nguyễn Đình Chiểu P.Đa Kao Q.1, TP.HCM'
  },
  {
    name: 'Highlands Coffee Liberty HCM',
    address: '187 Phạm Ngũ Lão P.Phạm Ngũ Lão Q.1, TP.HCM'
  },
  {
    name: 'Highlands Coffee Calmette - HCM',
    address: '161-163 Calmette P.Nguyễn Thái Bình Q.1, TP.HCM'
  },
  {
    name: 'Highlands Coffee Nguyen Thai Hoc HCM',
    address: '132A Nguyễn Thái Học P.Phạm Ngũ Lão Q.1, TP.HCM'
  },
  {
    name: 'Highlands Coffee City Museum',
    address: '65 Lý Tự Trọng P.Bến Nghé Q.1, TP.HCM'
  },
  {
    name: 'Highlands Coffee CMT8 - HCM',
    address: '90 Cách Mạng Tháng Tám P.Võ Thị Sáu Q.3, TP.HCM'
  },
  {
    name: 'Highlands Coffee Hai Ba Trung HCM',
    address: '265 Hai Bà Trưng P.Võ Thị Sáu Q.3, TP.HCM'
  },
  {
    name: 'Highlands Coffee Ly Chinh Thang HCM',
    address: '45 Lý Chính Thắng P.Võ Thị Sáu Q.3, TP.HCM'
  },
  {
    name: 'Highlands Coffee Saigon Pavillon HCM',
    address: '53-55 Bà Huyện Thanh Quan P.Võ Thị Sáu Q.3, TP.HCM'
  },
  {
    name: 'Highlands Coffee 91 Nguyen Thien Thuat, Q3',
    address: '91 Nguyễn Thiện Thuật, Phường 2, Quận 3, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee KY DONG, Q3',
    address: '138bis Kỳ Đồng, Phường 9, Quận 3, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee CMT8 SACOMBANK TOWER',
    address: '278 Cách Mạng Tháng 8, Phường 10, Quận 3, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Saigon South HCM',
    address: '152 Nguyễn Lương Bằng P.Tân Phú Q.7, TP.HCM'
  },
  {
    name: 'Highlands Coffee RMIT - HCM',
    address: '702 Nguyễn Văn Linh P.Tân Phong Q.7, TP.HCM'
  },
  {
    name: 'Highlands Coffee Lotte Mart 2 - HCM',
    address: '469 Nguyễn Hữu Thọ P.Tân Hưng Q.7, TP.HCM'
  },
  {
    name: 'Highlands Coffee Phan Huy Ich - HCM',
    address: '399 Phan Huy Ích P.14 Q.Gò Vấp, TP.HCM'
  },
  {
    name: 'Highlands Coffee Nguyen Van Luong Gò Vấp',
    address: '507-509 Nguyễn Văn Lượng, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Vincom Plaza Quang Trung',
    address: '190 Quang Trung, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Nguyen Cu Trinh HCM',
    address: '369 - 371 Nguyễn Trãi, Nguyễn Cư Trinh, Quận 1'
  },
  {
    name: 'Highlands Coffee 149 Nguyen Xi HCM',
    address: '149 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Nguyen Xi HCM',
    address: '154 Nguyễn Xí P.26 Q.Bình Thạnh, TP.HCM'
  },
  {
    name: 'Highlands Coffee Liberty Plaza',
    address: '216-218 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Quận 1'
  },
  {
    name: 'Highlands Coffee D5 Nguyen Huu Canh, Q.Binh Thanh',
    address: '539 Đường D5, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Etown',
    address: '364 Cộng Hòa P.13 Q.Tân Bình, TP.HCM'
  },
  {
    name: 'Highlands Coffee CT.Plaza Ground Floor Out Side',
    address: '60A Trường Sơn P.2 Q.Tân Bình, TP.HCM'
  },
  {
    name: 'Highlands Coffee Vincom Cong Hoa HCM',
    address: '15-17 Cộng Hòa P.4 Q.Tân Bình, TP.HCM'
  },
  {
    name: 'Highlands Coffee Bau Cat - HCM',
    address: '1-3-5 Bàu Cát P.14 Q.Tân Bình, TP.HCM'
  },
  {
    name: 'Highlands Coffee Tran Quoc Hoan Q.Tan Binh',
    address: '46 Trần Quốc Hoàn, Phường 4, Tân Bình, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee 18E Cong Hoa, Q.Tan Binh',
    address: '18E Cộng Hòa, Phường 4, Tân Bình, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Padora Cộng Hòa',
    address: '246-248 Cộng Hòa, Phường 12, Tân Bình, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Pico Plaza Cộng Hòa',
    address: '20 Cộng Hòa P. 12, Tân Bình'
  },
  {
    name: 'Highlands Coffee Pico Plaza',
    address: '364 Cộng Hòa, Phường 13, Tân Bình, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Airport Plaza',
    address: '1 Bạch Đằng, Phường 2, Tân Bình, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee 106 Nguyễn Văn Trỗi Q. Phú Nhuận',
    address: '106 Nguyễn Văn Trỗi, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Central Point - HCM',
    address: '106 Nguyễn Văn Trỗi P.8 Q.Phú Nhuận, TP.HCM'
  },
  {
    name: 'Highlands Coffee Phan Xich Long HCM',
    address: '193 Phan Xích Long P.2 Q.Phú Nhuận, TP.HCM'
  },
  {
    name: 'Highlands Coffee Nguyen Trong Tuyen HCM',
    address: '129 Nguyễn Trọng Tuyển P.15 Q.Phú Nhuận, TP.HCM'
  },
  {
    name: 'Highlands Coffee 106 Hồ Văn Huê, Phú Nhuận',
    address: '106 Hồ Văn Huê, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Big C Hoàng Văn Thụ',
    address: '202B Hoàng Văn Thụ, Phường 9, Phú Nhuận, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Superbowl Q.Phú Nhuận',
    address: '43A Trương Quốc Dung, Phường 8, Phú Nhuận, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Vincom Thủ Đức',
    address: '216 Võ Văn Ngân, Bình Thọ, Thủ Đức, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Co.opXtra Linh Trung, Thủ Đức',
    address: 'Khu Chế Xuất Linh Trung I, Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Nguyen Duy Trinh',
    address: '307 Nguyễn Duy Trinh, Bình Trưng Tây, Thủ Đức, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee New City HCM',
    address: '17 Mai Chí Thọ P.An Khánh TP.Thủ Đức, TP.HCM'
  },
  {
    name: 'Highlands Coffee Phan Đình Phùng, Q. Tân Phú',
    address: '79-81 Phan Đình Phùng, Tân Thành, Tân Phú, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Tân Thắng, Tân Phú',
    address: '81C đường Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Bờ Bao Tân Thắng Q.Tân Phú',
    address: 'Số 2 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee Aeon Tân Phú',
    address: '30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, Thành phố Hồ Chí Minh'
  },
  {
    name: 'Highlands Coffee 28 Phan Đình Phùng, Tân Thành',
    address: '28 Phan Đình Phùng P. Tân Thành'
  },
  {
    name: 'Highlands Coffee La San Tan Phu',
    address: '285 Cách Mạng Tháng 8, Phường 12, Quận 10'
  },
  {
    name: 'Highlands Coffee Luy Ban Bich - HCM',
    address: '462 Lũy Bán Bích P.Hòa Thạnh Q. Tân Phú, TP.HCM'
  },
  {
    name: 'Highlands Coffee Nguyen Tri Phuong, P10',
    address: '726 Nguyễn Trãi P.11'
  },
  {
    name: 'Highlands Coffee Le Dai Hanh',
    address: '415 Lê Đại Hành, 11, Quận 11'
  },
  {
    name: 'Highlands Coffee 192 Nguyễn Tri Phương',
    address: '192 Nguyễn Tri Phương, Phường 4, Quận 10'
  },
  {
    name: 'Highlands Coffee Phu Tho Hoa, Q.11',
    address: '220 Phú Thọ Hòa, Phú Thọ Hòa, Tân Phú, Thành phố Hồ Chí Minh, Việt Nam'
  },
  {
    name: 'Highlands Coffee 22 Tran Hung Dao, Q.5',
    address: '22 Trần Hưng Đạo, P. Phạm Ngũ Lão, Quận 1'
  },
  {
    name: 'Highlands Coffee Nguyen Luong Bang, Q7',
    address: '152 Nguyễn Lương Bằng, P. Tân Phú, Quận 7'
  },
  {
    name: 'Highlands Coffee Pham Van Chieu, Q. Go Vap',
    address: '552-554 Phạm Văn Chiêu, P. 16, Quận Gò Vấp'
  }
];

// Xử lý URL parameters và logic chính
document.addEventListener('DOMContentLoaded', () => {
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  const storeNameFromURL = getParameterByName('name');
  const storeAddressFromURL = getParameterByName('address');
  const nameStore = document.querySelector('.nameStore');
  const addressDisplay = document.querySelector('.address-display');
  const availableTables = document.querySelector('.available-tables');
  let maxCapacity;

  // Trường hợp 1: Chọn từ popup marker (có tham số URL)
  if (storeNameFromURL && storeAddressFromURL) {
    nameStore.textContent = storeNameFromURL;
    addressDisplay.outerHTML = `<input type="text" id="address-input" class="address-input" value="${storeAddressFromURL}" disabled>`;
    maxCapacity = Math.floor(Math.random() * (50 - 2 + 1)) + 2;
    availableTables.textContent = `Sức chứa tối đa: ${maxCapacity} khách`;
  } 
  // Trường hợp 2: Chọn từ thanh menu (không có tham số URL)
  else {
    nameStore.textContent = 'Highlands Coffee';
    addressDisplay.outerHTML = `
      <input type="text" id="address-input" class="address-input" placeholder="Nhập địa chỉ cửa hàng" list="store-list">
      <datalist id="store-list"></datalist>
    `;
    const addressInput = document.getElementById('address-input');
    const datalist = document.getElementById('store-list');

    // Điền tất cả địa chỉ vào datalist
    allStores.forEach(store => {
      const option = document.createElement('option');
      option.value = store.address;
      datalist.appendChild(option);
    });

    // Ban đầu sức chứa là 0
    maxCapacity = 0;
    availableTables.textContent = `Sức chứa tối đa: ${maxCapacity} khách`;

    // Xử lý khi người dùng nhập hoặc chọn địa chỉ
    addressInput.addEventListener('change', () => {
      const inputValue = addressInput.value.trim();
      const matchedStore = allStores.find(store => store.address.toLowerCase() === inputValue.toLowerCase());

      if (matchedStore) {
        nameStore.textContent = matchedStore.name;
        maxCapacity = Math.floor(Math.random() * (50 - 2 + 1)) + 2;
        availableTables.textContent = `Sức chứa tối đa: ${maxCapacity} khách`;
        window.maxCapacity = maxCapacity;
      } else if (inputValue.length > 0) {
        alert('Địa chỉ không tồn tại. Vui lòng chọn địa chỉ từ danh sách!');
        addressInput.value = '';
        nameStore.textContent = 'Highlands Coffee';
        availableTables.textContent = `Sức chứa tối đa: 0 khách`;
        maxCapacity = 0;
        window.maxCapacity = maxCapacity;
      }
      window.updateIncreaseButtons();
    });
  }

  // Lấy các phần tử DOM
  const form = document.querySelector('.booking-form');
  const popup = document.getElementById('confirmation-popup');
  const closeBtn = document.querySelector('.close-btn');
  const confirmBtn = document.querySelector('.confirm-btn');

  // Hàm thiết lập tăng giảm số lượng bàn
  function setupQuantityControls(tableId, qtyId) {
    const tableOption = document.getElementById(tableId);
    const qtyInput = document.getElementById(qtyId);
    const decreaseButton = document.querySelector(`#${tableId} ~ .quantity-control .decrease`);
    const increaseButton = document.querySelector(`#${tableId} ~ .quantity-control .increase`);

    decreaseButton.addEventListener('click', () => {
      if (tableOption.checked) {
        let currentValue = parseInt(qtyInput.value) || 0;
        if (currentValue > 0) {
          qtyInput.value = currentValue - 1;
          updateIncreaseButtons();
        }
      }
    });

    increaseButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (tableOption.checked) {
        const currentValue = parseInt(qtyInput.value) || 0;
        const totalGuests = getTotalMaxGuests();
        const newTotalGuests = totalGuests + tableOptions.find(opt => opt.checkboxId === tableId).maxGuests;
        if (newTotalGuests <= maxCapacity) {
          qtyInput.value = currentValue + 1;
          updateIncreaseButtons();
        } else {
          alert(`Đã hết chỗ! Sức chứa tối đa là ${maxCapacity} khách.`);
          updateIncreaseButtons();
        }
      }
    });

    qtyInput.addEventListener('input', () => {
      const currentValue = parseInt(qtyInput.value) || 0;
      const totalGuests = getTotalMaxGuests();
      if (totalGuests > maxCapacity) {
        alert(`Số khách (${totalGuests}) vượt quá sức chứa tối đa (${maxCapacity}). Vui lòng giảm số lượng!`);
        const excessGuests = totalGuests - maxCapacity;
        const maxGuestsPerTable = tableOptions.find(opt => opt.qtyId === qtyId).maxGuests;
        const maxAllowedTables = Math.floor((maxCapacity - (totalGuests - (currentValue * maxGuestsPerTable))) / maxGuestsPerTable);
        qtyInput.value = maxAllowedTables > 0 ? maxAllowedTables : 0;
      }
      tableOption.checked = currentValue > 0;
      updateIncreaseButtons();
    });

    tableOption.addEventListener('change', () => {
      if (!tableOption.checked) {
        qtyInput.value = 0;
        updateIncreaseButtons();
      }
    });
  }

  // Thiết lập điều khiển cho từng loại bàn
  const tableOptions = [
    { checkboxId: 'table-1-2', qtyId: 'qty-1-2', maxGuests: 2 },
    { checkboxId: 'table-4-6', qtyId: 'qty-4-6', maxGuests: 6 },
    { checkboxId: 'table-8-12', qtyId: 'qty-8-12', maxGuests: 12 }
  ];

  setupQuantityControls('table-1-2', 'qty-1-2');
  setupQuantityControls('table-4-6', 'qty-4-6');
  setupQuantityControls('table-8-12', 'qty-8-12');

  // Hàm tính tổng số khách tối đa
  function getTotalMaxGuests() {
    let totalGuests = 0;
    tableOptions.forEach(opt => {
      const checkbox = document.getElementById(opt.checkboxId);
      const qty = parseInt(document.getElementById(opt.qtyId).value) || 0;
      if (checkbox.checked) {
        totalGuests += qty * opt.maxGuests;
      }
    });
    return totalGuests;
  }

  // Hàm cập nhật trạng thái nút tăng
  function updateIncreaseButtons() {
    const totalGuests = getTotalMaxGuests();
    tableOptions.forEach(opt => {
      const increaseBtn = document.querySelector(`#${opt.checkboxId} ~ .quantity-control .increase`);
      increaseBtn.disabled = maxCapacity === 0 || totalGuests >= maxCapacity;
    });
  }
  window.updateIncreaseButtons = updateIncreaseButtons;

  // Hàm reset form
  function resetForm() {
    form.reset();
    const checkboxes = document.querySelectorAll('.table-option input[type="checkbox"]');
    const qtyInputs = document.querySelectorAll('.table-option input[type="number"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    qtyInputs.forEach(input => input.value = 0);
    updateIncreaseButtons();
  }

  // Xử lý submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const totalGuests = getTotalMaxGuests();
    const addressInput = document.getElementById('address-input');

    if (maxCapacity === 0) {
      alert('Vui lòng chọn địa chỉ cửa hàng hợp lệ trước khi đặt bàn!');
      return;
    }

    if (totalGuests > maxCapacity) {
      alert(`Số khách (${totalGuests}) vượt quá sức chứa tối đa (${maxCapacity}). Vui lòng giảm số lượng bàn!`);
      return;
    }

    const name = document.getElementById('user-name').value;
    const phone = document.getElementById('phone-number').value;
    const datetime = document.getElementById('booking-datetime').value;
    const address = addressInput.value;

    document.getElementById('popup-name').textContent = name;
    document.getElementById('popup-phone').textContent = phone;
    document.getElementById('popup-datetime').textContent = new Date(datetime).toLocaleString('vi-VN');
    document.getElementById('popup-address').textContent = address;

    const tableList = document.getElementById('popup-tables');
    tableList.innerHTML = '';
    let totalPrice = 0;

    const tables = [
      { id: 'table-1-2', qtyId: 'qty-1-2', price: 10000, label: 'Bàn 1-2 khách' },
      { id: 'table-4-6', qtyId: 'qty-4-6', price: 20000, label: 'Bàn 4-6 khách' },
      { id: 'table-8-12', qtyId: 'qty-8-12', price: 40000, label: 'Bàn 8-12 khách' }
    ];

    tables.forEach(table => {
      const isChecked = document.getElementById(table.id).checked;
      const qty = parseInt(document.getElementById(table.qtyId).value) || 0;
      if (isChecked && qty > 0) {
        const subtotal = table.price * qty;
        totalPrice += subtotal;
        const li = document.createElement('li');
        li.textContent = `${table.label}: ${qty} bàn - ${subtotal.toLocaleString('vi-VN')} VND`;
        tableList.appendChild(li);
      }
    });

    document.getElementById('popup-total').textContent = totalPrice.toLocaleString('vi-VN') + ' VND';
    popup.style.display = 'flex';
    document.body.classList.add('popup-active');
  });

  // Đóng popup
  closeBtn.addEventListener('click', closePopup);
  confirmBtn.addEventListener('click', closePopup);

  function closePopup() {
    popup.style.display = 'none';
    document.body.classList.remove('popup-active');
    resetForm();
  }

  // Khởi tạo trạng thái nút tăng
  updateIncreaseButtons();
});