export const withClassNamePrefix = (prefix: string) => {
  const base = `my-ui-${prefix}`
  return (classNames?: string) => {
    return (classNames || '')
      .trim()
      .split(/\s+/)
      .map(className => className ? `${base}-${className}` : base)
      .join(' ')
  }
}
