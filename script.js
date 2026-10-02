document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PENGONTROL MENU MOBILE (HAMBURGER MENU) ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Ganti icon antara menu garis 3 dan icon silang (X)
            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Menutup menu otomatis jika salah satu link di-klik (Untuk HP)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- 2. SCROLL EFFECT ON NAVBAR ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. TOAST NOTIFICATION SYSTEM ---
    const toast = document.getElementById('toast');
    
    function showToast(message) {
        if (toast) {
            toast.textContent = message;
            toast.classList.add('show');
            
            // Sembunyikan notifikasi setelah 3 detik
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    // Pasang event listener ke semua ikon sosial media/kontak
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', () => {
            showToast('🌐 Membuka koneksi sosial media...');
        });
    });

    // --- 4. KEYBOARD NAVIGASI (TOMBOL ESCAPE) ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Tutup menu mobile jika menekan tombol ESC
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
    });

    // --- 5. SMOOTH SCROLL ANIMATION ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80; // Offset untuk navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 6. REVEAL ANIMATIONS ON SCROLL ---
    const revealElements = document.querySelectorAll('.card, .section-title, .timeline-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });

    // --- 7. PARALLAX EFFECT FOR HERO SECTION ---
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    // --- 8. TYPING EFFECT FOR SUBTITLE ---
    const typingEffect = document.querySelector('.typing-effect');
    if (typingEffect) {
        const text = typingEffect.textContent;
        typingEffect.textContent = '';
        let index = 0;
        
        const typeText = () => {
            if (index < text.length) {
                typingEffect.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 30);
            }
        };
        
        // Delay typing effect sampai element terlihat
        setTimeout(typeText, 500);
    }
});
