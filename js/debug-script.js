/* debug-script.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Tree of Life website initialized');
    
    // Cache DOM elements for better performance
    const treeImage = document.getElementById('tree-of-life');
    const treeMap = document.getElementById('tree-map');
    const tarotTitle = document.getElementById('tarot-title');
    const tarotImage = document.getElementById('tarot-image');
    const meditationAudio = document.getElementById('meditation-audio');
    const pathDescription = document.getElementById('path-description');
    const debugInfo = document.getElementById('debug-info');
    
    // Log initialization status
    console.log('Tree image found:', !!treeImage);
    console.log('Tree map found:', !!treeMap);
    
    // Path descriptions with more detailed information
    const pathDescriptions = {
        0: "Path 0: The Fool - Connects Crown (Kether) to Wisdom (Chokmah). This path represents the beginning of the spiritual journey, innocence, and spontaneity.",
        1: "Path 1: The Magician - Connects Crown (Kether) to Understanding (Binah). This path represents conscious awareness, skill, and the power to manifest.",
        2: "Path 2: The High Priestess - Connects Crown (Kether) to Knowledge (Da'at). This path represents intuition, mystery, and the subconscious mind.",
        3: "Path 3: The Empress - Connects Wisdom (Chokmah) to Understanding (Binah). This path represents fertility, nurturing, and abundance.",
        4: "Path 4: The Emperor - Connects Wisdom (Chokmah) to Mercy (Chesed). This path represents authority, structure, and stability.",
        5: "Path 5: The Hierophant - Connects Wisdom (Chokmah) to Knowledge (Da'at). This path represents tradition, education, and spiritual guidance.",
        6: "Path 6: The Lovers - Connects Understanding (Binah) to Knowledge (Da'at). This path represents relationships, choices, and harmony.",
        7: "Path 7: The Chariot - Connects Understanding (Binah) to Judgement (Geburah). This path represents determination, control, and victory.",
        8: "Path 8: Strength - Connects Mercy (Chesed) to Judgement (Geburah). This path represents courage, patience, and compassion.",
        9: "Path 9: The Hermit - Connects Mercy (Chesed) to Beauty (Tiphareth). This path represents introspection, solitude, and inner guidance.",
        10: "Path 10: Wheel of Fortune - Connects Mercy (Chesed) to Knowledge (Da'at). This path represents cycles, destiny, and change.",
        11: "Path 11: Justice - Connects Knowledge (Da'at) to Beauty (Tiphareth). This path represents fairness, truth, and karma.",
        12: "Path 12: The Hanged Man - Connects Judgement (Geburah) to Beauty (Tiphareth). This path represents surrender, new perspective, and sacrifice.",
        13: "Path 13: Death - Connects Beauty (Tiphareth) to Eternity (Netzach). This path represents transformation, endings, and new beginnings.",
        14: "Path 14: Temperance - Connects Beauty (Tiphareth) to Foundation (Yesod). This path represents balance, moderation, and harmony.",
        15: "Path 15: The Devil - Connects Beauty (Tiphareth) to Reverberation (Hod). This path represents bondage, materialism, and hidden depths.",
        16: "Path 16: The Tower - Connects Judgement (Geburah) to Reverberation (Hod). This path represents sudden change, revelation, and awakening.",
        17: "Path 17: The Star - Connects Foundation (Yesod) to Eternity (Netzach). This path represents hope, inspiration, and serenity.",
        18: "Path 18: The Moon - Connects Foundation (Yesod) to Reverberation (Hod). This path represents illusion, intuition, and the unconscious.",
        19: "Path 19: The Sun - Connects Reverberation (Hod) to Kingdom (Malkuth). This path represents joy, success, and vitality.",
        20: "Path 20: Judgement - Connects Foundation (Yesod) to Kingdom (Malkuth). This path represents rebirth, inner calling, and absolution.",
        21: "Path 21: The World - Connects Eternity (Netzach) to Kingdom (Malkuth). This path represents completion, fulfillment, and integration."
    };
    
    // Add click event listeners to all area elements directly
    const areas = document.querySelectorAll('area');
    console.log('Found', areas.length, 'clickable areas');
    
    areas.forEach((area, index) => {
        console.log('Setting up area', index, 'path:', area.getAttribute('data-path'), 'trump:', area.getAttribute('data-trump'));
        
        area.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Area clicked:', index);
            
            // Get data attributes
            const pathNumber = this.getAttribute('data-path');
            const trumpName = this.getAttribute('data-trump');
            console.log('Path:', pathNumber, 'Trump:', trumpName);
            
            // Update the display
            updateDisplay(pathNumber, trumpName);
            
            // Add visual feedback
            addClickFeedback(e.clientX, e.clientY);
        });
    });
    
    // Add direct click handler on the image as a fallback
    treeImage.addEventListener('click', function(e) {
        console.log('Image clicked at:', e.offsetX, e.offsetY);
        debugInfo.textContent = `Clicked at: ${e.offsetX}, ${e.offsetY}`;
        
        // Add visual feedback
        addClickFeedback(e.clientX, e.clientY);
    });
    
    // Function to update the display with the selected path information
    function updateDisplay(pathNumber, trumpName) {
        console.log('Updating display for path', pathNumber, 'trump', trumpName);
        
        // Update title
        tarotTitle.textContent = `${trumpName} (Path ${pathNumber})`;
        
        // Update image - use clean filename format
        const imageName = trumpName.replace(/\s+/g, '');
        const imagePath = `images/${imageName}.jpg`;
        console.log('Loading image from:', imagePath);
        
        tarotImage.src = imagePath;
        tarotImage.alt = trumpName;
        tarotImage.style.display = 'block';
        
        // Update audio
        const audioPath = `audio/${pathNumber} ${trumpName}.wav`;
        console.log('Loading audio from:', audioPath);
        
        meditationAudio.src = audioPath;
        meditationAudio.load();
        
        // Update path description
        pathDescription.textContent = pathDescriptions[pathNumber];
        
        // Update debug info
        debugInfo.textContent = `Path ${pathNumber}: ${trumpName} - Image: ${imagePath}, Audio: ${audioPath}`;
    }
    
    // Function to add visual feedback for clicks
    function addClickFeedback(x, y) {
        const feedback = document.createElement('div');
        feedback.className = 'click-feedback';
        feedback.style.position = 'fixed';
        feedback.style.left = (x - 25) + 'px';
        feedback.style.top = (y - 25) + 'px';
        feedback.style.width = '50px';
        feedback.style.height = '50px';
        feedback.style.borderRadius = '50%';
        feedback.style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
        feedback.style.border = '2px solid yellow';
        feedback.style.pointerEvents = 'none';
        feedback.style.zIndex = '9999';
        feedback.style.animation = 'pulse 0.5s ease-out';
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 500);
    }
    
    // Add CSS for click animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(0.5); opacity: 1; }
            100% { transform: scale(1.5); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Function to handle image loading errors
    tarotImage.addEventListener('error', function(e) {
        console.error('Image failed to load:', this.src, e);
        this.src = createPlaceholder(this.alt || 'Unknown');
        this.alt = 'Image not available';
        debugInfo.textContent += ' - Image load error!';
    });
    
    // Function to handle audio loading errors
    meditationAudio.addEventListener('error', function(e) {
        console.error('Audio failed to load:', this.src, e);
        pathDescription.textContent += '\n\nMeditation audio not available for this path.';
        debugInfo.textContent += ' - Audio load error!';
    });
    
    // Create a placeholder image with the trump name
    function createPlaceholder(trumpName) {
        console.log('Creating placeholder for:', trumpName);
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 450;
        const ctx = canvas.getContext('2d');
        
        // Fill background
        ctx.fillStyle = '#f8f8f8';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add border
        ctx.strokeStyle = '#4b0082';
        ctx.lineWidth = 10;
        ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);
        
        // Add text
        ctx.fillStyle = '#4b0082';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(trumpName, canvas.width/2, 50);
        
        ctx.font = '20px Arial';
        ctx.fillText('Image not found', canvas.width/2, canvas.height/2 - 20);
        ctx.fillText('Please check file name', canvas.width/2, canvas.height/2 + 20);
        
        // Add decorative elements
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2 + 80, 50, 0, Math.PI * 2);
        ctx.strokeStyle = '#9370db';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Convert to data URL and create image
        return canvas.toDataURL('image/png');
    }
    
    // Set initial placeholder
    const initialPlaceholder = createPlaceholder('The Fool\'s Journey');
    tarotImage.src = initialPlaceholder;
    tarotImage.style.display = 'block';
    
    // Add keyboard navigation for accessibility
    let currentActivePath = -1;
    
    document.addEventListener('keydown', function(e) {
        console.log('Key pressed:', e.key);
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            navigatePath(1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            navigatePath(-1);
        }
    });
    
    // Function to navigate paths with keyboard
    function navigatePath(direction) {
        currentActivePath = (currentActivePath + direction + 22) % 22;
        console.log('Navigating to path:', currentActivePath);
        const trumpName = areas[currentActivePath].getAttribute('data-trump');
        updateDisplay(currentActivePath, trumpName);
    }
    
    // Add touch swipe support for mobile devices
    let touchStartX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        console.log('Touch start at:', touchStartX);
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].screenX;
        console.log('Touch end at:', touchEndX);
        
        if (touchEndX < touchStartX - 50) {
            // Swipe left
            navigatePath(1);
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right
            navigatePath(-1);
        }
    }, { passive: true });
    
    // Log that initialization is complete
    console.log('Tree of Life website initialization complete');
});
