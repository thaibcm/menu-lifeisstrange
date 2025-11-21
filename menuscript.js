
document.addEventListener('click', function() {
    

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.style.opacity = 1;
    }


    const startOverlay = document.getElementById('start-overlay');
    if (startOverlay) {
        startOverlay.style.opacity = 0;
        
        startOverlay.style.pointerEvents = 'none'; 
    }

}, { once: true });