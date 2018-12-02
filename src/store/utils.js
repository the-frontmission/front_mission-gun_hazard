export const parseParts = (list) => {
  const result = [];
  list.forEach((group, index) => {
    const { name, nameKO, contents, color } = group
    const number = ('0' + (index + 1)).slice(-2)
    result.push({
      name,
      nameKO,
      color,
      type: 'group',
      number,
    })

    contents.forEach((item, index) => {
      const { name, description } = item
      const number = ('0' + (index + 1)).slice(-2)
      result.push({
        name,
        description,
        group: group.name,
        color: group.color,
        type: 'item',
        number,
      })
    })
  })
  return result
}
