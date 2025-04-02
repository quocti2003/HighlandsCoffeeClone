// Thêm code mới để xử lý URL parameters (không sửa code gốc)
document.addEventListener('DOMContentLoaded', () => {
  // Hàm lấy tham số từ URL (tái sử dụng từ code trước đó của bạn)
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Lấy name và address từ URL
  const storeName = getParameterByName('name');
  const storeAddress = getParameterByName('address');

  // Cập nhật giao diện với name và address từ URL
  if (storeName && storeAddress) {
    document.querySelector('.nameStore').textContent = storeName;
    document.querySelector('.address-display').textContent = storeAddress;
  } else {
    document.querySelector('.nameStore').textContent = 'Highlands Coffee';
    document.querySelector('.address-display').textContent = 'Vui lòng chọn cửa hàng từ trang tìm kiếm.';
  }
});

// Code gốc của bạn (giữ nguyên hoàn toàn)
// Lấy các phần tử DOM
const form = document.querySelector('.booking-form');
const popup = document.getElementById('confirmation-popup');
const closeBtn = document.querySelector('.close-btn');
const confirmBtn = document.querySelector('.confirm-btn');

// Hàm xử lý tăng giảm số lượng bàn
function setupQuantityControls(tableId, qtyId) {
  const tableOption = document.getElementById(tableId); // Checkbox
  const qtyInput = document.getElementById(qtyId); // Input số lượng
  const decreaseButton = document.querySelector(`#${tableId} ~ .quantity-control .decrease`);
  const increaseButton = document.querySelector(`#${tableId} ~ .quantity-control .increase`);

  decreaseButton.addEventListener('click', () => {
    if (tableOption.checked) { // Chỉ giảm nếu checkbox được chọn
      let currentValue = parseInt(qtyInput.value) || 0;
      if (currentValue > 0) {
        qtyInput.value = currentValue - 1;
      }
    }
  });

  increaseButton.addEventListener('click', () => {
    if (tableOption.checked) { // Chỉ tăng nếu checkbox được chọn
      let currentValue = parseInt(qtyInput.value) || 0;
      qtyInput.value = currentValue + 1;
    }
  });

  // Khi checkbox bị bỏ chọn, đặt lại số lượng về 0
  tableOption.addEventListener('change', () => {
    if (!tableOption.checked) {
      qtyInput.value = 0;
    }
  });
}

// Thiết lập điều khiển tăng giảm số lượng cho từng loại bàn
setupQuantityControls('table-1-2', 'qty-1-2');
setupQuantityControls('table-4-6', 'qty-4-6');
setupQuantityControls('table-8-12', 'qty-8-12');

// Hàm reset form
function resetForm() {
  form.reset(); // Reset các trường input về giá trị mặc định
  const checkboxes = document.querySelectorAll('.table-option input[type="checkbox"]');
  const qtyInputs = document.querySelectorAll('.table-option input[type="number"]');

  checkboxes.forEach(checkbox => {
    checkbox.checked = false; // Bỏ chọn tất cả checkbox
  });

  qtyInputs.forEach(input => {
    input.value = 0; // Đặt lại số lượng về 0
  });
}

// Xử lý khi submit form
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Ngăn form submit thật

  // Tính tổng số khách tối đa trước khi xử lý
  const totalGuests = getTotalMaxGuests();
  const maxCapacity = parseInt(document.querySelector('.available-tables').textContent.match(/\d+/)[0]); // Lấy sức chứa tối đa từ text

  // Kiểm tra nếu tổng số khách vượt quá sức chứa tối đa
  if (totalGuests > maxCapacity) {
    alert(`Số khách (${totalGuests}) vượt quá sức chứa tối đa (${maxCapacity}). Vui lòng giảm số lượng bàn!`);
    return; // Không hiển thị popup nếu vượt quá
  }

  // Lấy dữ liệu từ form
  const name = document.getElementById('user-name').value;
  const phone = document.getElementById('phone-number').value;
  const datetime = document.getElementById('booking-datetime').value;
  const address = document.querySelector('.address-display').textContent;

  // Hiển thị thông tin trong pop-up
  document.getElementById('popup-name').textContent = name;
  document.getElementById('popup-phone').textContent = phone;
  document.getElementById('popup-datetime').textContent = new Date(datetime).toLocaleString('vi-VN');
  document.getElementById('popup-address').textContent = address;

  // Xử lý loại bàn và tính tổng tiền
  const tableList = document.getElementById('popup-tables');
  tableList.innerHTML = ''; // Xóa danh sách cũ
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

  // Hiển thị pop-up và làm tối nền chỉ khi hợp lệ
  popup.style.display = 'flex';
  document.body.classList.add('popup-active');
});

// Đóng pop-up và reset form khi nhấn dấu X hoặc nút Xác nhận
closeBtn.addEventListener('click', closePopup);
confirmBtn.addEventListener('click', closePopup);

function closePopup() {
  popup.style.display = 'none';
  document.body.classList.remove('popup-active');
  resetForm(); // Gọi hàm reset form khi đóng pop-up
}

// Code mới thêm vào để xử lý sức chứa tối đa và disable nút tăng
document.addEventListener('DOMContentLoaded', () => {
  // Phần 1: Tạo sức chứa tối đa ngẫu nhiên
  const maxCapacity = Math.floor(Math.random() * (50 - 2 + 1)) + 2; // Từ 2 đến 50 khách
  document.querySelector('.available-tables').textContent = `Sức chứa tối đa: ${maxCapacity} khách`;

  // Phần 2: Định nghĩa thông tin các loại bàn với số khách tối đa
  const tableOptions = [
    { checkboxId: 'table-1-2', qtyId: 'qty-1-2', maxGuests: 2, decreaseBtn: '.decrease', increaseBtn: '.increase' },
    { checkboxId: 'table-4-6', qtyId: 'qty-4-6', maxGuests: 6, decreaseBtn: '.decrease', increaseBtn: '.increase' },
    { checkboxId: 'table-8-12', qtyId: 'qty-8-12', maxGuests: 12, decreaseBtn: '.decrease', increaseBtn: '.increase' }
  ];

  // Hàm tính tổng số khách tối đa từ các bàn được tick
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

  // Hàm cập nhật trạng thái các nút tăng và kiểm tra sức chứa
  function updateIncreaseButtons() {
    const totalGuests = getTotalMaxGuests();
    tableOptions.forEach(opt => {
      const increaseBtn = document.querySelector(`#${opt.checkboxId} ~ .quantity-control ${opt.increaseBtn}`);
      increaseBtn.disabled = totalGuests >= maxCapacity; // Disable nếu tổng số khách >= sức chứa tối đa
    });
  }

  // Phần 3: Kiểm tra và xử lý số lượng bàn dựa trên sức chứa tối đa
  tableOptions.forEach(option => {
    const checkbox = document.getElementById(option.checkboxId);
    const qtyInput = document.getElementById(option.qtyId);
    const decreaseBtn = document.querySelector(`#${option.checkboxId} ~ .quantity-control ${option.decreaseBtn}`);
    const increaseBtn = document.querySelector(`#${option.checkboxId} ~ .quantity-control ${option.increaseBtn}`);

    // Ghi đè sự kiện tăng số lượng (tăng từng bước 1)
    increaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (checkbox.checked) {
        const currentValue = parseInt(qtyInput.value) || 0;
        const totalGuests = getTotalMaxGuests();
        const newTotalGuests = totalGuests + option.maxGuests;
        if (newTotalGuests <= maxCapacity) {
          qtyInput.value = currentValue + 1; // Tăng từng bước 1
          updateIncreaseButtons(); // Cập nhật trạng thái nút tăng
        } else {
          alert(`Đã hết chỗ! Sức chứa tối đa của cửa hàng là ${maxCapacity} khách.`);
          updateIncreaseButtons(); // Đảm bảo nút bị disable
        }
      }
    });

    // Ghi đè sự kiện giảm số lượng
    decreaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (checkbox.checked) {
        const currentValue = parseInt(qtyInput.value) || 0;
        if (currentValue > 0) {
          qtyInput.value = currentValue - 1;
          updateIncreaseButtons(); // Cập nhật trạng thái nút tăng
        }
      }
    });

    // Kiểm tra khi người dùng nhập tay vào input
    qtyInput.addEventListener('input', () => {
      const currentValue = parseInt(qtyInput.value) || 0;
      const totalGuests = getTotalMaxGuests();
      if (totalGuests > maxCapacity) {
        alert(`Số khách (${totalGuests}) vượt quá sức chứa tối đa (${maxCapacity}). Vui lòng giảm số lượng!`);
        const excessGuests = totalGuests - maxCapacity;
        const maxAllowedTables = Math.floor((maxCapacity - (totalGuests - (currentValue * option.maxGuests))) / option.maxGuests);
        qtyInput.value = maxAllowedTables > 0 ? maxAllowedTables : 0;
      }
      if (currentValue > 0) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
      updateIncreaseButtons(); // Cập nhật trạng thái nút tăng
    });

    // Cập nhật trạng thái nút khi checkbox thay đổi
    checkbox.addEventListener('change', () => {
      updateIncreaseButtons(); // Cập nhật trạng thái nút tăng
    });
  });

  // Khởi tạo trạng thái ban đầu của các nút tăng
  updateIncreaseButtons();
});