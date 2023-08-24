document.addEventListener('DOMContentLoaded', function() {
  const openWordLinks = document.querySelectorAll('.open-word');
  const customboxes = document.querySelectorAll('.custombox');

  openWordLinks.forEach((link, index) => {
    link.addEventListener('click', function() {
      const custombox = customboxes[index]; // 현재 클릭된 .open-word에 해당하는 .custombox를 선택
      if (custombox.style.display === 'none' || custombox.style.display === '') {
        custombox.style.display = 'block';
      } else {
        custombox.style.display = 'none';
      }
    });
  });
});