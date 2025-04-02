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

  // Hiển thị pop-up và làm tối nền
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