// general selectors

const myContent = document.querySelector('#myContent');
const styleOptions = document.querySelector('#styleOptions');
const aboutElement = document.querySelector('#aboutElement');
const myCode = document.querySelector('#myCode');

// style functions

const headingStyles = (element) => {
    // add code to display the style options in the #styleOptions div
    styleOptions.innerHTML = `<h2>Style Options for ${element}</h2>` +
        '<input type="checkbox" name="centered"> ' +
        '<label for="centered">center</label>' +
        ' <input type="checkbox" name="add-border">' +
        ' <label for="add-border">add border</label>' +
        ' <input type="checkbox" name="upper-case"> ' +
        ' <label for="upper-case">uppercase</label>' +
        ' <input type="checkbox" name="lower-case">' +
        ' <label for="lower-case">lowercase</label>';
    displayAboutHeading(element);

    // const getStyles = document.getElementById('styleOptions').value;
    // console.log(getStyles);
}

const displayAboutHeading = (element) => {
    switch (element) {
        case 'H1':
            h1Info(); // function complete
            break;
        case 'H2':
            h2Info();
            break;
        case 'H3':
            h3Info();
            break;
        case 'H4':
            h4Info();
            break;
        case 'H5':
            h5Info();
            break;
        case 'H6':
            h6Info();
            break;
        default:
            console.log('displayAboutHeading() ran without receiving a valid heading tag');
    }
}

const h1Info = () => {
    aboutElement.innerHTML = '<h3>About the H1 Element</h3>' +
        'The H1 element is a top-level heading that is generally placed ' +
            'at the top of a webpage to denote what that page is about. ' +
            'It should be the most prominent text on your page. ' +
            'This helps both the user and the search engines understand what ' +
            'your page is all about.' +
            '<br><br><strong>Example code for the H1 tag:<br><br></strong>' +
            '<code>&lt;H1&gt;This is an H1 block&lt;/H1&gt;</code>' +
            '<br><br><strong>How it displays:<br><br></strong>' +
            '<H1 style="color:black">This is an H1 block</H1>';
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
            headingStyles(selectedElement);
            break;
    }
}

// event listeners

myContent.addEventListener('change', generatorMenu);

