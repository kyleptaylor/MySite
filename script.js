const cursor = document.querySelector('.custom-cursor'); 
 
document.addEventListener('mousemove', (e) => { 
    cursor.style.left = e.clientX + 'px'; 
    cursor.style.top = e.clientY + 'px'; 
}); 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});