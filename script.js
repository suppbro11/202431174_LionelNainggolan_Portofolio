// Navigasi antar "halaman" dalam satu file (SPA sederhana)
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Hilangkan kelas aktif dari semua link & section
    links.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // Tambahkan aktif ke link & section yang diklik
    link.classList.add('active');
    const target = document.getElementById(link.dataset.target);
    if (target) {
        target.classList.add('active');
    }
  });
});