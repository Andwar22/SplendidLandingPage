
// #region ========== DARK TOGGLE 
    document.addEventListener("DOMContentLoaded", function() {
        // Mendapatkan elemen checkbox
        const darkModeToggle = document.getElementById("toggleDarkMode");
    
        // Memeriksa apakah dark mode sudah disimpan di local storage sebelumnya
        const isDarkMode = localStorage.getItem("darkMode") === "true";
    
        // Mengatur status dark mode berdasarkan data di local storage
        if (isDarkMode) {
        document.body.classList.add("dark");
        darkModeToggle.checked = true;
        }
    
        // Fungsi untuk menangani perubahan status checkbox
        function toggleDarkMode() {
        // Tambahkan atau hilangkan class 'dark' pada <body>
        document.body.classList.toggle("dark");
        // Simpan status dark mode di local storage
        localStorage.setItem("darkMode", darkModeToggle.checked);
        }
    
        // Tambahkan event listener untuk memantau perubahan pada checkbox
        darkModeToggle.addEventListener("change", toggleDarkMode);
    });
// #endregion ======= DARK TOGGLE END

// #region ========== PARTICLES 
    const warna = '#29b765';

    tsParticles.load("tsparticles", {
        autoPlay: true,
        background: {
            color: {
                value: 'var(--bg-theme)'
            }
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: 'push'
                },
                onHover: {
                    enable: false,
                    mode: 'grab'
                },
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40
                },
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                grab: {
                    distance: 400
                }
            }
        },
        particles: {
            color: {
                value: warna
            },
            links: {
                color: warna,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: 'out',
                random: false,
                speed: 2,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800
                },
                value: 200
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: 'circle'
            },
            size: {
                value: { min: 1, max: 5 }
            }
        },
        detectRetina: true,
    });
// #endregion ======= PARTICLES END

// #region ========== SCROLLSPY 
    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll(".section");
        const navLi = document.querySelectorAll("nav ul li a");

        // Restore active class from localStorage
        const activeSection = localStorage.getItem("activeSection");
        if (activeSection) {
            document.querySelector(`nav ul li a[href="#${activeSection}"]`).classList.add("active");
            document.getElementById(activeSection).scrollIntoView();
        }

        window.onscroll = () => {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 60) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach(a => {
                a.classList.remove("active");
                if (a.getAttribute("href").substring(1) === current) {
                    a.classList.add("active");
                    // Save current active section to localStorage
                    localStorage.setItem("activeSection", current);
                }
            });
        };
    });

// #endregion ======= SCROLLSPY END
