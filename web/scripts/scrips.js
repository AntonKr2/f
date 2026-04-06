
const elements = document.querySelectorAll('.card');
elements.forEach(el => {
    let originalColor = ''; 

    el.addEventListener('mouseenter', () => {
        originalColor = el.style.backgroundColor; 
        el.style.backgroundColor = 'red';         
    });

    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = originalColor;
    });
});
