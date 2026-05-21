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

    // --- 2. TOAST NOTIFICATION SYSTEM ---
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
            showToast('Membuka koneksi sosial media...');
        });
    });

    // --- 3. KEYBOARD NAVIGASI (TOMBOL ESCAPE) ---
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
});
