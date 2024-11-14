document.getElementById('picnicForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    // Get the number of people and picnic date
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    const picnicDate = document.getElementById('picnicDate').value;
    const parkLocation = document.getElementById('parkLocation').value;

    // Get selected food items
    const foodItems = [];
    if (document.getElementById('fruit').checked) foodItems.push('Fresh Fruits');
    if (document.getElementById('veggies').checked) foodItems.push('Fresh Vegetables');
    if (document.getElementById('salad').checked) foodItems.push('Salad');
    if (document.getElementById('bread').checked) foodItems.push('Whole Grain Bread');
    if (document.getElementById('cheese').checked) foodItems.push('Vegan/Regular Cheese');
    if (document.getElementById('dips').checked) foodItems.push('Hummus/Guacamole');
    if (document.getElementById('snacks').checked) foodItems.push('Sustainable Snacks');

    // Get selected packing items
    const packingItems = [];
    if (document.getElementById('fruit').checked) packingItems.push(`1 Bowl (for Fruits)`);
    if (document.getElementById('veggies').checked) packingItems.push(`1 Plate, 1 Napkin, and 1 Set of Cutlery (for Veggies)`);
    if (document.getElementById('salad').checked) packingItems.push(`1 Bowl (for Salad)`);
    if (document.getElementById('bread').checked) packingItems.push(`1 Plate (for Bread)`);
    if (document.getElementById('cheese').checked) packingItems.push(`1 Plate (for Cheese)`);
    if (document.getElementById('dips').checked) packingItems.push(`1 Bowl (for Dips)`);
    if (document.getElementById('snacks').checked) packingItems.push(`1 Napkin (for Snacks)`);

    // Handle trash disposal area
    let trashAvailable = document.getElementById('trashAvailable').value;
    if (trashAvailable === "Auto-Select") {
        if (parkLocation.includes('Berlin')) {
            trashAvailable = 'Yes';
        } else {
            trashAvailable = 'No';
        }
    }

    // Display summary
    const summaryText = `
        Picnic Date: ${picnicDate} 
        Location: ${parkLocation}
        Number of People: ${numberOfPeople}
        Food Items: ${foodItems.join(', ')}
        Packing Items: ${packingItems.join(', ')}
        Trash Disposal Area: ${trashAvailable === 'Yes' ? 'Available' : 'Not Available'}
    `;
    document.getElementById('summary').innerText = summaryText;
    document.getElementById('downloadBtn').style.display = 'inline-block';

    // Enable download
    document.getElementById('downloadBtn').addEventListener('click', function() {
        const blob = new Blob([summaryText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Picnic_Plan.txt';
        link.click();
    });
});
