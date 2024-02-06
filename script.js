// general selectors

const myContent = document.querySelector('#myContent');
const styleOptions = document.querySelector('#styleOptions');
const aboutElement = document.querySelector('#aboutElement');
const myCode = document.querySelector('#myCode');

// style functions

const headingStyles = () => {
    // add code to display the style options in the #styleOptions div
    styleOptions.innerHTML = 'test'; // this code is working and where I stopped
}

const generatorMenu = () => {
    // add code here to display heading style options in the #styleOptions div
    const selectedElement = myContent.value;
    switch (selectedElement) {
        case 'H1':
        case 'H2':
        case 'H3':
        case 'H4':
        case 'H5':
        case 'H6':
            headingStyles();
            break;
    }
}

// heading event listeners

myContent.addEventListener('change', generatorMenu);

