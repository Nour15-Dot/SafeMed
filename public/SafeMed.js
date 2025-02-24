window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#0057a3'; // تغيير لون الخلفية عند التمرير
    } else {
      header.style.backgroundColor = '#0078d4';
    }
  });