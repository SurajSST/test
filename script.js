const transactionForm = document.getElementById('transaction-form');
const recipientInput = document.getElementById('recipient-input');
const amountInput = document.getElementById('amount-input');
const transactionList = document.getElementById('transaction-list');

// Add event listener to the transaction form
transactionForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  
  // Get input values
  const recipient = recipientInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());
  
  // Validate input
  if (recipient === '' || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid recipient and amount.');
    return;
  }
  
  // Create transaction item
  const transactionItem = document.createElement('li');
  transactionItem.innerHTML = `
    <span class="date">${getCurrentDate()}</span>
    <span class="description">Payment to ${recipient}</span>
    <span class="amount">-$${amount.toFixed(2)}</span>
  `;
  
  // Add transaction item to the transaction list
  transactionList.appendChild(transactionItem);
  
  // Clear input fields
  recipientInput.value = '';
  amountInput.value = '';
});

// Helper function to get the current date in the format: Month Day, Year
function getCurrentDate() {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const currentDate = new Date().toLocaleDateString(undefined, options);
  return currentDate;
}
