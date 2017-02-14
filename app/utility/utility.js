const generateRoute = (params) => {

  let route = {
    key: 'Key' + Date.now(),
    Title: params.title || 'No Title',
    direction: params.direction || 'horizontal',
    path: params.path || ''
  }

  return route
}

module.exports =  {
  generateRoute
}
