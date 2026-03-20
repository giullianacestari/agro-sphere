// Função de troca de tema com transição suave
function toggleTheme() {
    const body = document.body;
    const moon = document.getElementById('moonIcon');
    const sun = document.getElementById('sunIcon');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        moon.classList.add('hidden');
        sun.classList.remove('hidden');
    } else {
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
    }
}

// Navbar Dinâmica e Scroll Spy
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    if (window.scrollY > 80) {
        nav.style.padding = '1rem 2.5rem';
        nav.style.backgroundColor = document.body.classList.contains('light-mode')
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(15, 17, 13, 0.95)';
        nav.classList.add('shadow-2xl', 'backdrop-blur-xl');
    } else {
        nav.style.padding = '1.5rem 2.5rem';
        nav.style.backgroundColor = 'transparent';
        nav.classList.remove('shadow-2xl', 'backdrop-blur-xl');
    }

    // Scroll Spy Logic
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 250)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Efeito Parallax suave nos cards ao mover o rato (opcional, para mais imersão)
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
});
