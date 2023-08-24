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

document.addEventListener('DOMContentLoaded', function() {
  const loadContentLink = document.getElementById('loadContentLink');
  const contentDiv = document.querySelector('.notice-notice');

  loadContentLink.addEventListener('click', function(e) {
    e.preventDefault(); // 기본 링크 동작을 중지
    const iframe = document.createElement('iframe');
    iframe.src = 'new_page.html'; // 여기에 새로운 페이지의 URL을 입력
    iframe.style.width = '100%';
    iframe.style.height = '500px';

    contentDiv.innerHTML = ''; // 기존 내용을 비움
    contentDiv.appendChild(iframe); // iframe을 콘텐츠 div에 추가
  });
});