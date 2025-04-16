/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const treeMap = document.getElementById('tree-map');
    const tarotTitle = document.getElementById('tarot-title');
    const tarotImage = document.getElementById('tarot-image');
    const meditationAudio = document.getElementById('meditation-audio');
    const pathDescription = document.getElementById('path-description');
    
    // Path descriptions
    const pathDescriptions = {
        0: "Path 0: The Fool - Connects Crown to Wisdom",
        1: "Path 1: The Magician - Connects Crown to Understanding",
        2: "Path 2: The High Priestess - Connects Crown to Knowledge",
        3: "Path 3: The Empress - Connects Wisdom to Understanding",
        4: "Path 4: The Emperor - Connects Wisdom to Mercy",
        5: "Path 5: The Hierophant - Connects Wisdom to Knowledge",
        6: "Path 6: The Lovers - Connects Understanding to Knowledge",
        7: "Path 7: The Chariot - Connects Understanding to Judgement",
        8: "Path 8: Strength - Connects Mercy to Judgement",
        9: "Path 9: The Hermit - Connects Mercy to Beauty",
        10: "Path 10: Wheel of Fortune - Connects Mercy to Knowledge",
        11: "Path 11: Justice - Connects Knowledge to Beauty",
        12: "Path 12: The Hanged Man - Connects Judgement to Beauty",
        13: "Path 13: Death - Connects Beauty to Eternity",
        14: "Path 14: Temperance - Connects Beauty to Foundation",
        15: "Path 15: The Devil - Connects Beauty to Reverberation",
        16: "Path 16: The Tower - Connects Judgement to Reverberation",
        17: "Path 17: The Star - Connects Foundation to Eternity",
        18: "Path 18: The Moon - Connects Foundation to Reverberation",
        19: "Path 19: The Sun - Connects Reverberation to Kingdom",
        20: "Path 20: Judgement - Connects Foundation to Kingdom",
        21: "Path 21: The World - Connects Eternity to Kingdom"
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
        tarotTitle.textContent = trumpName;
        
        // Update image
        tarotImage.src = `images/${trumpName.replace(/\s+/g, '')}.jpg`;
        tarotImage.alt = trumpName;
        tarotImage.style.display = 'block';
        
        // Update audio
        meditationAudio.src = `audio/${pathNumber} ${trumpName}.wav`;
        meditationAudio.load();
        
        // Update path description
        pathDescription.textContent = pathDescriptions[pathNumber];
        
        // Optional: Play audio automatically
        // meditationAudio.play();
    }
    
    // Function to handle image loading errors
    tarotImage.addEventListener('error', function() {
        this.src = 'images/placeholder.jpg';
        this.alt = 'Image not available';
    });
    
    // Function to handle audio loading errors
    meditationAudio.addEventListener('error', function() {
        pathDescription.textContent = 'Meditation audio not available for this path.';
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
        
        // Add text
        ctx.fillStyle = '#4b0082';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Select a path on', canvas.width/2, canvas.height/2 - 20);
        ctx.fillText('the Tree of Life', canvas.width/2, canvas.height/2 + 20);
        
        // Convert to data URL and create image
        const dataUrl = canvas.toDataURL('image/png');
        const img = new Image();
        img.src = dataUrl;
        img.alt = 'Placeholder';
        
        return dataUrl;
    }
    
    // Create a placeholder image in the images directory
    const placeholderDataUrl = createPlaceholder();
    tarotImage.src = placeholderDataUrl;
    tarotImage.style.display = 'block';
});
