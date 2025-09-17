type GetAreaParam03 = {
  shape: string
  [x: string]: unknown
  a: number
  l: number
  w: number
  r: number
  b: number
  h: number
}

// @
const calculateArea03 = async ({ shape, a, l, w, r, b, h }: GetAreaParam03): Promise<string | number> => {
  switch (shape) {
    case 'square': {
      return new Promise((resolve, reject) => {
        try {
          // if (a === undefined) reject(new Error('-1'))
          // else
          resolve(Math.pow(a, 2).toFixed(2))
        } catch (error: unknown) {
          reject(new Error('-1'))
        }
      })
    }
    case 'circle': {
      return new Promise((resolve, reject) => {
        try {
          if (r === undefined) reject(new Error('-1'))
          else resolve((Math.pow(r, 2) * 3.14).toFixed(2))
        } catch (error: unknown) {
          reject(new Error('-1'))
        }
      })
    }
    case 'rectangle': {
      return new Promise((resolve, reject) => {
        try {
          if (l === undefined || w === undefined) reject(new Error('-1'))
          else resolve((l * w).toFixed(2))
        } catch (error: unknown) {
          reject(new Error('-1'))
        }
      })
    }
    case 'triangle': {
      return new Promise((resolve, reject) => {
        try {
          if (b === undefined || h === undefined) reject(new Error('-1'))
          else resolve((b * h * 0.5).toFixed(2))
        } catch (error: unknown) {
          reject(new Error('-1'))
        }
      })
    }
    default:
      return Promise.reject(new Error('-1'))
  }
}

const getAreasPromise03 = async (params: GetAreaParam03[]): Promise<(number | string)[]> => {
  try {
    return await Promise.all(
      params.map(async (item: GetAreaParam03) => {
        return await calculateArea03(item)
      })
    )
  } catch (error) {
    return [-1]
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/roman/algorythms/get213AreasPromise03.ts
 */
if (require.main === module) {
  ;(async () => {
    type ExampleType = {
      params: Partial<GetAreaParam03>[]
      expected: (string | number)[]
    }
    const examples: ExampleType[] = [
      {
        params: [
          { shape: 'square', a: 5 },
          { shape: 'rectangle', l: 4, w: 6 },
          { shape: 'circle', r: 3 },
          { shape: 'triangle', b: 8, h: 5 },
        ],
        expected: ['25.00', '24.00', '28.26', '20.00'],
      },
      {
        params: [
          { shape: 'square', a: 7 },
          { shape: 'hexagon', s: 10 }, // Invalid shape
          { shape: 'circle', r: 2 },
        ],
        expected: [-1],
      },
      {
        params: [
          { shape: 'rectangle', l: 0, w: 10 }, // Area: 0
          { shape: 'triangle', b: 3, h: 4 }, // Area: 6.00
        ],
        expected: ['0.00', '6.00'],
      },
      {
        params: [{ shape: 'circle', r: 10 }],
        expected: ['314.00'],
      },
    ]

    const output = await Promise.all(
      examples.map(async (example: ExampleType, index: number) => {
        const { params, expected } = example

        const output = await getAreasPromise03(params as GetAreaParam03[])
        console.info(`getTemplateFunc [61-${index}]`, {
          params,
          output,
          tested: JSON.stringify(output) === JSON.stringify(expected),
        })
        return JSON.stringify(output) === JSON.stringify(expected)
      })
    )

    console.info('get213AreasPromise03 [124]', { output })
  })()
}

/*

Assignment:
In this challenge, use Javascript Promises to calculate the areas of various geometrical shapes. The shapes are square, rectangle, circle and triangle, and the area of each can be computed using these formulae:

    Square of side 'a': Area = a2 
    Rectangle of length 'l' and width 'w': Area = w x l
    Circle of radius 'r': Area = Pi x r2 
    Triangle of base 'b' and height 'h': Area = 0.5 x b x h 

Note: Make sure to use the value of Pi as 3.14 and round off the areas of all shapes to 2 decimal places.

 

Function Descriptions

 

Complete the function getAreas  that takes an array of shapes and their respective sides and returns a promise that represents an array of areas of all of the shapes. Also, complete the helper function calculateArea that takes a single shape and its side/sides and also returns a promise that represents its area.

 

The specifications of the promise returned by getAreas are as follows:

    This Promise consolidates outputs of all promises returned by calculateArea for shapes.

 

The specifications of the promise returned by calculateArea are as follows:

    If the shape passed to the Promise is valid, resolve it with the calculated area of the respective shape.
    If the shape passed to the Promise is invalid, reject everything with [-1].

 

Constraints

     1 ≤ number of shapes  ≤ 2000
     1  ≤ length of sides for all shapes  ≤ 106

 
Input Format For Custom Testing


Sample Case 0

Sample Input For Custom Testing

4
square
rectangle
circle
triangle
2
3,4
5 
2,4

 

Sample Output

4
12 
78.5 
4

Explanation

In the mentioned sample case, the square has a side of 2 units, the rectangle has its sides as 3 units and 4 units, the circle has a radius of 5 units and the triangle has a base of 2 units and height of 4 units. Thus,

    The area of the square = 2 x 2 = 4 units
    The area of the rectangle = 3 x 4 = 12 units.
    The area of the circle = 3.14 x 5 x 5 = 78.5 units.
    The area of the triangle = 0.5 x 2 x 4 = 4 units.

Sample Case 1

Sample Input For Custom Testing

3
square
trapezium
rectangle
2
3,3,4
1,3

Sample Output

-1

Explanation

In the above example, the input consists of the shape trapezium which is not a shape we require. Thus, the promise rejects everything and returns [-1].

*/

//code to fill in:

/*
'use strict';

const fs = require('fs');
const { Promise } = require('node-fetch');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    
    main();
});

let readLine = () => inputString[currentLine++];

// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
        return new Promise((resolve,reject) => {
           let area;
           
           switch(shape){
            case 'square' :
                area = Math.pow(values[0],2);
                break; 
             case 'rectangle':
                area = values[0]* values[1];
                break;            
            case 'circle' : 
                area = 3.14* Math.pow(values[0],2);
                break;
            case 'triangle' : 
                area = 0.5* values[0]* values[1];
                break;
            default: 
                reject([-1]);
                return;
           }
            
            resolve(parseFloat(area.toFixed(2)));
        });
}

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, values_arr) => {
    let promises = shapes.map((shape,i) => calculateArea(shape, values_arr[i]));
    
    return Promise.all(promises).catch(() => {
        return [-1];
    });
}

let callCalculateArea = async (shapes, values) => await calculateArea(shapes[0], values[0]).catch(error => error) instanceof Promise;

let callGetAreas = (shapes, values) => getAreas(shapes, values).catch(error => error);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let shapes = [];

    for (let shapesItr = 0; shapesItr < n; shapesItr++) {
        const shapesItem =  readLine();
        shapes.push(shapesItem);
    }

    let values = [];

    for (let valuesItr = 0; valuesItr < n; valuesItr++) {
        const valuesItem =  readLine();
        values.push(JSON.parse('[' + valuesItem + ']'));
    }
    
    if (callCalculateArea(shapes, values)) {
        callGetAreas(shapes, values).then((res) => {
            ws.write(res.join('\n') + '\n');
            ws.end();
        });
    } else {
        console.error('calculateArea does not return a Promise.');
    }
}
*/
