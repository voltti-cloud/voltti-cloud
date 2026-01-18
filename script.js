function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}
function toggleSearch() {
    document.getElementById('search-bar').classList.toggle('active');
}
function openPlayer(title) {
    document.getElementById('video-title').innerText = title;
    document.getElementById('video-overlay').classList.add('active');
}
function closePlayer() {
    document.getElementById('video-overlay').classList.remove('active');
}
