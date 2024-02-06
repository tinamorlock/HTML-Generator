// general selectors

const myContent = document.querySelector('#myContent');
const styleOptions = document.querySelector('#styleOptions');
const aboutElement = document.querySelector('#aboutElement');
const myCode = document.querySelector('#myCode');
const htmlCode = document.querySelector('#genCode')

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

// heading tag functions

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

const h2Info = () => {
    aboutElement.innerHTML = '<h3>About the H2 Element</h3>' +
        'The H2 element is a second-level heading that is used as a ' +
        'subheading on your webpage. This type of heading is most  ' +
        'useful for organizing the content on your page into ' +
        'sections or blocks of information that connect with ' +
        'the main topic of your page.' +
        '<br><br><strong>Example code for the H2 tag:<br><br></strong>' +
        '<code>&lt;H2&gt;This is an H2 block&lt;/H2&gt;</code>' +
        '<br><br><strong>How it displays:<br><br></strong>' +
        '<H2>This is an H2 block</H2>';
}

const h3Info = () => {
    aboutElement.innerHTML = '<h3>About the H3 Element</h3>' +
        'The H3 element is a third-level heading that is used as a ' +
        'subheading underneath the H2 heading element. It is not ' +
        'always used, but it can be helpful in organizing  ' +
        'the information that falls under an H2 tag. ' +
        '<br><br><strong>Example code for the H3 tag:<br><br></strong>' +
        '<code>&lt;H3&gt;This is an H3 block&lt;/H3&gt;</code>' +
        '<br><br><strong>How it displays:<br><br></strong>' +
        '<H3>This is an H3 block</H3>';
}

const headingInput = () => {
    // code will grab input and save to variable to convert to code later
}

const headingCode = (element, styles) => {
    // code that converts styles in a way that can be parsed into a style attribute
    const convertedStyles = styleGen(styles);
    myCode.innerHTML = `&lt;${element} style="${convertedStyles}"&gt;` +
    userHeader + '/&gt;';
}

const styleGen = (styles) => {
    // code will convert styles data into a string that can be inserted into a style attribute
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
            headingInput(); // not created yet
            break;
    }
}

const displayCode = () => {
    const selectedElement = myContent.value;
    const selectedStyles = styleOptions.value;
    switch (selectedElement, selectedStyles) {
        case 'H1':
        case 'H2':
        case 'H3':
        case 'H4':
        case 'H5':
        case 'H6':
            headingCode(selectedElement);
            break;
    }
}

// event listeners

myContent.addEventListener('change', generatorMenu);
htmlCode.addEventListener('click', displayCode);


