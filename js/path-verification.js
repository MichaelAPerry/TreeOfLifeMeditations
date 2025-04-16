/* path-verification.js */
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const tarotTitle = document.getElementById('tarot-title');
    const tarotImage = document.getElementById('tarot-image');
    const meditationAudio = document.getElementById('meditation-audio');
    const pathDescription = document.getElementById('path-description');
    
    // Path verification data
    const pathData = [
        { path: 0, name: "The Fool", connections: "Crown to Wisdom" },
        { path: 1, name: "The Magician", connections: "Crown to Understanding" },
        { path: 2, name: "The High Priestess", connections: "Crown to Knowledge" },
        { path: 3, name: "The Empress", connections: "Wisdom to Understanding" },
        { path: 4, name: "The Emperor", connections: "Wisdom to Mercy" },
        { path: 5, name: "The Hierophant", connections: "Wisdom to Knowledge" },
        { path: 6, name: "The Lovers", connections: "Understanding to Knowledge" },
        { path: 7, name: "The Chariot", connections: "Understanding to Judgement" },
        { path: 8, name: "Strength", connections: "Mercy to Judgement" },
        { path: 9, name: "The Hermit", connections: "Mercy to Beauty" },
        { path: 10, name: "Wheel of Fortune", connections: "Mercy to Knowledge" },
        { path: 11, name: "Justice", connections: "Knowledge to Beauty" },
        { path: 12, name: "The Hanged Man", connections: "Judgement to Beauty" },
        { path: 13, name: "Death", connections: "Beauty to Eternity" },
        { path: 14, name: "Temperance", connections: "Beauty to Foundation" },
        { path: 15, name: "The Devil", connections: "Beauty to Reverberation" },
        { path: 16, name: "The Tower", connections: "Judgement to Reverberation" },
        { path: 17, name: "The Star", connections: "Foundation to Eternity" },
        { path: 18, name: "The Moon", connections: "Foundation to Reverberation" },
        { path: 19, name: "The Sun", connections: "Reverberation to Kingdom" },
        { path: 20, name: "Judgement", connections: "Foundation to Kingdom" },
        { path: 21, name: "The World", connections: "Eternity to Kingdom" }
    ];
    
    // Create verification report
    const verificationResults = document.createElement('div');
    verificationResults.id = 'verification-results';
    verificationResults.style.padding = '20px';
    verificationResults.style.backgroundColor = '#f0f0f0';
    verificationResults.style.border = '1px solid #ccc';
    verificationResults.style.marginTop = '20px';
    verificationResults.style.display = 'none';
    document.querySelector('.container').appendChild(verificationResults);
    
    // Add verification button
    const verifyButton = document.createElement('button');
    verifyButton.textContent = 'Verify All Paths';
    verifyButton.style.padding = '10px 20px';
    verifyButton.style.backgroundColor = '#4b0082';
    verifyButton.style.color = 'white';
    verifyButton.style.border = 'none';
    verifyButton.style.borderRadius = '5px';
    verifyButton.style.cursor = 'pointer';
    verifyButton.style.marginTop = '20px';
    document.querySelector('.audio-player').appendChild(verifyButton);
    
    // Verification function
    verifyButton.addEventListener('click', function() {
        verificationResults.style.display = 'block';
        verificationResults.innerHTML = '<h3>Path Verification Results</h3>';
        
        // Get all area elements
        const areas = document.querySelectorAll('area');
        
        // Check if we have the correct number of paths
        if (areas.length !== 22) {
            verificationResults.innerHTML += `<p style="color: red;">Error: Expected 22 paths, found ${areas.length}</p>`;
        } else {
            verificationResults.innerHTML += `<p style="color: green;">✓ Found all 22 paths</p>`;
        }
        
        // Verify each path
        let allPathsValid = true;
        
        for (let i = 0; i < areas.length; i++) {
            const area = areas[i];
            const pathNumber = area.getAttribute('data-path');
            const trumpName = area.getAttribute('data-trump');
            
            // Check if path number matches index
            if (parseInt(pathNumber) !== i) {
                verificationResults.innerHTML += `<p style="color: red;">Error: Path ${i} has incorrect path number: ${pathNumber}</p>`;
                allPathsValid = false;
            }
            
            // Check if trump name matches expected
            if (trumpName !== pathData[i].name) {
                verificationResults.innerHTML += `<p style="color: red;">Error: Path ${i} has incorrect trump name: ${trumpName}, expected: ${pathData[i].name}</p>`;
                allPathsValid = false;
            }
        }
        
        if (allPathsValid) {
            verificationResults.innerHTML += `<p style="color: green;">✓ All paths have correct attributes</p>`;
        }
        
        // Verify image map coordinates
        verificationResults.innerHTML += `<p>Image map coordinates should be manually verified with visual testing</p>`;
        
        // Verify audio files
        verificationResults.innerHTML += `<p>Audio files should be verified by clicking each path and confirming playback</p>`;
        
        // Summary
        if (allPathsValid) {
            verificationResults.innerHTML += `<p style="color: green; font-weight: bold;">All paths appear to be correctly configured!</p>`;
        } else {
            verificationResults.innerHTML += `<p style="color: red; font-weight: bold;">Some paths have configuration issues that need to be fixed.</p>`;
        }
    });
    
    // Add keyboard shortcut for verification (Ctrl+Alt+V)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.altKey && e.key === 'v') {
            verifyButton.click();
        }
    });
});
