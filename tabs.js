const tabList = document.querySelector('[role="tab-list"]');
const tabs = document.querySelectorAll('[role="tab"]');

//EVENT LISTENERS

tabList.addEventListener('keydown', changeFocus);
tabs.forEach((tab) => {
    tab.addEventListener('click', tabContent)
})

//FUNCTIONS
let tabFocus = 0;
function changeFocus(e) {
    let leftArrowKey = 37;
    let rightArrowKey = 39;

   if(e.keyCode === leftArrowKey || e.keyCode === rightArrowKey) {
     tabs[tabFocus].setAttribute('tabindex', -1); //this changes the tab-index of the current tab to -1;

     if(e.keyCode === rightArrowKey) {
        tabFocus++;
        if(tabFocus >= tabs.length) {
            tabFocus = 0;       }
    }
    else if(e.keyCode === leftArrowKey) {
         tabFocus--;
         if(tabFocus < 0) {
             tabFocus = tabs.length -1; 
         }   
     }       
     tabs[tabFocus].setAttribute("tabindex", 0);
     tabs[tabFocus].focus();
   }
   
}

function tabContent (e) {
    targetTab = e.target;
    tabContentDisplay = targetTab.getAttribute("aria-controls");
    targetImage = targetTab.getAttribute('data-image');

    tabContainer = targetTab.parentNode;
    mainContainer = tabContainer.parentNode;

    tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false);

    targetTab.setAttribute('aria-selected', true);
    
    //CONTENT DISPLAY
    hideContent(mainContainer,'[role="tabpanel"]');
    showContent(mainContainer, `#${tabContentDisplay}`)

    //FOR PICTURES

    hideContent(mainContainer,'picture');
    showContent(mainContainer, `#${targetImage}`)


}

function hideContent(parent, content) {
    parent.querySelectorAll(content).forEach((item) => {
        item.setAttribute('hidden', true);
    });
}

function showContent (parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
}