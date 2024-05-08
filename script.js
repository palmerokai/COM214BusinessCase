document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header h1');
  
    header.addEventListener('click', function() {
      // Generate a random color
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      
      // Change the color of the header text
      header.style.color = randomColor;
    });
  });
  
  function openPopup(imageUrl) {
    // Specify the width and height of the popup window
    var width = 600;
    var height = 400;
    
    // Calculate the left and top positions to center the window
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    
    // Open the popup window
    var popupWindow = window.open(imageUrl, 'ImagePopup', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);
    
    // Focus the popup window
    if (popupWindow) {
        popupWindow.focus();
    }
}
// Function to sort by rating
function sortRating(descending) {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("reviewsTable");
  switching = true;
  // Loop until no switching has been done
  while (switching) {
    switching = false;
    rows = table.rows;
    // Loop through all table rows (except the first, which contains table headers)
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      // Get the two elements you want to compare, one from current row and one from the next
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      // Check if the two rows should switch place, based on the direction (ascending or descending)
      if (descending) {
        if (parseInt(x.innerHTML.split('/')[0]) < parseInt(y.innerHTML.split('/')[0])) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (parseInt(x.innerHTML.split('/')[0]) > parseInt(y.innerHTML.split('/')[0])) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      // If a switch has been marked, make the switch and mark that a switch has been done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// Function to sort by review length
function sortLength(descending) {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("reviewsTable");
  switching = true;
  // Loop until no switching has been done
  while (switching) {
    switching = false;
    rows = table.rows;
    // Loop through all table rows (except the first, which contains table headers)
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      // Get the two elements you want to compare, one from current row and one from the next
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place, based on the direction (ascending or descending)
      if (descending) {
        if (x.innerHTML.length < y.innerHTML.length) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (x.innerHTML.length > y.innerHTML.length) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      // If a switch has been marked, make the switch and mark that a switch has been done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
document.addEventListener("DOMContentLoaded", function() {
  fetch('reviews.json')
      .then(response => response.json())
      .then(data => {
          const container = document.getElementById('reviews-container');
          data.forEach(review => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${review.reviewer}</td>
                  <td>${review.review}</td>
                  <td>${review.rating}</td>
              `;
              container.appendChild(row);
          });
      })
      .catch(error => console.error('Error loading the reviews:', error));
});

//From chat gpt for about page
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselSlide = document.querySelector('.carousel-slide');

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    updateSlidePosition();
});

prevBtn.addEventListener('click', () => {
    counter--;
    updateSlidePosition();
});

function updateSlidePosition() {
    carouselSlide.style.transform = `translateX(-${counter % 5 * 100}%)`;
}
