/**
 * @description  Pattern: Proxy/Cache  An object representing another object
 * @narrative
      The Proxy Pattern is a structural design pattern that involves creating a surrogate or placeholder for another object to control access to it. The Proxy Pattern can be used for various purposes, and one specific use case is for creating a Proxy/Cache. Here are some common use cases for applying the Proxy/Cache Pattern:

      Lazy Loading of Resources:

      Scenario: When dealing with resource-intensive objects, such as large images or database records.
      Use Case: The Proxy Pattern can be applied to create a proxy that loads the resource only when it is requested, implementing lazy loading and improving performance.
      Caching:

      Scenario: When frequent access to the same data or resource occurs and you want to avoid redundant computations or retrievals.
      Use Case: The Proxy/Cache Pattern can be used to create a proxy that checks if the requested data is already in a cache. If it is, the proxy returns the cached data; otherwise, it retrieves the data and caches it for future use.
      Access Control:

      Scenario: When you want to control access to certain operations or resources.
      Use Case: The Proxy Pattern can be applied to create a proxy that enforces access control rules, such as restricting certain operations to authorized users.
      Monitoring and Logging:

      Scenario: When you need to monitor access to an object or log information about interactions.
      Use Case: The Proxy Pattern can be used to create a proxy that logs access information, allowing you to monitor and analyze how the real object is being used.
      Remote Proxy:

      Scenario: When dealing with distributed systems and you want to represent an object in a different address space.
      Use Case: The Proxy Pattern can be applied to create a proxy that represents an object located on a remote server, allowing clients to interact with it as if it were local.
      Throttling Access:

      Scenario: When you want to limit the rate at which clients can access a resource.
      Use Case: The Proxy Pattern can be used to create a proxy that implements throttling mechanisms, controlling the frequency of access to the real object.
      Resource Management:

      Scenario: When working with limited resources, such as database connections or network bandwidth.
      Use Case: The Proxy/Cache Pattern can be applied to create a proxy that manages and optimizes the use of limited resources, releasing them when they are no longer needed.
      Smart References:

      Scenario: When you want to add additional behavior or information to references of an object.
      Use Case: The Proxy Pattern can be used to create a proxy that adds smart behavior to references, such as counting the number of times an object is accessed or tracking dependencies.
      Memoization:

      Scenario: When dealing with expensive function calls and you want to cache the results for future use.
      Use Case: The Proxy/Cache Pattern can be applied to create a proxy that memoizes function calls, storing the results of previous calls and returning them if the same input is encountered again.
      Database Connection Pooling:

      Scenario: When managing database connections and you want to reuse existing connections.
      Use Case: The Proxy/Cache Pattern can be applied to create a proxy that manages a pool of database connections, allowing clients to reuse connections instead of creating new ones.
      In the context of a Proxy/Cache, the pattern involves creating a proxy that represents another object and provides additional functionality, such as caching, to improve performance, reduce resource usage, or control access.

      GeoCoder
      getLatLng
      address

      GeoProxy
      geocoder
      geocache
      getLatLng
      address
      getCount

 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest 12_Proxy.test`
 */
