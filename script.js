function showPage(pageId, element) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
    if(element) element.classList.add('active');
    window.scrollTo(0, 0);
}
function toggleSearch() {
    document.getElementById('search-bar').classList.toggle('active');
}
function openPlayer(title) {
    document.getElementById('video-title').innerText = title;
    document.getElementById('video-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closePlayer() {
    document.getElementById('video-overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}
