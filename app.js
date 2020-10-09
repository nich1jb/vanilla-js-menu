import fetchData from './page-tree/data.js'

const getData = () => {
  return fetchData().then((res) => res)
}

const createMenuItems = (menu, parent) => {
  for (let item of menu) {
    let menuItem = document.createElement('div');
    menuItem.innerHTML = item.name

    parent.appendChild(menuItem)
  }
}

const populateData = () => {
  fetchData().then(res => {
    let body = document.querySelector('body');
    createMenuItems(res, body)
  })
}

document.addEventListener('DOMContentLoaded', populateData)