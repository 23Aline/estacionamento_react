function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    // Verifica se está escondido e mostra
    if (section.style.display === 'none') {
        section.style.display = 'block';
    }

    // Rola até a seção
    section.scrollIntoView({ behavior: 'smooth' });
}
