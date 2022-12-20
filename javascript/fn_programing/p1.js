// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);
// for loop chalake bas us function ko call karna tha 
// wo prepareTea function ko bar bar call karta hai

const tea4GreenTeamFCC = getTea(prepareGreenTea(),27);
const tea4BlackTeamFCC = getTea(prepareBlackTea(),13);

// change karne ka man hua to function kese kitni bar call karna hai

// 2nd

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// idhar sabse pehle .tabOpen() se new tab khulta hai
// .join() se tum set of tabs ke ek tab ko add kar sakte hai
// .tabClose() se to window se pehle 0 se index tak ek store karega
// fir index ko after vale me save kar lega and 
// then durse baki ke sathe before vale ko concate kar dega
// and last me push kar dega
// to social add karna tha fir new tab vala fir join the video vala but 3rd tab close karke
// fir join kiya workwindow usme 2nd tab close karke join karna tha
// array of tabs open in window
// isme problem tha 49th line me (index +1 ) likha tha but usko modified array ke sath kam karna tha
// to sirf (1) pehli value hi nikalni thi

// function esa banao ke global variable pe dependant ho
// or return fixedvalue ko change kiye bina ek large karke mile
let fixedValue = 4;
function incrementer() {
  return fixedValue+1;
}

// The global variable
fixedValue = 4;

// Only change code below this line
function incrementer(value) {
  return value+1;

  // Only change code above this line
}

