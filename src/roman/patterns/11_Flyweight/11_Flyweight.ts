/**
 * @description A fine-grained instance used for efficient sharing
 * @narrative Flyweight pattern is a structural design pattern that aims to minimize memory usage or computational expenses by sharing as much as possible with related objects. The key idea is to use a shared object to represent multiple similar objects, rather than creating a new instance for each occurrence. The use cases for applying the Flyweight pattern often involve scenarios where there are a large number of similar objects, and memory or performance optimization is crucial. Here are some use cases for applying the Flyweight pattern:

      Text Editors and Word Processors:

      Scenario: In text editors or word processors, characters, fonts, and formatting attributes can be represented as flyweights.
      Use Case: Instead of creating a separate object for each character in a document, shared flyweights for common characters, fonts, and styles can be used to save memory.
      Graphics and GUI Systems:

      Scenario: In graphical applications, graphical elements like buttons, icons, and shapes often share common attributes.
      Use Case: Flyweights can be used to represent shared properties (e.g., color, size) across multiple graphical elements, reducing the memory footprint.
      Game Development:

      Scenario: In game development, objects like bullets, enemies, or particles may have common properties that can be shared.
      Use Case: Flyweights can be applied to represent shared properties of game objects, improving performance and reducing memory usage.
      Databases and Caching:

      Scenario: In scenarios where there are many instances of similar data, and memory optimization is crucial.
      Use Case: Flyweights can be used to represent shared data in a database or caching system, reducing the storage requirements and improving retrieval times.
      Network Protocol Implementation:

      Scenario: In cases where network protocol headers or structures have common fields.
      Use Case: Flyweights can be employed to represent shared information in protocol structures, optimizing memory usage in network-related operations.
      Resource Pooling:

      Scenario: When there is a need to manage and reuse a limited set of resources efficiently.
      Use Case: Flyweights can be used to represent reusable resources, such as database connections, threads, or other objects, in a resource pool.
      Document Object Model (DOM) in Web Development:

      Scenario: In web development, elements in the DOM tree often share properties such as styles.
      Use Case: Flyweights can be applied to represent shared styles or attributes across multiple DOM elements, optimizing the rendering process.
      In these use cases, the Flyweight pattern helps in achieving efficiency by minimizing the number of distinct objects created and shared commonalities among multiple instances. It is particularly useful in situations where the number of objects is large, and optimizing memory usage or performance is a priority.

      Flyweight
      make, model, processor

      FlyWeightFactory
      flyweights
      get
      getCount

      ComputerCollection
      computers
      count
      add
      get

      Computer
      make, model, processor, memory, tag

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 11_Flyweight.test` 
 */

/**
BulletType
  constructor({ sprite, speed, damage })
  describe()

// FLYWEIGHT FACTORY: creates & caches BulletType instances
class BulletTypeFactory
  constructor() cache
  getBulletType(key, config)
  get count()

// CONTEXT: individual bullets with extrinsic state (position, direction, owner...)
class Bullet {
  constructor({ x, y, direction, type }) 
  update(dt)
  render

const pistol = {
  sprite: "pistol-bullet.png",
  speed: 500,
  damage: 10,
});

const rocket = {
  sprite: "rocket.png",
  speed: 200,
  damage: 80,
};

// All pistol bullets reuse the *same* BulletType instance
const bullets = [
  { x: 0, y: 0, direction: 0, type: pistolType },
  { x: 10, y: 5, direction: Math.PI / 4, type: pistolType },
  { x: -5, y: 20, direction: Math.PI / 2, type: pistolType },
  { x: 100, y: 50, direction: Math.PI, type: rocketType },
]


console.log("Bullet types created:", bulletTypeFactory.count); // 2, not 4

*/

import { rest } from 'lodash-es'
import { consoler } from 'yourails_common'

type BulletObjType = {
  sprite: string
  speed: number
  damage: number
}
const getPistolObj = (): BulletObjType => ({
  sprite: 'pistol-bullet.png',
  speed: 500,
  damage: 10,
})

const getRocketObj = (): BulletObjType => ({
  sprite: 'rocket.png',
  speed: 200,
  damage: 80,
})

type GetBulletParamsType = {
  x: number
  y: number
  direction: string
  type: string
  typeObj: Record<string, BulletObjType>
}

type GetFlyweightParamsType = any

type GetFlyweightOptionsType = { funcParent?: string }

type GetFlyweightResType = any

interface GetFlyweightType {
  (params: GetFlyweightParamsType, options?: GetFlyweightOptionsType): GetFlyweightResType
}

const optionsDefault: Required<GetFlyweightOptionsType> = {
  funcParent: 'getFlyweight',
}

/**
 * @description Function to getFlyweight
 * @import import { getFlyweight } from './getFlyweight'
 */

const getFlyweight: GetFlyweightType = () => {
  const bulletObjCached: Record<string, any> = {}
  let bullets: any[] = []

  const updateBulletCollection = ({ x, y, direction, type }: GetBulletParamsType) => {
    let bulletIntrinsicProps = bulletObjCached[type]
    if (!bulletIntrinsicProps) {
      if (type === 'pistol') bulletObjCached['pistol'] = getPistolObj()
      else if (type === 'rocket') bulletObjCached['rocket'] = getRocketObj()
      bulletIntrinsicProps = bulletObjCached[type]
    }
    bullets.push({ ...bulletIntrinsicProps, x, y, direction })
  }

  const renderBulletCollection = () => bullets

  const getBulletsObjCached = () => bulletObjCached

  return {
    updateBulletCollection,
    renderBulletCollection,
    getBulletsObjCached,
  }
}

export { getFlyweight }
export type { GetFlyweightParamsType, GetFlyweightResType, GetFlyweightOptionsType, GetFlyweightType }

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/patterns/11_Flyweight/11_Flyweight.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: GetFlyweightParamsType
      options: GetFlyweightOptionsType
      expected: GetFlyweightResType
    }

    const examples: ExampleType[] = [
      {
        description: 'Example with bullets',
        params: {
          bullets: [
            { x: 0, y: 0, direction: 0, type: 'pistol' },
            { x: 10, y: 5, direction: Math.PI / 4, type: 'pistol' },
            { x: -5, y: 20, direction: Math.PI / 2, type: 'pistol' },
            { x: 100, y: 50, direction: Math.PI, type: 'rocket' },
          ],
        },
        options: {},
        expected: { bulletsObjCachedCount: 2, bulletsCount: 4 },
      },
    ]

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const { bullets } = params

      const { updateBulletCollection, renderBulletCollection, getBulletsObjCached } = await getFlyweight(params, options)

      bullets.forEach((bullet: any) => updateBulletCollection(bullet))
      const output = renderBulletCollection()
      const bulletsCount = output.length

      const bulletsObjCached = getBulletsObjCached()
      const bulletsObjCachedCount = Object.keys(bulletsObjCached).length

      consoler(`getFlyweight [61-${index}]`, {
        description,
        params,
        expected,
        output,
        bulletsObjCached,
        bulletsObjCachedCount,
        bulletsCount,
        tested: JSON.stringify({ bulletsObjCachedCount, bulletsCount }) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}

/*

Here is a small, commented JavaScript example of the **Flyweight pattern**: many game bullets sharing a small set of “bullet types” instead of duplicating data.

```js
// FLYWEIGHT: shared, immutable data for a kind of bullet
class BulletType {
  constructor({ sprite, speed, damage }) {
    this.sprite = sprite;   // heavy / shared data: image, model, etc.
    this.speed = speed;     // intrinsic (doesn't change per instance)
    this.damage = damage;   // intrinsic
  }

  // Logic that only depends on intrinsic state
  describe() {
    return `BulletType(sprite=${this.sprite}, speed=${this.speed}, damage=${this.damage})`;
  }
}

// FLYWEIGHT FACTORY: creates & caches BulletType instances
class BulletTypeFactory {
  constructor() {
    this.cache = new Map(); // key -> BulletType
  }

  getBulletType(key, config) {
    // If we already created this type, reuse it
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    // Otherwise create and store a new flyweight
    const type = new BulletType(config);
    this.cache.set(key, type);
    return type;
  }

  get count() {
    return this.cache.size;
  }
}

// CONTEXT: individual bullets with extrinsic state (position, direction, owner...)
class Bullet {
  constructor({ x, y, direction, type }) {
    this.x = x;                 // extrinsic (varies per bullet)
    this.y = y;                 // extrinsic
    this.direction = direction; // extrinsic
    this.type = type;           // shared BulletType (flyweight)
  }

  update(dt) {
    // Use intrinsic speed, but update extrinsic position
    this.x += Math.cos(this.direction) * this.type.speed * dt;
    this.y += Math.sin(this.direction) * this.type.speed * dt;
  }

  render() {
    console.log(
      `Drawing ${this.type.sprite} at (${this.x.toFixed(1)}, ${this.y.toFixed(
        1
      )}), damage=${this.type.damage}`
    );
  }
}

// ---------- Usage ----------

// Create one factory for the whole game
const bulletTypeFactory = new BulletTypeFactory();

// Request some bullet types (flyweights)
const pistolType = bulletTypeFactory.getBulletType("pistol", {
  sprite: "pistol-bullet.png",
  speed: 500,
  damage: 10,
});

const rocketType = bulletTypeFactory.getBulletType("rocket", {
  sprite: "rocket.png",
  speed: 200,
  damage: 80,
});

// All pistol bullets reuse the *same* BulletType instance
const bullets = [
  new Bullet({ x: 0, y: 0, direction: 0, type: pistolType }),
  new Bullet({ x: 10, y: 5, direction: Math.PI / 4, type: pistolType }),
  new Bullet({ x: -5, y: 20, direction: Math.PI / 2, type: pistolType }),
  new Bullet({ x: 100, y: 50, direction: Math.PI, type: rocketType }),
];

console.log("Bullet types created:", bulletTypeFactory.count); // 2, not 4

// Simulate a frame
for (const b of bullets) {
  b.update(0.016); // dt ~ 16 ms
  b.render();
}
```

### What this shows

- **Intrinsic state (shared):** `sprite`, `speed`, `damage` live in `BulletType`. Only a *few* `BulletType` objects exist in memory.  
- **Extrinsic state (per‑instance):** `x`, `y`, `direction` live in `Bullet`. There can be thousands of `Bullet` objects, all pointing to the same `BulletType`.  
- **Flyweight factory:** `BulletTypeFactory` ensures that for each logical key (`"pistol"`, `"rocket"`), only **one** flyweight is created and reused.

This is exactly what Flyweight is for: **many similar objects, heavy shared data factored out and cached, lightweight per‑instance state kept separate.**

*/
