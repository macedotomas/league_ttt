document.addEventListener('DOMContentLoaded', () => {
  const top_cells = document.querySelectorAll('#top-cell');
  const top_img = [
    '/public/logos/male.png',
    '/public/logos/female.png',

    // Add more image paths as needed
  ];

  const side_cells = document.querySelectorAll('#side-cell');
  const side_img = [
    '/public/logos/midlane.jpg',
    '/public/logos/toplane.jpg',
    '/public/logos/botlane.jpg',
  ];




  top_cells.forEach(cell => {
    // Generate a random index to select an image
    const randomIndex = Math.floor(Math.random() * top_img.length);
    const imageUrl = top_img[randomIndex];

    // Set the cell's background image
    cell.style.backgroundImage = `url('${imageUrl}')`;
    cell.style.backgroundSize = 'cover'; // Ensure the image covers the cell
    cell.style.backgroundPosition = 'center'; // Center the background image
  });


  side_cells.forEach(cell => {
    // Generate a random index to select an image
    const randomIndex = Math.floor(Math.random() * side_img.length);
    const imageUrl = side_img[randomIndex];

    // Set the cell's background image
    cell.style.backgroundImage = `url('${imageUrl}')`;
    cell.style.backgroundSize = 'cover'; // Ensure the image covers the cell
    cell.style.backgroundPosition = 'center'; // Center the background image
  });






});