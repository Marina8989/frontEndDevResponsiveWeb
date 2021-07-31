const arrowImage = document.querySelector('.image');
const social = document.querySelector('.social');

arrowImage.addEventListener('mouseenter', () => {
    social.style.display = 'block';
    social.style.transition = 'all 2s ease';
})
arrowImage.addEventListener('mouseleave', () => {
    social.style.display = 'none';
    social.style.transition = 'all 2s ease';
})