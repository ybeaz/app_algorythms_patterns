/**
 * @description Pattern: Bridge	Separates an object’s interface from its implementation
 * @narrative The Bridge Pattern is a structural design pattern that separates the abstraction (interface) from its implementation, allowing them to vary independently. This pattern is useful when you want to avoid a permanent binding between an abstraction and its implementation and to provide a way to extend both without affecting the other. Here are some common use cases for applying the Bridge Pattern:

      Graphic System:

      Scenario: In a graphic system where shapes and rendering methods can vary independently.
      Use Case: The Bridge Pattern can be used to separate the abstraction (e.g., shape) from its implementation (e.g., rendering), allowing for new shapes or rendering methods to be added without modifying existing code.
      Remote Controls and Devices:

      Scenario: When implementing remote controls that can operate different types of electronic devices.
      Use Case: The Bridge Pattern can be applied to separate the abstraction of a remote control from the implementation of the electronic devices, allowing for easy addition of new devices without modifying the remote control code.
      Windowing Systems:

      Scenario: In a windowing system where different platforms have different window controls.
      Use Case: The Bridge Pattern can be used to separate the abstraction of window controls from their platform-specific implementation, enabling the addition of new platforms or window controls without affecting existing code.
      Database Abstraction:

      Scenario: When designing a database abstraction layer that supports multiple database systems.
      Use Case: The Bridge Pattern can be applied to separate the abstraction of database operations from their specific implementations for different database systems, allowing for support of new databases without changing the core database abstraction code.
      Networking Layers:

      Scenario: In a networking system where different communication protocols need to be supported.
      Use Case: The Bridge Pattern can be used to separate the abstraction of networking operations from their specific implementations for different protocols, enabling the addition of new protocols without affecting existing code.
      Audio/Video Players:

      Scenario: When building audio or video players that can support various file formats.
      Use Case: The Bridge Pattern can be applied to separate the abstraction of media players from the specific implementations for different file formats, allowing for the addition of new formats without modifying the player code.
      Printers and Print Implementations:

      Scenario: In a printing system where different printers have different ways of handling print jobs.
      Use Case: The Bridge Pattern can be used to separate the abstraction of printing from its implementation for different printer types, allowing for the addition of new printers without altering existing print code.
      Notification Systems:

      Scenario: When designing a notification system that can send messages through various channels (e.g., email, SMS, push notifications).
      Use Case: The Bridge Pattern can be applied to separate the abstraction of notifications from their implementation for different channels, allowing for the addition of new notification channels without modifying the core notification system.
      Sorting Algorithms:

      Scenario: When implementing sorting algorithms where different algorithms can be applied to different data structures.
      Use Case: The Bridge Pattern can be used to separate the abstraction of sorting from the specific implementations for different data structures, enabling the addition of new sorting algorithms without changing the sorting code.
      In each of these use cases, the Bridge Pattern provides a way to decouple abstraction from implementation, allowing for more flexibility, extensibility, and the ability to add new features without modifying existing code. It helps manage complexity and promotes a modular and scalable design.

      Gestures
      output
      tap
      swipe
      pan
      pinch

      Mouse
      output
      click
      move
      down
      wheel

      Screen
      click
      move
      drag
      zoom

      Audio
      click
      move
      drag
      zoom

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 07_Bridge.test`
 */

import { consoler } from 'yourails_common'

type GetTemplateFuncParamsType = any

type GetTemplateFuncOptionsType = { funcParent?: string }

type GetTemplateFuncResType = any

interface GetTemplateFuncType {
  (params: GetTemplateFuncParamsType, options?: GetTemplateFuncOptionsType): GetTemplateFuncResType
}

const optionsDefault: Required<GetTemplateFuncOptionsType> = {
  funcParent: 'getTemplateFunc',
}

/**
       * @description Function to getTemplateFunc
       * @import import {
          getTemplateFunc,
          GetTemplateFuncParamsType,
          GetTemplateFuncResType 
        } from './getTemplateFunc'
       */

const getTemplateFunc: GetTemplateFuncType = (
  params: GetTemplateFuncParamsType,
  options: GetTemplateFuncOptionsType = optionsDefault
) => {
  return ''
}

export { getTemplateFunc }
export type { GetTemplateFuncParamsType, GetTemplateFuncResType, GetTemplateFuncOptionsType, GetTemplateFuncType }

/**
 * @description Here the file is being run directly
 * @run ts-node src/Shared/getTemplateFunc.ts
 * @test yarn jest getTemplateFunc.test.ts --coverage --collectCoverageFrom="src/Shared/getTemplateFunc.ts"
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: GetTemplateFuncParamsType
      options: GetTemplateFuncOptionsType
      expected: GetTemplateFuncResType
    }
    const examples: ExampleType[] = [{ params: {}, options: {}, expected: '' }]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { params, options, expected } = example

      const output = await getTemplateFunc(params, options)
      consoler(`getTemplateFunc [61-${index}]`, {
        params,
        expected,
        output,
        tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}
