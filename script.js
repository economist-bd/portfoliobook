function turnPage(pageId) {
    const page = document.getElementById('page-' + pageId);
    page.classList.add('flipped');
    
    // ফ্লিপ হওয়ার পর পেজটি নিচের লেয়ারে চলে যাবে
    setTimeout(() => {
        page.style.zIndex = pageId; 
    }, 300);
}

function turnPageBack(pageId) {
    const page = document.getElementById('page-' + pageId);
    page.classList.remove('flipped');
    
    // আগের অবস্থায় ফিরে আসার সময় পেজটি আবার উপরের লেয়ারে আসবে
    setTimeout(() => {
        // টোটাল পেজ সংখ্যা (৩) থেকে হিসাব করে z-index বসানো হলো
        page.style.zIndex = 4 - pageId; 
    }, 300);
}
