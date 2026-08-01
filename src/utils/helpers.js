import data from '../data/posts.json'

const categoryColors = {}
data.categories.forEach((category) => {
  categoryColors[category.name] = category.color
})

export function getCategoryColor(name) {
  if (categoryColors[name]) {
    return categoryColors[name]
  }
  return 'default'
}

export function formatDate(dateStr) {
  const date = new Date(dateStr)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}
