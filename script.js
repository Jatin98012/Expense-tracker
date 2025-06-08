const form = document.getElementById('expense-form');
const list = document.getElementById('expense-list');
const totalEl = document.getElementById('total');

let total = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const date = document.getElementById('date').value;

  const item = document.createElement('li');
  item.textContent = `${name} - ₹${amount} [${category}] (${date})`;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.onclick = () => {
    list.removeChild(item);
    total -= amount;
    updateTotal();
  };

  item.appendChild(deleteBtn);
  list.appendChild(item);

  total += amount;
  updateTotal();

  form.reset();
});

function updateTotal() {
  totalEl.textContent = total.toFixed(2);
}
