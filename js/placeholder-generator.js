// Create placeholder images for tarot trumps
const placeholderImages = [
    { path: 0, name: "The Fool" },
    { path: 1, name: "The Magician" },
    { path: 2, name: "The High Priestess" },
    { path: 3, name: "The Empress" },
    { path: 4, name: "The Emperor" },
    { path: 5, name: "The Hierophant" },
    { path: 6, name: "The Lovers" },
    { path: 7, name: "The Chariot" },
    { path: 8, name: "Strength" },
    { path: 9, name: "The Hermit" },
    { path: 10, name: "Wheel of Fortune" },
    { path: 11, name: "Justice" },
    { path: 12, name: "The Hanged Man" },
    { path: 13, name: "Death" },
    { path: 14, name: "Temperance" },
    { path: 15, name: "The Devil" },
    { path: 16, name: "The Tower" },
    { path: 17, name: "The Star" },
    { path: 18, name: "The Moon" },
    { path: 19, name: "The Sun" },
    { path: 20, name: "Judgement" },
    { path: 21, name: "The World" }
];

// Create placeholder images for each tarot trump
function createPlaceholderImages() {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 450;
    const ctx = canvas.getContext('2d');
    
    placeholderImages.forEach(card => {
        // Clear canvas
        ctx.fillStyle = '#f8f8f8';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add border
        ctx.strokeStyle = '#4b0082';
        ctx.lineWidth = 10;
        ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);
        
        // Add title
        ctx.fillStyle = '#4b0082';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(card.name, canvas.width/2, 50);
        
        // Add path number
        ctx.font = 'bold 36px Arial';
        ctx.fillText(`Path ${card.path}`, canvas.width/2, canvas.height/2);
        
        // Add decorative elements
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2 + 50, 50, 0, Math.PI * 2);
        ctx.strokeStyle = '#9370db';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Convert to data URL and save
        const dataUrl = canvas.toDataURL('image/jpeg');
        
        // Create a link to download the image
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${card.name.replace(/\s+/g, '')}.jpg`;
        link.click();
    });
}

// Note: This function would be used in a development environment
// to create placeholder images. In a production environment,
// actual tarot card images would be used instead.
