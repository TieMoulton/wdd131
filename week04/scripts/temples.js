const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
      templeName: "Suva, Fiji",
      location: "Suva, Fiji",
      dedicated: "2000, June, 18",
      area: 12755,
      imageUrl: "https://churchofjesuschrist.org/imgs/1f613a25e8c3fc308eff05c36bb02e78b9eef6c9/full/1600%2C/0/default"
    },
    {
      templeName: "Idaho Falls, Idaho",
      location: "Idaho Falls, Idaho",
      dedicated: "1945, September, 23",
      area: 85624,
      imageUrl: "https://churchofjesuschrist.org/imgs/2c9cad703c20713b28e5313577d7ccd0e547f137/full/1600%2C/0/default"
    },
    {
      templeName: "Dallas, Texas",
      location: "Dallas, Texas",
      dedicated: "1984, October, 19",
      area: 44207,
      imageUrl: "https://churchofjesuschrist.org/imgs/4076d4c8c78e4d88c633cba6dc32d6dd8c6624d7/full/1600%2C/0/default"
    }

    
    // Add more temple objects if needed...
  ];
  
  function displayTemples(temples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
  
    temples.forEach((temple) => {
      const figure = document.createElement("figure");
      
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = "lazy";
      
      const figcaption = document.createElement("figcaption");
      
      const title = document.createElement("h3");
      title.textContent = temple.templeName;
      
      const location = document.createElement("p");
      location.innerHTML = `<span>Location:</span> ${temple.location}`;
      
      const dedicated = document.createElement("p");
      dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
      
      const area = document.createElement("p");
      area.innerHTML = `<span>Size:</span> ${temple.area} sq ft`;
      
      figcaption.appendChild(title);
      figcaption.appendChild(location);
      figcaption.appendChild(dedicated);
      figcaption.appendChild(area);
      
      figure.appendChild(figcaption);
      figure.appendChild(img);
      
      gallery.appendChild(figure);
    });
  }
  
  displayTemples(temples);  // Display all temples initially
  
  // Filtering logic
  document.getElementById('nav-links').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      const filter = event.target.textContent;
      
      let filteredTemples = [];
      if (filter === 'Old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      } else if (filter === 'New') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
      } else if (filter === 'Large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if (filter === 'Small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
      } else if (filter === 'Home') {
        filteredTemples = temples;
      }
  
      displayTemples(filteredTemples);
    }
  });
  
  // Footer updates
  document.getElementById('author').textContent = 'Ty Moulton';
  document.getElementById('last-modified').textContent = document.lastModified;