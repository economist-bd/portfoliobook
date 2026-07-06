// জেনারেট করা পেজগুলোর z-index ঠিক রাখা এবং ফ্লিপ করা
function turnPage(pageId) {
    const page = document.getElementById('page-' + pageId);
    page.classList.add('flipped');
    
    // ফ্লিপ হওয়ার সময় পেজের লেয়ারিং ঠিক করা
    setTimeout(() => {
        page.style.zIndex = pageId; 
    }, 300);
}

function turnPageBack(pageId) {
    const page = document.getElementById('page-' + pageId);
    page.classList.remove('flipped');
    
    // আগের অবস্থায় ফিরে আসার সময় লেয়ারিং ঠিক করা
    setTimeout(() => {
        page.style.zIndex = -pageId; 
    }, 300);
}
