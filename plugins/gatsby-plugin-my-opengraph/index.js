exports.createOpenGraphImage = (createPage, options) => {
  const { path, component, context } = options

  createPage({
    path,
    component,
    context,
  })

  return { path: `${path}.png` }
}
