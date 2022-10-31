exports.createOpenGraphImage = (createPage, options) => {
  const { path, component, context } = options

  console.log('[path]', path)
  console.log('[component]', component)
  console.log('[context]', context)

  createPage({
    path,
    component,
    context,
  })
}
