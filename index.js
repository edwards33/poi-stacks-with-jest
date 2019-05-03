const { createStack } = require('./stack')

const lowerBodyStack = createStack()

lowerBodyStack.push('1. item')
lowerBodyStack.push('2. item')
lowerBodyStack.push('3. item')
lowerBodyStack.push('4. item')

lowerBodyStack.pop()
lowerBodyStack.pop()

document.getElementById("app").innerHTML = `
      <h1>Data Structures in JS using POI and Jest</h1>
      <h2>Stack Example</h2>
      <p>result for peek: ${lowerBodyStack.peek()}</p>
      <p>result for length: ${lowerBodyStack.length}</p>
    `

