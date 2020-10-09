import fetchData from './page-tree/data.js'

let menuItems

const createMenuItems = (menu, parent) => {
  for (let item of menu) {
    let menuItem = document.createElement('div');
    let menuItemIcon = document.createElement('span')
    
    menuItemIcon.classList.add('menu-item-icon')
    menuItemIcon.innerHTML = `${item.children ? '▶' : '•'}`
    menuItem.appendChild(menuItemIcon)

    menuItem.innerHTML += item.name
    menuItem.classList.add(`menu-item`)
    if (parent.classList.contains('menu-item')) menuItem.classList.add('hidden')
    menuItem.setAttribute("id", item.id)

    parent.appendChild(menuItem)
    if (item.children) createMenuItems(item.children, menuItem)
  }
}

const populateData = () => {
  fetchData().then(res => {
    menuItems = res
    let body = document.querySelector('.menu-list-container');
    createMenuItems(res, body)
  })
}

const displaySubMenus = (id) => {
  const item = document.getElementById(id)
  for (let child of item.children) {
    if (child.classList.contains('menu-item-icon')) {
      if (child.innerHTML === '▶') child.innerHTML = '▼' 
      else if (child.innerHTML === '▼') child.innerHTML = '▶'
    }

    if (child.classList.contains('menu-item')) {
      if (child.classList.contains('hidden')) child.classList.remove('hidden') 
      else child.classList.add('hidden')
    }
  }
}

document.addEventListener('click',function(e){
  if(e.target && e.target.classList.contains('menu-item')){
    displaySubMenus(e.target.id)
   }
});

document.addEventListener('DOMContentLoaded', populateData)