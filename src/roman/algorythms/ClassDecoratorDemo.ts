function Log(target: any, key: string, descriptor: any) {
  const originalMethod = descriptor.value
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with arguments:`, args)
    const result = originalMethod.apply(this, args)
    console.log(`Result of ${key}:`, result)
    return result
  }
  return descriptor
}

function add(a: number, b: number) {
  return a + b
}

class MyClass {}

// Create a property descriptor for the method
let descriptor2 = {
  value: add,
  writable: true,
  configurable: true,
  enumerable: false,
}

// Apply the decorator
descriptor2 = Log(MyClass.prototype, 'add', descriptor2)

// Define the method on the prototype
Object.defineProperty(MyClass.prototype, 'add', descriptor2)

/**
 * @description Here the file is being run directly
 * @run ts-node src/modules/mcpServer/toolsPlaywright.service.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: any
      options: any
      expected: any
    }
    const examples: ExampleType[] = [{ params: {}, options: {}, expected: '' }]

    examples.map((example: ExampleType, index: number) => {
      const { params, options, expected } = example

      const classInstance = new MyClass()

      // @ts-expect-error
      const output = classInstance.add(23, 45)
      console.info(`getTemplateFunc [243-${index}]`, {
        params,
        output,
        tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
  })()
}
