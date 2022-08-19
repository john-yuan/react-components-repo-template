type Arg = string | number | boolean | undefined | null | Record<string, any>;

const withClassNamePrefix = (prefix: string) => {
  return (...args: Arg[]) => {
    const classNames: string[] = []

    args.forEach((value) => {
      if (value) {
        const type = typeof value

        if (type === 'string') {
          classNames.push(value as string)
        } else if (type === 'number' || type === 'boolean') {
          classNames.push(`${value}`)
        } else {
          const object = value as any

          Object.keys(object).forEach((key) => {
            if (object[key]) {
              classNames.push(key)
            }
          })
        }
      }
    })

    return classNames
      .map(name => name ? `${prefix}-${name}` : prefix)
      .join(' ')
  }
}

export const cls = withClassNamePrefix('my-ui')
