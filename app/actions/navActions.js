
const push = () => (dispatch, getState) => {
  console.log('push action')

}

const pop = () => (dispatch, getState) => {
  console.log('pop action')

}

module.exports = {
  push,
  pop
}
