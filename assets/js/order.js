// Xử lý URL parameters
document.addEventListener('DOMContentLoaded', () => {
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  const storeName = getParameterByName('name');
  const storeAddress = getParameterByName('address');

  if (storeName && storeAddress) {
    document.querySelector('.nameStore').textContent = storeName;
    document.querySelector('.address-display').textContent = storeAddress;
  } else {
    document.querySelector('.nameStore').textContent = 'Highlands Coffee';
    document.querySelector('.address-display').textContent = 'Vui lòng chọn cửa hàng từ trang tìm kiếm.';
  }
});

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
      }
    }
  });

  increaseButton.addEventListener('click', () => {
    if (tableOption.checked) {
      let currentValue = parseInt(qtyInput.value) || 0;
      qtyInput.value = currentValue + 1;
    }
  });

  tableOption.addEventListener('change', () => {
    if (!tableOption.checked) {
      qtyInput.value = 0;
    }
  });
}

// Thiết lập điều khiển cho từng loại bàn
setupQuantityControls('table-1-2', 'qty-1-2');
setupQuantityControls('table-4-6', 'qty-4-6');
setupQuantityControls('table-8-12', 'qty-8-12');

// Hàm reset form
function resetForm() {
  form.reset();
  const checkboxes = document.querySelectorAll('.table-option input[type="checkbox"]');
  const qtyInputs = document.querySelectorAll('.table-option input[type="number"]');
  checkboxes.forEach(checkbox => checkbox.checked = false);
  qtyInputs.forEach(input => input.value = 0);
}

// Xử lý sức chứa tối đa và logic đặt bàn
document.addEventListener('DOMContentLoaded', () => {
  const maxCapacity = Math.floor(Math.random() * (50 - 2 + 1)) + 2; // Sức chứa tối đa từ 2-50 khách
  document.querySelector('.available-tables').textContent = `Sức chứa tối đa: ${maxCapacity} khách`;

  const tableOptions = [
    { checkboxId: 'table-1-2', qtyId: 'qty-1-2', maxGuests: 2, decreaseBtn: '.decrease', increaseBtn: '.increase' },
    { checkboxId: 'table-4-6', qtyId: 'qty-4-6', maxGuests: 6, decreaseBtn: '.decrease', increaseBtn: '.increase' },
    { checkboxId: 'table-8-12', qtyId: 'qty-8-12', maxGuests: 12, decreaseBtn: '.decrease', increaseBtn: '.increase' }
  ];

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
      const increaseBtn = document.querySelector(`#${opt.checkboxId} ~ .quantity-control ${opt.increaseBtn}`);
      increaseBtn.disabled = totalGuests >= maxCapacity;
    });
  }

  // Ghi đè sự kiện tăng/giảm và xử lý input
  tableOptions.forEach(option => {
    const checkbox = document.getElementById(option.checkboxId);
    const qtyInput = document.getElementById(option.qtyId);
    const decreaseBtn = document.querySelector(`#${option.checkboxId} ~ .quantity-control ${option.decreaseBtn}`);
    const increaseBtn = document.querySelector(`#${option.checkboxId} ~ .quantity-control ${option.increaseBtn}`);

    increaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (checkbox.checked) {
        const currentValue = parseInt(qtyInput.value) || 0;
        const totalGuests = getTotalMaxGuests();
        const newTotalGuests = totalGuests + option.maxGuests;
        if (newTotalGuests <= maxCapacity) {
          qtyInput.value = currentValue + 1; // Tăng từng bước 1
          updateIncreaseButtons();
        } else {
          alert(`Đã hết chỗ! Sức chứa tối đa là ${maxCapacity} khách.`);
          updateIncreaseButtons();
        }
      }
    });

    decreaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (checkbox.checked) {
        const currentValue = parseInt(qtyInput.value) || 0;
        if (currentValue > 0) {
          qtyInput.value = currentValue - 1; // Giảm từng bước 1
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
        const maxAllowedTables = Math.floor((maxCapacity - (totalGuests - (currentValue * option.maxGuests))) / option.maxGuests);
        qtyInput.value = maxAllowedTables > 0 ? maxAllowedTables : 0;
      }
      checkbox.checked = currentValue > 0;
      updateIncreaseButtons();
    });

    checkbox.addEventListener('change', updateIncreaseButtons);
  });

  // Xử lý submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const totalGuests = getTotalMaxGuests();
    if (totalGuests > maxCapacity) {
      alert(`Số khách (${totalGuests}) vượt quá sức chứa tối đa (${maxCapacity}). Vui lòng giảm số lượng bàn!`);
      return;
    }

    const name = document.getElementById('user-name').value;
    const phone = document.getElementById('phone-number').value;
    const datetime = document.getElementById('booking-datetime').value;
    const address = document.querySelector('.address-display').textContent;

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