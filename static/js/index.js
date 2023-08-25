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

    const images = [
      '{% static "assets/img/index_img_01.jpg" %}',
      '{% static "assets/img/index_img_02.jpg" %}',
      '{% static "assets/img/index_img_03.jpg" %}',
      '{% static "assets/img/index_img_04.jpg" %}',
      '{% static "assets/img/index_img_05.jpg" %}'
    ];

    const bannerImage = document.getElementById('bannerImage');
    let imageIndex = 0;

    function changeImage() {
      bannerImage.style.opacity = 0; // 페이드아웃 효과 시작
      setTimeout(() => {
        bannerImage.src = images[imageIndex];
        bannerImage.style.opacity = 1; // 페이드인 효과 시작
        imageIndex = (imageIndex + 1) % images.length;
      }, 1000); // 0.5초 뒤에 이미지 변경 및 페이드인 효과 시작
    }

    changeImage(); // 초기 이미지 설정
    setInterval(changeImage, 4000); // 3.5초마다 이미지 변경 (0.5초 + 3초)
