// Task 1.0
const mainEl = document.querySelector('main');
// console.log(mainEl);
// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
// Task 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
// Task 1.3 Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');
// NOTE: mainEl.className = 'flex-ctr' would work here too

// Task 2.0
const topMenuEl = document.getElementById('top-menu');

// Task 2.1
topMenuEl.style.height = '100%';

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
topMenuEl.classList.add('flex-around');
// console.log(topMenuEl);

// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
];

// Task 3.1.... Abraham's help to do this. Was very lost.
// Use .textContent because it's just plain text, not .innerText or .innerHTML
// for (menuLink of menuLinks) {
//   const a = document.createElement('a');
//   a.setAttribute('href', menuLink.href);
//   a.textContent = menuLink.text;
//   topMenuEl.appendChild(a);
// }

menuLinks.forEach((objInArray) => {
  // Create an <a> element
  const a = document.createElement('a');
  //On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.setAttribute('href', objInArray.href);
  // Set the new element's content to the value of the text property of the "link" object.
  a.textContent = objInArray.text;
  // Append the new element to the topMenuElelement.
  // With .appendChild we can add only a Node object, ie, an object (like an element) we create, not string
  // topMenuEl.appendChild(a);
  topMenuEl.append(a);
  // console.log(a);
});

// Task 4.0
const subMenuEl = document.getElementById('sub-menu');
// Task 4.1
subMenuEl.style.height = '100%';
// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// Task 4.3
subMenuEl.classList.add('flex-around');
// Task 4.4
subMenuEl.style.position = 'absolute';
// Task 4.5
subMenuEl.style.top = '0';
// Task 5.1
const topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;
// Task 5.2
topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  // console.log(event);
  if (event.target.tagName.toLowerCase() !== 'a') {
    return;
  }
  if (event.target.textContent.toLowerCase() === 'about') {
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  }
  // console.log(event.target.innerHTML);

  // Task 5.3
  // console.dir(event.target);
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  // Task 5.4
  topMenuLinks.forEach((eachATag) => {
    eachATag.classList.remove('active');
    // console.log(eachATag.classList);
    // event.target.classList.remove('active')
  });

  // Task 5.5
  event.target.classList.add('active');

  // Task 5.6 Using .hasOwnProperty() -- help from Iskak M.
  // console.dir(event.target);
  // const clickedTagsContent = event.target.textContent;
  // let clickedTagObject = {};
  // menuLinks.forEach((linkObject) => {
  //   if (event.target.textContent === linkObject.text) {
  //     if (linkObject.hasOwnProperty('subLinks')) {
  //       showingSubMenu = true;
  //     } else {
  //       showingSubMenu = false;
  //     }
  //     clickedTagObject = linkObject;
  //   }
  // });

  // // Task 5.6 In Office Hours with Colton
  let clickedObject = menuLinks.find(
    (linkObject) => linkObject.text === event.target.textContent
  );
  // console.log(event.target);
  // console.log(menuLinks);
  if (clickedObject.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  console.log(clickedObject.subLinks);

  // Task 5.7 // go back up to event listener
  if (showingSubMenu) {
    function buildSubMenu(subLinksArray) {
      subMenuEl.textContent = '';
      // Task 5.8
      subLinksArray.forEach((subLinkObject) => {
        const aElement = document.createElement('a');
        aElement.setAttribute('href', subLinkObject.href);
        aElement.textContent = subLinkObject.text;
        subMenuEl.appendChild(aElement);
      });
    }
    buildSubMenu(clickedObject.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
  }
});

// Task 6.0
subMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  console.dir(event.target);
  if (event.target.nodeName.toLowerCase() !== 'a') {
    return;
  }
  console.log(event.target.textContent);
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  // Task 6.2
  topMenuLinks.forEach((eachATag) => {
    eachATag.classList.remove('active');
  });
  // Task 6.3
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  console.dir(event.target);
  // Task 6.4
});
