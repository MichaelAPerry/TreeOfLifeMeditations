/* fixed-script.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Tree of Life website initialized');
    
    // Cache DOM elements for better performance
    const treeImage = document.getElementById('tree-of-life');
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
    
    // Create a mapping of paths to their corresponding tarot trumps
    const pathToTrump = {
        0: "The Fool",
        1: "The Magician",
        2: "The High Priestess",
        3: "The Empress",
        4: "The Emperor",
        5: "The Hierophant",
        6: "The Lovers",
        7: "The Chariot",
        8: "Strength",
        9: "The Hermit",
        10: "Wheel of Fortune",
        11: "Justice",
        12: "The Hanged Man",
        13: "Death",
        14: "Temperance",
        15: "The Devil",
        16: "The Tower",
        17: "The Star",
        18: "The Moon",
        19: "The Sun",
        20: "Judgement",
        21: "The World"
    };
    
    // Create visual overlay for paths
    createPathOverlays();
    
    // Function to create visual overlays for all paths
    function createPathOverlays() {
        const treeContainer = document.querySelector('.tree-container');
        treeContainer.style.position = 'relative';
        
        // Define path coordinates (simplified for better clickability)
        const pathCoordinates = [
            // 0: The Fool - Crown to Wisdom
            {x: 180, y: 150, width: 40, height: 60, angle: 45},
            // 1: The Magician - Crown to Understanding
            {x: 110, y: 150, width: 40, height: 60, angle: -45},
            // 2: The High Priestess - Crown to Knowledge
            {x: 150, y: 175, width: 20, height: 60, angle: 0},
            // 3: The Empress - Wisdom to Understanding
            {x: 150, y: 175, width: 120, height: 20, angle: 0},
            // 4: The Emperor - Wisdom to Mercy
            {x: 205, y: 225, width: 40, height: 60, angle: 45},
            // 5: The Hierophant - Wisdom to Knowledge
            {x: 180, y: 200, width: 40, height: 60, angle: -45},
            // 6: The Lovers - Understanding to Knowledge
            {x: 120, y: 200, width: 40, height: 60, angle: 45},
            // 7: The Chariot - Understanding to Judgement
            {x: 95, y: 225, width: 40, height: 60, angle: 45},
            // 8: Strength - Mercy to Judgement
            {x: 150, y: 275, width: 80, height: 20, angle: 0},
            // 9: The Hermit - Mercy to Beauty
            {x: 170, y: 300, width: 40, height: 60, angle: 45},
            // 10: Wheel of Fortune - Mercy to Knowledge
            {x: 175, y: 250, width: 40, height: 60, angle: -45},
            // 11: Justice - Knowledge to Beauty
            {x: 150, y: 275, width: 20, height: 60, angle: 0},
            // 12: The Hanged Man - Judgement to Beauty
            {x: 130, y: 300, width: 40, height: 60, angle: 45},
            // 13: Death - Beauty to Eternity
            {x: 170, y: 350, width: 40, height: 60, angle: 45},
            // 14: Temperance - Beauty to Foundation
            {x: 150, y: 375, width: 20, height: 60, angle: 0},
            // 15: The Devil - Beauty to Reverberation
            {x: 130, y: 350, width: 40, height: 60, angle: -45},
            // 16: The Tower - Judgement to Reverberation
            {x: 105, y: 325, width: 20, height: 60, angle: 0},
            // 17: The Star - Foundation to Eternity
            {x: 170, y: 400, width: 40, height: 60, angle: -45},
            // 18: The Moon - Foundation to Reverberation
            {x: 130, y: 400, width: 40, height: 60, angle: -45},
            // 19: The Sun - Reverberation to Kingdom
            {x: 125, y: 425, width: 40, height: 60, angle: 45},
            // 20: Judgement - Foundation to Kingdom
            {x: 150, y: 450, width: 20, height: 60, angle: 0},
            // 21: The World - Eternity to Kingdom
            {x: 175, y: 425, width: 40, height: 60, angle: -45}
        ];
        
        // Create clickable overlays for each path
        pathCoordinates.forEach((coords, index) => {
            const overlay = document.createElement('div');
            overlay.className = 'path-overlay';
            overlay.style.position = 'absolute';
            overlay.style.left = coords.x + 'px';
            overlay.style.top = coords.y + 'px';
            overlay.style.width = coords.width + 'px';
            overlay.style.height = coords.height + 'px';
            overlay.style.transform = `rotate(${coords.angle}deg)`;
            overlay.style.transformOrigin = 'center center';
            overlay.style.cursor = 'pointer';
            overlay.style.zIndex = '100';
            overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.01)'; // Nearly transparent
            
            // Add data attributes
            overlay.dataset.path = index;
            overlay.dataset.trump = pathToTrump[index];
            
            // Add click event
            overlay.addEventListener('click', function(e) {
                e.preventDefault();
                const pathNumber = this.dataset.path;
                const trumpName = this.dataset.trump;
                updateDisplay(pathNumber, trumpName);
                addClickFeedback(e.clientX, e.clientY);
            });
            
            // Add hover effect
            overlay.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
                this.style.border = '2px solid yellow';
            });
            
            overlay.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
                this.style.border = 'none';
            });
            
            treeContainer.appendChild(overlay);
        });
    }
    
    // Function to update the display with the selected path information
    function updateDisplay(pathNumber, trumpName) {
        // Update title
        tarotTitle.textContent = `${trumpName} (Path ${pathNumber})`;
        
        // Update image - use clean filename format
        const imageName = trumpName.replace(/\s+/g, '');
        const imagePath = `images/${imageName}.jpg`;
        
        tarotImage.src = imagePath;
        tarotImage.alt = trumpName;
        tarotImage.style.display = 'block';
        
        // Update audio
        const audioPath = `audio/${pathNumber} ${trumpName}.wav`;
        meditationAudio.src = audioPath;
        meditationAudio.load();
        
        // Update path description
        pathDescription.textContent = pathDescriptions[pathNumber];
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
    tarotImage.addEventListener('error', function() {
        this.src = createPlaceholder(this.alt || 'Unknown');
        this.alt = 'Image not available';
    });
    
    // Function to handle audio loading errors
    meditationAudio.addEventListener('error', function() {
        pathDescription.textContent += '\n\nMeditation audio not available for this path.';
    });
    
    // Create a placeholder image with the trump name
    function createPlaceholder(trumpName) {
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
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            navigatePath(1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            navigatePath(-1);
        }
    });
    
    // Function to navigate paths with keyboard
    function navigatePath(direction) {
        currentActivePath = (currentActivePath + direction + 22) % 22;
        const trumpName = pathToTrump[currentActivePath];
        updateDisplay(currentActivePath, trumpName);
    }
    
    // Add touch swipe support for mobile devices
    let touchStartX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].screenX;
        
        if (touchEndX < touchStartX - 50) {
            // Swipe left
            navigatePath(1);
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right
            navigatePath(-1);
        }
    }, { passive: true });
});
