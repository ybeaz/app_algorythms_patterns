/**
 * @description Pattern: Composite	A tree structure of simple and composite objects
 * @narrative
      The Composite Pattern is a structural design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. It enables clients to treat individual objects and compositions of objects uniformly. Here are some common use cases for applying the Composite Pattern:

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

describe('Structural Patterns', () => {
  it('-- Pattern: Composite	A tree structure of simple and composite objects', () => {
    function Node(name) {
      this.name = name
      this.children = []
    }

    Node.prototype = {
      add(node) {
        this.children = [...this.children, node]
      },
    }

    let tree = {}
    let step = 0

    tree = new Node('root')
    const right = new Node('right')
    const left = new Node('left')
    const rightLeft = new Node('right-left')
    const rightRight = new Node('right-right')
    const leftLeft = new Node('left-left')
    const leftRight = new Node('left-right')
    tree.add(right)
    tree.add(left)
    right.add(rightLeft)
    right.add(rightRight)
    left.add(leftLeft)
    left.add(leftRight)

    let branches = []
    function callback(name) {
      branches = [...branches, name]
    }

    function traverse(node, callback) {
      if (node.children.length > 0) {
        node.children.forEach(item => traverse(item, callback))
      }
      callback(node.name)
    }

    traverse(tree, callback)

    const expected = ['right-left', 'right-right', 'right', 'left-left', 'left-right', 'left', 'root']
    // console.info('traverse', { tree, branches, expected })
    expect(branches).toEqual(expected)
  })
})
