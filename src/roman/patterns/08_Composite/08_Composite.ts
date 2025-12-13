/**
 * @description Pattern: Composite	A tree structure of simple and composite objects
 * @narrative The Composite Pattern is a structural design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. It enables clients to treat individual objects and compositions of objects uniformly. Here are some common use cases for applying the Composite Pattern:

      Graphic User Interface (GUI) Components:

      Scenario: In GUI systems where components such as windows, panels, and buttons form a hierarchy.
      Use Case: The Composite Pattern can be applied to represent GUI components as a tree structure, allowing clients to treat individual components and composite structures uniformly.
      File Systems:

      Scenario: In file systems where files and directories form a hierarchical structure.
      Use Case: The Composite Pattern is useful for representing files and directories as a tree, enabling clients to perform operations on both individual files and entire directory structures.
      Organization Hierarchy:

      Scenario: When modeling organizational hierarchies with departments and employees.
      Use Case: The Composite Pattern can be applied to represent departments as composite objects containing employees, allowing for uniform treatment of individual employees and entire departments.
      Document Structures:

      Scenario: In document processing systems where documents have a hierarchical structure with sections, paragraphs, and other elements.
      Use Case: The Composite Pattern facilitates the representation of document structures as a tree, making it easy to manipulate and traverse the elements.
      Menu Systems:

      Scenario: In applications with menu systems that have nested submenus.
      Use Case: The Composite Pattern can be used to represent menus and submenus as a tree structure, allowing for consistent handling of individual menu items and complex menu structures.
      Organization Charts:

      Scenario: When representing organization charts with hierarchies of positions and roles.
      Use Case: The Composite Pattern is applicable for modeling organization charts as trees, allowing for consistent handling of individual positions and entire branches of the organization.
      Graphics and Shapes:

      Scenario: In graphics applications where complex shapes can be composed of simpler shapes.
      Use Case: The Composite Pattern allows for representing complex graphics as compositions of simpler shapes, providing a unified approach to manipulating individual shapes and composite graphics.
      Mathematical Expressions:

      Scenario: In systems dealing with mathematical expressions with operators and operands.
      Use Case: The Composite Pattern can be applied to represent mathematical expressions as tree structures, allowing for consistent evaluation and manipulation of individual elements and complex expressions.
      Tree-like Data Structures:

      Scenario: When dealing with tree-like data structures such as XML or JSON.
      Use Case: The Composite Pattern is suitable for representing hierarchical data structures, making it easy to work with individual elements and nested structures.
      Drawing Applications:

      Scenario: In drawing applications where drawings consist of basic shapes and compositions of shapes.
      Use Case: The Composite Pattern can be used to represent drawings as trees, enabling users to interact with individual shapes and complex drawings seamlessly.
      In summary, the Composite Pattern is valuable when dealing with tree structures of simple and composite objects, providing a unified interface for clients to work with individual elements and compositions of elements. It promotes flexibility, scalability, and ease of manipulation in hierarchical structures.

      Node
      children
      name

      Node
      add
      remove
      getChild
      hasChildren

      traverse
      node

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 08_Composite.test`
 */

import { consoler } from 'yourails_common'

type GetCompositeParamsType = any

type GetCompositeOptionsType = { funcParent?: string }

type GetCompositeResType = any

interface GetCompositeType {
  (params: GetCompositeParamsType, options?: GetCompositeOptionsType): GetCompositeResType
}

const optionsDefault: Required<GetCompositeOptionsType> = {
  funcParent: 'getComposite',
}

/**
 * @description Function to getComposite
 * @import import { getComposite } from './getComposite'
 */

const getComposite: GetCompositeType = ({ name }: GetCompositeParamsType) => {
  let children: any[] = []

  return {
    name,
    getChildren: () => children,
    add: (child: any) => {
      children = [...children, child]
      consoler('08_Composite [92]', { child, children })
    },
    remove: (child: any) => children.filter((item: any) => item.name !== child.name),
    getChild: (index: number) => children[index],
    hasChildren: () => !!children.length,
  }
}

export { getComposite }
export type { GetCompositeParamsType, GetCompositeResType, GetCompositeOptionsType, GetCompositeType }

const traverse = (node: any, output = ''): any => {
  output = `${output}\n--${node.name}\n`

  if (node.hasChildren()) {
    node.getChildren().forEach((child: any) => {
      output = traverse(child, output)
    })
  }

  return output
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/patterns/08_Composite/08_Composite.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: GetCompositeParamsType
      options: GetCompositeOptionsType
      expected: GetCompositeResType
    }
    const examples: ExampleType[] = [{ description: '', params: {}, options: {}, expected: '' }]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      // const { params, options, expected } = example

      var tree = getComposite({ name: 'root' })
      var left = getComposite({ name: 'left' })
      var right = getComposite({ name: 'right' })
      var leftleft = getComposite({ name: 'leftleft' })
      var leftright = getComposite({ name: 'leftright' })
      var rightleft = getComposite({ name: 'rightleft' })
      var rightright = getComposite({ name: 'rightright' })

      tree.add(left)
      tree.add(right)
      tree.remove(right) // note: remove
      tree.add(right)

      left.add(leftleft)
      left.add(leftright)

      right.add(rightleft)
      right.add(rightright)

      const output = traverse(tree)

      consoler(`getComposite [61-${index}]`, {
        // description: '',
        // params,
        // expected,
        tree,
        output,
        // tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}
