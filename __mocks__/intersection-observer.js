const observe = jest.fn()
const disconnect = jest.fn()

window.IntersectionObserver = jest.fn(function () {
  this.observe = observe
  this.disconnect = disconnect
})
