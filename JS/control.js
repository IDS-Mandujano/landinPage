function showSection(sectionId) {
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('promociones').classList.add('hidden');
    document.getElementById('contacto').classList.add('hidden');

    document.getElementById(sectionId).classList.remove('hidden');
}