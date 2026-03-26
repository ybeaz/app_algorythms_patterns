/**
 * @description  Pattern: Proxy/Cache  An object representing another object, this is like decorator but with no stable/ changing interface
 * @narrative The Proxy Pattern is a structural design pattern that involves creating a surrogate or placeholder for another object to control access to it. The Proxy Pattern can be used for various purposes, and one specific use case is for creating a Proxy/Cache. Here are some common use cases for applying the Proxy/Cache Pattern:

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

/*

// The real object
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawal successful! New balance: $${this.balance}`);
    } else {
      console.log('Insufficient funds!');
    }
  }
}

// The proxy object
class BankAccountProxy {
  constructor(account, userRole) {
    this.account = account;
    this.userRole = userRole;
  }

  withdraw(amount) {
    if (this.userRole === 'admin' || this.userRole === 'owner') {
      this.account.withdraw(amount);
    } else {
      console.log('Access denied! You cannot withdraw money.');
    }
  }
}

// Usage
const account = new BankAccount(1000);

// Proxy for a normal user
const proxyUser = new BankAccountProxy(account, 'guest');
proxyUser.withdraw(100);  // Access denied! You cannot withdraw money.

// Proxy for the owner
const proxyOwner = new BankAccountProxy(account, 'owner');
proxyOwner.withdraw(200); // Withdrawal successful! New balance: $800


*/

import { consoler } from 'yourails_common'

const getBankAccount = (balanceIn: number) => {
  let balance = balanceIn || 0
  return {
    withdraw: (amount: number) => {
      balance = balance - amount
    },
    getBalance: () => balance,
  }
}

type GetProxyParamsType = any

type GetProxyOptionsType = { funcParent?: string }

type GetProxyResType = any

interface GetProxyType {
  (params?: GetProxyParamsType, options?: GetProxyOptionsType): GetProxyResType
}

const optionsDefault: Required<GetProxyOptionsType> = {
  funcParent: 'getProxy',
}

/**
 * @description Function to getProxy
 * @import import { getProxy } from './getProxy'
 */

const getProxy: GetProxyType = () => {
  const accountsCached: Record<string, any> = {}
  let account: any = {}

  return ({ balanceIn, userType }: any) => {
    if (accountsCached[balanceIn]) account = accountsCached[balanceIn]
    else {
      account = getBankAccount(balanceIn)
      accountsCached[balanceIn] = account
    }

    return {
      withdraw: (amount: number) => {
        if (userType === 'accountOwner') {
          account.withdraw(amount)
          return `access granted`
        }

        return 'access denied'
      },
      getBalance: () => {
        if (userType === 'accountOwner') {
          return account.getBalance()
        }

        return 'access denied'
      },
      getAccountsNumCached: () => {
        if (userType === 'admin') {
          // console.info('12_Proxy [169]', { accountsCached })
          return Object.keys(accountsCached).length
        }

        return 'access denied'
      },
    }
  }
}

export { getProxy }
export type { GetProxyParamsType, GetProxyResType, GetProxyOptionsType, GetProxyType }

/**
 * @description Here the file is being run directly
 * @run npx tsx src/roman/patterns/12_Proxy/12_Proxy.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      description?: string
      params: GetProxyParamsType
      options: GetProxyOptionsType
      expected: GetProxyResType
    }
    const examples: ExampleType[] = [
      {
        description: 'Example of proxy pattern with withdrawals and accountOwner',
        params: { balanceIn: 1000, withdrawals: [100, 150, 250], userType: 'accountOwner' },
        options: {},
        expected: { balance: 500, accountsNumCached: 'access denied' },
      },
      {
        description: 'Example of proxy pattern with withdrawals and guest',
        params: { balanceIn: 1000, withdrawals: [100, 150, 250], userType: 'guest' },
        options: {},
        expected: { balance: 'access denied', accountsNumCached: 'access denied' },
      },
      {
        description: 'Example of proxy pattern with withdrawals and admin',
        params: { balanceIn: 100, withdrawals: [100, 150, 250], userType: 'admin' },
        options: {},
        expected: { balance: 'access denied', accountsNumCached: 2 },
      },
    ]

    const proxyBase = getProxy()

    const promises = examples.map(async (example: ExampleType, index: number) => {
      const { description, params, options, expected } = example

      const { balanceIn, withdrawals, userType } = params

      const proxyAccount = proxyBase({ balanceIn, userType })

      withdrawals.forEach((amount: number) => proxyAccount.withdraw(amount))

      const balance = proxyAccount.getBalance()
      const accountsNumCached = proxyAccount.getAccountsNumCached()
      const output = {
        balance,
        accountsNumCached,
      }

      consoler(`getProxy [61-${index}]`, {
        description,
        params,
        expected,
        output,
        tested: JSON.stringify(output) === JSON.stringify(expected),
      })
    })
    await Promise.all(promises)
  })()
}
