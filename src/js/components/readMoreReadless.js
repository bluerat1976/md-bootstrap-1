function toggleContent(evt) {
  var dots = document.getElementById('dots');

  var moreText = document.getElementById('more');
  var btnText = document.getElementsByClassName('read-more-read-less_cta');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

document.getElementsByClassName('read-more-read-less__container')[0]
  .addEventListener('click', toggleContent);
