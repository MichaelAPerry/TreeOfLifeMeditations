# The Fool's Journey - Tree of Life Interactive Website

## Overview
This interactive website allows users to explore the Tree of Life and The Fool's Journey through the 22 paths of the Kabbalistic Tree of Life. Each path corresponds to a tarot trump card from the Major Arcana, and clicking on a path displays the associated tarot card image and plays the corresponding meditation audio.

## Features
- Interactive Tree of Life image map with 22 clickable paths
- Display of tarot trump images when paths are clicked
- Audio playback of meditations for each path
- Responsive design for both desktop and mobile devices
- Keyboard navigation support (arrow keys)
- Touch swipe support for mobile devices
- Detailed path descriptions

## File Structure
```
tree_of_life_website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # CSS styling
├── js/
│   ├── optimized-script.js # Main JavaScript functionality
│   ├── enhanced-script.js  # Extended version with additional features
│   └── path-verification.js # Tool for verifying path configuration
├── images/
│   ├── Tree_of_life1.jpg   # Main Tree of Life image
│   └── [tarot trump images].jpg # Images for each tarot trump
└── audio/
    └── [meditation files].wav # Audio meditations for each path
```

## Usage Instructions
1. Open `index.html` in a web browser
2. Click on any path in the Tree of Life image
3. The corresponding tarot trump image will be displayed
4. The meditation audio will be loaded and can be played using the audio controls
5. Read the path description for more information
6. Navigate between paths using:
   - Direct clicking on paths
   - Arrow keys (left/right or up/down)
   - Touch swipes on mobile devices (left/right)

## Path Mapping
The website maps the 22 paths of the Tree of Life to the Major Arcana tarot cards as follows:

- Path 0: The Fool - Connects Crown (Kether) to Wisdom (Chokmah)
- Path 1: The Magician - Connects Crown (Kether) to Understanding (Binah)
- Path 2: The High Priestess - Connects Crown (Kether) to Knowledge (Da'at)
- Path 3: The Empress - Connects Wisdom (Chokmah) to Understanding (Binah)
- Path 4: The Emperor - Connects Wisdom (Chokmah) to Mercy (Chesed)
- Path 5: The Hierophant - Connects Wisdom (Chokmah) to Knowledge (Da'at)
- Path 6: The Lovers - Connects Understanding (Binah) to Knowledge (Da'at)
- Path 7: The Chariot - Connects Understanding (Binah) to Judgement (Geburah)
- Path 8: Strength - Connects Mercy (Chesed) to Judgement (Geburah)
- Path 9: The Hermit - Connects Mercy (Chesed) to Beauty (Tiphareth)
- Path 10: Wheel of Fortune - Connects Mercy (Chesed) to Knowledge (Da'at)
- Path 11: Justice - Connects Knowledge (Da'at) to Beauty (Tiphareth)
- Path 12: The Hanged Man - Connects Judgement (Geburah) to Beauty (Tiphareth)
- Path 13: Death - Connects Beauty (Tiphareth) to Eternity (Netzach)
- Path 14: Temperance - Connects Beauty (Tiphareth) to Foundation (Yesod)
- Path 15: The Devil - Connects Beauty (Tiphareth) to Reverberation (Hod)
- Path 16: The Tower - Connects Judgement (Geburah) to Reverberation (Hod)
- Path 17: The Star - Connects Foundation (Yesod) to Eternity (Netzach)
- Path 18: The Moon - Connects Foundation (Yesod) to Reverberation (Hod)
- Path 19: The Sun - Connects Reverberation (Hod) to Kingdom (Malkuth)
- Path 20: Judgement - Connects Foundation (Yesod) to Kingdom (Malkuth)
- Path 21: The World - Connects Eternity (Netzach) to Kingdom (Malkuth)

## Technical Notes
- The website uses HTML5, CSS3, and vanilla JavaScript
- No external libraries or frameworks are required
- Audio files are in WAV format
- Image maps are used for path selection
- Canvas is used for generating placeholder images

## Browser Compatibility
The website has been tested and is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Customization
To customize the website:
- Replace tarot trump images in the `images` folder (use the format `[TrumpName].jpg` without spaces)
- Replace audio files in the `audio` folder (use the format `[PathNumber] [TrumpName].wav`)
- Modify path descriptions in the `pathDescriptions` object in the JavaScript file
- Adjust styling in the `styles.css` file

## Troubleshooting
- If images don't display, ensure they follow the naming convention and are placed in the `images` folder
- If audio doesn't play, ensure the files follow the naming convention and are placed in the `audio` folder
- For path verification, use the verification tool by pressing Ctrl+Alt+V or clicking the "Verify All Paths" button
