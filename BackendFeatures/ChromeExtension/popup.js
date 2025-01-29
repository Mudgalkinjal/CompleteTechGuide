document.addEventListener('DOMContentLoaded', function() {
    const colorSelect = document.getElementById('colorSelect');
    const changeColorBtn = document.getElementById('changeColor');
    const resetBtn = document.getElementById('reset');
  
    changeColorBtn.addEventListener('click', () => {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: (color) => {
            document.body.style.backgroundColor = color;
          },
          args: [colorSelect.value]
        });
      });
    });
  
    resetBtn.addEventListener('click', () => {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: () => {
            document.body.style.backgroundColor = 'white';
          }
        });
      });
    });
  });