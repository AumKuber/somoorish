
    const imageContainer = document.getElementById('grid-image');
    const links = document.querySelectorAll('.links');

  
    links.forEach((link) => {
      link.addEventListener('mouseenter', function () {
        let imageUrl = link.getAttribute('data-img');
        imageContainer.style.backgroundImage = `url(${imageUrl})`;
      })
    })
  
      // link.addEventListener('mouseout', function () {
      //   // Reset the background image when the mouse leaves the link
      //   imageContainer.style.backgroundImage = 'none';
      // });
    
