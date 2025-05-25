export const getUniqArrBy = (props: string[], arr: any[]): any[] => {
  if (!Array.isArray(arr)) throw Error('not an array')

  const obj = arr.reduce((accum: any, item: any) => {
    const collage = props.reduce((accum: string, prop: string) => {
      return `${accum}_${JSON.stringify(item[prop])}`
    }, '')
    if (collage && !accum.hasOwnProperty(collage)) accum[collage] = item
    return accum
  }, {})

  return Object.values(obj)
}
