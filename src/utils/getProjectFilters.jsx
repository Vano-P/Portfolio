export const getProjectFilters = (projects) => {
  const categories = new Set()

  projects.forEach((project) => {
    categories.add(project.category)
  })

  return [ 'All', ...Array.from(categories) ]
}
