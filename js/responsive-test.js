/* responsive-test.js */
document.addEventListener('DOMContentLoaded', function() {
    // Log device information for testing
    console.log('Testing device information:');
    console.log('Window inner width:', window.innerWidth);
    console.log('Window inner height:', window.innerHeight);
    console.log('Device pixel ratio:', window.devicePixelRatio);
    console.log('User agent:', navigator.userAgent);
    
    // Test image map responsiveness
    window.addEventListener('resize', function() {
        console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
        checkImageMapResponsiveness();
    });
    
    // Function to check image map responsiveness
    function checkImageMapResponsiveness() {
        const treeImage = document.getElementById('tree-of-life');
        const imageWidth = treeImage.clientWidth;
        const imageHeight = treeImage.clientHeight;
        
        console.log('Tree image dimensions:', imageWidth, 'x', imageHeight);
        console.log('Image map may need coordinate adjustments based on these dimensions');
    }
    
    // Initial check
    checkImageMapResponsiveness();
    
    // Test audio functionality
    const audio = document.getElementById('meditation-audio');
    
    audio.addEventListener('play', function() {
        console.log('Audio playback started');
    });
    
    audio.addEventListener('pause', function() {
        console.log('Audio playback paused');
    });
    
    audio.addEventListener('ended', function() {
        console.log('Audio playback completed');
    });
    
    audio.addEventListener('error', function(e) {
        console.error('Audio error:', e);
    });
    
    // Test click events on image map areas
    const areas = document.querySelectorAll('area');
    areas.forEach((area, index) => {
        console.log(`Area ${index} path:`, area.getAttribute('data-path'), 'trump:', area.getAttribute('data-trump'));
    });
    
    // Add visual feedback for testing image map areas
    function addVisualFeedback() {
        const treeContainer = document.querySelector('.tree-container');
        const testOverlay = document.createElement('div');
        testOverlay.id = 'test-overlay';
        testOverlay.style.position = 'absolute';
        testOverlay.style.top = '0';
        testOverlay.style.left = '0';
        testOverlay.style.width = '100%';
        testOverlay.style.height = '100%';
        testOverlay.style.pointerEvents = 'none';
        treeContainer.style.position = 'relative';
        treeContainer.appendChild(testOverlay);
        
        areas.forEach((area, index) => {
            area.addEventListener('mouseover', function() {
                const coords = this.getAttribute('coords').split(',').map(Number);
                highlightArea(coords, index);
            });
            
            area.addEventListener('mouseout', function() {
                const highlight = document.getElementById('highlight-' + index);
                if (highlight) highlight.remove();
            });
        });
    }
    
    function highlightArea(coords, index) {
        const testOverlay = document.getElementById('test-overlay');
        const highlight = document.createElement('div');
        highlight.id = 'highlight-' + index;
        highlight.style.position = 'absolute';
        
        // For polygon shapes
        if (coords.length >= 6) {
            highlight.style.clipPath = 'polygon(' + 
                coords.map((coord, i) => {
                    return (i % 2 === 0 ? coord + 'px ' : coord + 'px, ');
                }).join('').slice(0, -2) + 
            ')';
            highlight.style.width = '100%';
            highlight.style.height = '100%';
        }
        
        highlight.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
        highlight.style.border = '2px solid yellow';
        highlight.style.pointerEvents = 'none';
        testOverlay.appendChild(highlight);
    }
    
    // Uncomment to enable visual testing
    // addVisualFeedback();
    
    // Test keyboard navigation
    document.addEventListener('keydown', function(e) {
        console.log('Key pressed:', e.key);
    });
    
    // Test touch events for mobile
    document.addEventListener('touchstart', function(e) {
        console.log('Touch start:', e.touches[0].clientX, e.touches[0].clientY);
    });
    
    document.addEventListener('touchend', function(e) {
        console.log('Touch end:', e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    });
    
    // Browser compatibility check
    function checkBrowserCompatibility() {
        const features = {
            'Audio Element': !!document.createElement('audio').canPlayType,
            'WAV Support': !!document.createElement('audio').canPlayType('audio/wav'),
            'Image Maps': !!document.createElement('map'),
            'Canvas (for placeholders)': !!window.CanvasRenderingContext2D,
            'ES6 Support': typeof Symbol !== 'undefined',
            'Touch Events': 'ontouchstart' in window
        };
        
        console.log('Browser compatibility check:');
        for (const feature in features) {
            console.log(`${feature}: ${features[feature] ? 'Supported' : 'Not supported'}`);
        }
    }
    
    checkBrowserCompatibility();
});
