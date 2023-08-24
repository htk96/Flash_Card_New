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
  const noticeLink = document.querySelector('.notice-inner-box a'); // 클릭할 링크 선택
  const noticeNotice = document.querySelector('.notice-notice'); // 토글할 요소 선택

  noticeLink.addEventListener('click', function(e) {
    e.preventDefault();

    if (noticeNotice.style.display === 'none' || noticeNotice.style.display === '') {
      noticeNotice.style.display = 'block';
    } else {
      noticeNotice.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const openWordLinks = document.querySelectorAll('.open-word-random');
  const customboxes = document.querySelectorAll('.custombox-random');

  openWordLinks.forEach((link, index) => {
    link.addEventListener('click', function() {
      const custombox = customboxes[index];
      if (custombox.style.display === 'none' || custombox.style.display === '') {
        custombox.style.display = 'block'; // 세부 정보 표시
      } else {
        custombox.style.display = 'none'; // 세부 정보 숨기기
      }
    });
  });
});