function enhanceElement(targetElement) {
    if (targetElement) {
        // Create a new button element
        var button = document.createElement('button');
        
        // Set the button's text and style
        button.textContent = 'Click me';
        button.style.position = 'absolute';
        button.style.top = '0';
        button.style.right = '0';
        
        // Add a red border to the target element
        targetElement.style.border = '2px solid red';
        
        // Append the button to the target element
        targetElement.appendChild(button);
        
        // Add an event listener to the button (optional)
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
        
        // Add event listeners for focus and blur on the target element
        targetElement.addEventListener('focus', function() {
            // Elevate the target element when focused
            targetElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        });
        
        targetElement.addEventListener('blur', function() {
            // Reset the elevation when not focused
            targetElement.style.boxShadow = 'none';
        });
    } else {
        console.error('Target element not found!');
    }
};

function addFrame() {
    var elements = document.getElementsByClassName('col-12 fetchedText');
    
    for (var i = 0; i < elements.length ; i++) {
        enhanceElement(elements[i]);
    }
    
    console.log('Enhanced ' + elements.length + ' elements');
};

browser.scripting.executeScript({
    target: {allFrames: true},
    function: addFrame
});
