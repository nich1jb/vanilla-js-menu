const fakeFetch = new Promise(resolve => {
    resolve([
      {id: "0", title: "Title 1", children: []},
      {id: "1", title: "Title 2", children: [
        {id: "2", title: "SubTitle 1", children: []},
        {id: "2", title: "SubTitle 1", children: []}
      ]}
    ])
  })


const getData = () => {
  console.log('here')
  fakeFetch.then((res) => {
    console.log(res)
  })
}

document.getElementById('call-button').addEventListener('click', getData)