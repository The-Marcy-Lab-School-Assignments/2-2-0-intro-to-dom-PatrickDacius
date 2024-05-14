const getMainHeadingText = () => {
  const mainHeading = document.querySelector('#main-heading')
  console.log(mainHeading.textContent)
};

const getAllMainText = () => {
  let newStr = ''
  const getAll = document.querySelectorAll('.main-text')
  for (i = 0; i < getAll.length; i++) {
    newStr += getAll[i].textContent
    if (i < getAll.length - 1) {
      newStr += ','
    }
  }
  console.log(newStr)
};

const setSubtitleText = () => {
  const makeNewTxt = document.querySelector('#subtitle').innerHTML = "This is a subtitle!"
  console.log(makeNewTxt)
};

const modifyDivClassList = () => {
  document.querySelector('#modify-classes').classList.remove('bad-class')
  document.querySelector('#modify-classes').classList.add('new-class')
};

const addH2 = () => {
  const h2 = document.createElement('h2');
  h2.innerHTML = "Another one!";
  h2.id = 'h2-test';
  document.body.appendChild(h2);
};

const removeOldInfo = () => {
  document.querySelector('#old-info').remove()
};

const makeAlphabet = () => {
  const letterNum =
    document.querySelector('#alphabet').dataset.numLetters
  const alphabetCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < letterNum; i++) {
    const liElement = document.createElement('li')
    liElement.textContent = `${alphabetCaps[i]} is letter #${i + 1} in the alphabet`
    document.querySelector('#alphabet').append(liElement)
  }
};

const makeBio = () => {
  document.querySelector('#my-bio').innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
};


// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
