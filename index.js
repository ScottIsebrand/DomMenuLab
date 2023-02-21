// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];
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

// Task 3.1.... Ugh, needed Abraham's help to do this. Was very lost.
for (menuLink of menuLinks) {
  const a = document.createElement('a');
  a.setAttribute('href', menuLink.href);
  a.innerText = menuLink.text;
  topMenuEl.appendChild(a);
}

// menuLinks.forEach()
