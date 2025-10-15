document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll('.toggle-btn');

    toggles.forEach(btn => {
        const card = btn.closest('.establishment');
        const details = card.querySelector('.details');
        const link = card.querySelector('.fundraiser');

        details.classList.remove('show');

        btn.addEventListener('click', () => {
            const isOpen = card.classList.contains('expanded');

            card.classList.toggle('expanded');
            details.classList.toggle('show');
            if (link) {
                link.classList.toggle('hide');
            }

            btn.textContent = isOpen ? 'Meer info' : 'Minder info';
        });
    });
});