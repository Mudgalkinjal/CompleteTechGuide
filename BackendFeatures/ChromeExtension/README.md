# Basic Chrome Extension Starter

A simple Chrome Extension template that demonstrates core extension concepts. Changes the background color of web pages.

## Features
- Browser popup with color selector
- Change page background color
- Reset to default color
- Manifest V3 compatibility

## Prerequisites
- Google Chrome (version 88+)
- Basic HTML/CSS/JavaScript knowledge

## Installation
1. Clone/download this repository
2. Open Chrome and navigate to:
   ```
   chrome://extensions/
   ```
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked"
5. Select the extension directory

## Usage
1. Click the extension icon in Chrome's toolbar
2. Select a color from the dropdown
3. Click "Change Color" to apply
4. Click "Reset" to restore default

## Project Structure
```
/your-extension/
├── manifest.json    - Extension metadata
├── popup.html       - Popup interface
├── popup.js         - Popup functionality
└── icons/           - Extension icons
```

## Customization
- Update colors in `popup.html`
- Modify icon set in `/icons/`
- Change permissions in `manifest.json`
- Add functionality in `popup.js`

# Chrome Extension Example

This project is a basic example of a Chrome Extension demonstrating key features like manifest v3 structure, popup interface creation, content scripting, and Chrome API usage.

## Features
- **Manifest V3 structure**
- **Popup interface creation**
- **Content scripting**
- **Chrome API usage**
- **Basic extension permissions**

## How to Use

1. **Set Up Icons**
   - Create an `icons` directory in the project root.
   - Add three PNG icons with the following sizes:
     - `16px`
     - `48px`
     - `128px`

2. **Load the Extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions`.
   - Enable "Developer mode" (toggle switch in the top-right corner).
   - Click on **Load unpacked** and select the project directory.

3. **Test the Extension**
   - Visit any website in Chrome.
   - Open the extension popup and test its functionality.

## Key Concepts Demonstrated

1. **Manifest V3 Structure**  
   The project adheres to the latest standards for Chrome extensions.

2. **Popup Interface Creation**  
   A user-friendly popup interface built with HTML, CSS, and JavaScript.

3. **Content Scripting**  
   The extension demonstrates how to interact with web pages using content scripts.

4. **Chrome API Usage**  
   Features include interaction with Chrome APIs to provide enhanced functionality.

5. **Basic Extension Permissions**  
   Includes permissions in the `manifest.json` file to ensure appropriate access to required features.
