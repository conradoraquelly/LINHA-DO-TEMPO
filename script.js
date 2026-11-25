// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
    
    // ===== Animação de entrada dos itens da timeline =====
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Configuração do Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animação em cascata: adiciona um pequeno delay para cada item
                const index = Array.from(timelineItems).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                // Para de observar após animar
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observa cada item
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // ===== Efeito sutil de paralaxe na linha do tempo =====
    const timelineLine = document.querySelector('.timeline-line');
    
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) {
            const scrolled = window.pageYOffset;
            timelineLine.style.opacity = Math.min(1, 0.6 + scrolled / 2000);
        }
    });
    
    // ===== Efeito de "página de livro" ao clicar =====
    const bookCovers = document.querySelectorAll('.book-cover');
    
    bookCovers.forEach(cover => {
        cover.addEventListener('click', function () {
            this.style.transform = 'scale(0.98) rotate(0deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // ===== Título com efeito de digitação suave (opcional) =====
    const title = document.querySelector('.header h1');
    if (title) {
        title.style.opacity = '0';
        title.style.transition = 'opacity 1.5s ease';
        setTimeout(() => {
            title.style.opacity = '1';
        }, 300);
    }
    
    // ===== Log de boas-vindas =====
    console.log('%c📖 Bem-vindo à sua linha do tempo!', 
        'font-family: Georgia, serif; font-size: 16px; color: #b8860b;');
});