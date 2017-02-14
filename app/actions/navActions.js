
const push = () => (dispatch, getState) => {
  console.log('push action')

}

const pop = () => (dispatch, getState) => {
  console.log('pop action')

}

const jumpToKey = () => (dispatch, getState) => {
  console.log('NAV_JUMP_TO_KEY')
}
const jumpToIndex = () => (dispatch, getState) => {
  console.log('NAV_JUMP_TO_INDEX')
}
const reset = () => (dispatch, getState) => {
  console.log('NAV_RESET')
}

module.exports = {
  push,
  pop,
  jumpToKey,
  jumpToIndex,
  reset
}
