/* This file will automatically apply styles to fix the mobile layout */
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a mobile device
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Apply mobile-specific adjustments
    function applyMobileAdjustments() {
        if (isMobile()) {
            // Fix for the text content layout
            const lines = document.querySelectorAll('.line');
            
            lines.forEach(line => {
                line.style.display = 'block';
                
                // Make sure words are properly spaced
                const words = line.querySelectorAll('.word');
                words.forEach(word => {
                    word.style.display = 'inline-block';
                    word.style.marginRight = '10px';
                    word.style.marginBottom = '8px';
                });
            });
            
            // Fix for the bottom navigation
            const bottomInfo = document.querySelector('.bottom-info');
            if (bottomInfo) {
                bottomInfo.style.position = 'relative';
                bottomInfo.style.marginTop = '20px';
            }
            
            // Make sure the page container is scrollable
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
            
            // Fix for the background image
            const backgroundImage = document.querySelector('.background-image');
            if (backgroundImage) {
                backgroundImage.style.position = 'relative';
                backgroundImage.style.width = '100%';
                backgroundImage.style.height = '40vh';
            }
            
            // Fix for the contents area
            const contentsText = document.querySelector('.contents-text');
            if (contentsText) {
                contentsText.style.position = 'relative';
                contentsText.style.width = '100%';
                contentsText.style.height = 'auto';
                contentsText.style.padding = '30px 20px';
                contentsText.style.boxShadow = 'none';
                contentsText.style.right = 'auto';
                contentsText.style.top = 'auto';
                contentsText.style.minHeight = '50vh';
            }
        }
    }
    
    // Apply on load
    applyMobileAdjustments();
    
    // Also apply on resize
    window.addEventListener('resize', applyMobileAdjustments);
});