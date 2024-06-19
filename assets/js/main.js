
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
