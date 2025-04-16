/* enhanced-script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const treeMap = document.getElementById('tree-map');
    const tarotTitle = document.getElementById('tarot-title');
    const tarotImage = document.getElementById('tarot-image');
    const meditationAudio = document.getElementById('meditation-audio');
    const pathDescription = document.getElementById('path-description');
    
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
    
    // Sephiroth (spheres) information
    const sephirothInfo = {
        "Crown": "Kether (Crown): The first Sephirah, representing the divine unity and the highest point of spiritual attainment.",
        "Wisdom": "Chokmah (Wisdom): The second Sephirah, representing the creative force and divine masculine energy.",
        "Understanding": "Binah (Understanding): The third Sephirah, representing divine feminine energy and the womb of creation.",
        "Knowledge": "Da'at (Knowledge): The hidden Sephirah, representing the bridge between the divine and human consciousness.",
        "Mercy": "Chesed (Mercy): The fourth Sephirah, representing loving-kindness, compassion, and expansion.",
        "Judgement": "Geburah (Judgement): The fifth Sephirah, representing severity, discipline, and restriction.",
        "Beauty": "Tiphareth (Beauty): The sixth Sephirah, representing harmony, balance, and the heart center.",
        "Eternity": "Netzach (Eternity/Victory): The seventh Sephirah, representing emotions, desire, and artistic expression.",
        "Reverberation": "Hod (Reverberation/Splendor): The eighth Sephirah, representing intellect, communication, and analysis.",
        "Foundation": "Yesod (Foundation): The ninth Sephirah, representing the astral plane, dreams, and the collective unconscious.",
        "Kingdom": "Malkuth (Kingdom): The tenth Sephirah, representing the physical world, manifestation, and grounding."
    };
    
    // Add click event listeners to all area elements
    const areas = document.querySelectorAll('area');
    areas.forEach(area => {
        area.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get data attributes
            const pathNumber = this.getAttribute('data-path');
            const trumpName = this.getAttribute('data-trump');
            
            // Update the display
            updateDisplay(pathNumber, trumpName);
        });
    });
    
    // Function to update the display with the selected path information
    function updateDisplay(pathNumber, trumpName) {
        // Update title
        tarotTitle.textContent = `${trumpName} (Path ${pathNumber})`;
        
        // Update image
        tarotImage.src = `images/${trumpName.replace(/\s+/g, '')}.jpg`;
        tarotImage.alt = trumpName;
        tarotImage.style.display = 'block';
        
        // Update audio
        meditationAudio.src = `audio/${pathNumber} ${trumpName}.wav`;
        meditationAudio.load();
        
        // Update path description
        pathDescription.textContent = pathDescriptions[pathNumber];
        
        // Highlight active path (this would require SVG overlay in a more advanced implementation)
        highlightActivePath(pathNumber);
    }
    
    // Function to highlight the active path (placeholder for future enhancement)
    function highlightActivePath(pathNumber) {
        // This would be implemented with SVG overlay in a more advanced version
        console.log(`Path ${pathNumber} activated`);
    }
    
    // Function to handle image loading errors
    tarotImage.addEventListener('error', function() {
        this.src = 'images/placeholder.jpg';
        this.alt = 'Image not available';
        console.log('Image failed to load, using placeholder');
    });
    
    // Function to handle audio loading errors
    meditationAudio.addEventListener('error', function() {
        pathDescription.textContent += '\n\nMeditation audio not available for this path.';
        console.log('Audio failed to load');
    });
    
    // Create a placeholder image for initial state
    function createPlaceholder() {
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
        ctx.fillText('The Fool\'s Journey', canvas.width/2, 50);
        
        ctx.font = '20px Arial';
        ctx.fillText('Select a path on', canvas.width/2, canvas.height/2 - 20);
        ctx.fillText('the Tree of Life', canvas.width/2, canvas.height/2 + 20);
        
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
    const placeholderDataUrl = createPlaceholder();
    tarotImage.src = placeholderDataUrl;
    tarotImage.style.display = 'block';
    
    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            navigatePath(1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            navigatePath(-1);
        }
    });
    
    // Current active path for keyboard navigation
    let currentActivePath = -1;
    
    // Function to navigate paths with keyboard
    function navigatePath(direction) {
        currentActivePath = (currentActivePath + direction + 22) % 22;
        const trumpName = Object.values(areas)[currentActivePath].getAttribute('data-trump');
        updateDisplay(currentActivePath, trumpName);
    }
    
    // Add touch swipe support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left
            navigatePath(1);
        } else if (touchEndX > touchStartX) {
            // Swipe right
            navigatePath(-1);
        }
    }
});
