document.addEventListener('DOMContentLoaded', function() {
  const openWordLink = document.querySelector('.open-word');
  const custombox = document.querySelector('.custombox');

  openWordLink.addEventListener('click', function() {
    if (custombox.style.display === 'none' || custombox.style.display === '') {
      custombox.style.display = 'block';
    } else {
      custombox.style.display = 'none';
    }
  });
});