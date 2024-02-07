// general selectors

const myContent = document.querySelector('#myContent');
const styleOptions = document.querySelector('#styleOptions');
const aboutElement = document.querySelector('#aboutElement');
const myCode = document.querySelector('#myCode');
const htmlCode = document.querySelector('#genCode');
const customInput = document.querySelector('#customInput');

// style selectors and arrays


// const headerStyleArr = ['centered', 'border', 'upper', 'lower'];

// style functions

const headingStyles = (element) => {

    styleOptions.innerHTML = `<h2>Style Options for ${element}</h2>` +
        '<input type="checkbox" name="centered" id="centered"> ' +
        '<label for="centered">center</label>' +
        ' <input type="checkbox" name="add-border" id="border">' +
        ' <label for="add-border">add border</label>' +
        ' <input type="checkbox" name="upper-case" id="upper"> ' +
        ' <label for="upper-case">uppercase</label>' +
        ' <input type="checkbox" name="lower-case" id="lower">' +
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
            '<H1>This is an H1 block</H1>';
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

const h4Info = () => {
    aboutElement.innerHTML = '<h3>About the H4 Element</h3>' +
        'The H4 element is a fourth-level heading that is used as an ' +
        'even deeper subheading that is one level down from the ' +
        'H3 element. You\'re not likely to see these on every single ' +
        'webpage. However, the H4 tag can be handy when you have ' +
        'a lot of information to organize.' +
        '<br><br><strong>Example code for the H4 tag:<br><br></strong>' +
        '<code>&lt;H4&gt;This is an H4 block&lt;/H4&gt;</code>' +
        '<br><br><strong>How it displays:<br><br></strong>' +
        '<H4>This is an H4 block</H4>';
}

const h5Info = () => {
    aboutElement.innerHTML = '<h3>About the H5 Element</h3>' +
        'The H5 element is a fifth-level heading that is used as an ' +
        'even deeper subheading that is one level down from the ' +
        'H4 element. You\'re not likely to see these on every single ' +
        'webpage. However, the H5 tag can be handy when you have ' +
        'a lot of information to organize.' +
        '<br><br><strong>Example code for the H5 tag:<br><br></strong>' +
        '<code>&lt;H5&gt;This is an H5 block&lt;/H5&gt;</code>' +
        '<br><br><strong>How it displays:<br><br></strong>' +
        '<H5>This is an H5 block</H5>';
}

const h6Info = () => {
    aboutElement.innerHTML = '<h3>About the H6 Element</h3>' +
        'The H6 element is a sixth-level heading that is used as an ' +
        'even deeper subheading that is one level down from the ' +
        'H5 element. It is the lowest-level heading tag available.' +
        '<br><br><strong>Example code for the H5 tag:<br><br></strong>' +
        '<code>&lt;H5&gt;This is an H5 block&lt;/H5&gt;</code>' +
        '<br><br><strong>How it displays:<br><br></strong>' +
        '<H5>This is an H5 block</H5>';
}

const headingInput = () => {
    customInput.innerHTML = '<input type="text" id="inputHeader" name="inputHeader"><br>';
}

const headingCode = (element) => {
    const userHeader = document.querySelector('#inputHeader').value;
    const convertedStyles = styleGen(element);
    myCode.innerHTML = '<h1 class="redH1">Here is your generated code:</h1>' +
        `<code>&lt;${element} style="${convertedStyles}"&gt;` +
        userHeader + `&lt;/${element}&gt;</code>` +
        '<br><br>Just copy and paste the code into your HTML editor!' +
        '<br><br><h2>This is how it will look in the browser:</h2>' +
        `<${element} style="${convertedStyles}">${userHeader}</${element}>`;
}

const styleGen = (element) => {
    let styleString = '';
    switch (element) {
        case 'H1':
        case 'H2':
        case 'H3':
        case 'H4':
        case 'H5':
        case 'H6':
            const centeredCheckbox = document.getElementById('centered');
            const borderCheckbox = document.getElementById('border');
            const upperCheckbox = document.getElementById('upper');
            const lowerCheckbox = document.getElementById('lower');
            if (centeredCheckbox.checked) {
                styleString += 'text-align:center;';
            }
            if (borderCheckbox.checked) {
                styleString += 'border: 1px solid black;';
            }
            if (upperCheckbox.checked) {
                styleString += 'text-transform: uppercase;';
            }
            if (lowerCheckbox.checked) {
                styleString += 'text-transform: lowercase;';
            }
            break;
    }
    return styleString;
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
            headingInput();
            break;
    }
}

const displayCode = () => {
    const selectedElement = myContent.value;
    switch (selectedElement) {
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


