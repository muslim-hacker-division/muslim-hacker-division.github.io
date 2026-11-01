document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PENGONTROL MENU MOBILE (HAMBURGER MENU) ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
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

    // Menutup menu otomatis jika link di-klik (Mobile)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // --- 2. SCROLL EFFECT ON NAVBAR ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
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
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    const contactLinks = document.querySelectorAll('.contact-link, .btn-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', () => {
            showToast('🌐 Mengarahkan ke tautan tujuan...');
        });
    });

    // --- 4. KEYBOARD NAVIGASI (TOMBOL ESCAPE) ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });

    // --- 5. SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 6. TYPING EFFECT ---
    const typingEffect = document.querySelector('.typing-effect');
    if (typingEffect) {
        const text = typingEffect.textContent;
        typingEffect.textContent = '';
        let index = 0;
        
        const typeText = () => {
            if (index < text.length) {
                typingEffect.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 35);
            }
        };
        setTimeout(typeText, 400);
    }
});
