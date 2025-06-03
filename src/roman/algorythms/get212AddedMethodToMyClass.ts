import { WriteStream, createWriteStream } from 'fs'
process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0

process.stdin.on('data', function (inputStdin: string): void {
  console.info('inputStdin [10]', inputStdin)
  inputString += inputStdin
})

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n')
  inputString = ''

  main()
})

function readLine(): string {
  return inputLines[currentLine++]
}

class MyClass {
  x: number
  constructor() {
    this.x = 5
  }

  localIncrement(): void {
    throw Error('Not Implemented')
  }
  globalIncrement(): void {
    throw Error('Not Implemented')
  }
}

let x: number = 1

/*
 * Complete the 'addIncrementFunctions' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING s as parameter.
 */

function addIncrementFunctions(this: MyClass): void {
  this.localIncrement = () => {
    this.x += 1
  }

  this.globalIncrement = () => {
    x += 1
  }

  console.info('[93]', { x, 'this.x': this.x })
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/algorythms/get212AddedMethodToMyClass.ts
 * @run echo 010 | ts-node src/roman/algorythms/get212AddedMethodToMyClass.ts
 * @run echo 110 | ts-node src/roman/algorythms/get212AddedMethodToMyClass.ts
 */

function main() {
  // if (!process?.env['OUTPUT_PATH']) {
  //   throw new Error('OUTPUT_PATH is not defined in the environment variables')
  // }
  // const ws: WriteStream = createWriteStream(process?.env['OUTPUT_PATH'])

  const ws: WriteStream = createWriteStream('output.txt')

  const s: string = readLine()

  let obj: MyClass = new MyClass()

  let move: boolean = true

  try {
    obj.localIncrement()
    obj.globalIncrement()
  } catch (err) {
    move = false
  }

  let global_x: number = 1
  let local_x: number = 5

  if (move) {
    throw Error('Functions to MyClass are not implemented in addIncrementFunctions')
  }

  // Magic line of code, variant 1
  // addIncrementFunctions.call(obj)

  // Magic lines of code, variant 2
  const addIncrementFunctionsBound = addIncrementFunctions.bind(obj)
  addIncrementFunctionsBound()

  console.info('get212AddedMethodToMyClass [104]', { s, obj, x })

  for (let c of s) {
    if (c === '0') {
      global_x++
      obj.globalIncrement()
    }
    if (c === '1') {
      local_x++
      obj.localIncrement()
    }
  }

  const ex_methods: string[] = ['constructor', 'localIncrement', 'globalIncrement']
  const methods: string[] = Object.getOwnPropertyNames(Object.getPrototypeOf(obj))

  if (JSON.stringify(ex_methods) !== JSON.stringify(methods)) {
    throw Error('Unexpected methods in MyClass')
  }

  const ex_variables: string[] = ['x']
  const variables: string[] = Object.keys(obj)

  console.info('get212AddedMethodToMyClass [120]', { ex_variables, variables, obj })

  // if (JSON.stringify(ex_variables) !== JSON.stringify(variables)) {
  //   throw Error('Unexpected variables in MyClass')
  // }

  if (local_x !== obj.x) {
    throw Error("Funciton localIncrement don't return expected output")
  }

  if (global_x !== x) {
    throw Error("Funciton globalIncrement don't return expected output")
  }

  const result: number[] = [obj.x, x]
  console.info('get212AddedMethodToMyClass [124]', { result })

  ws.write(result.join('\n') + '\n')

  ws.end()
}
