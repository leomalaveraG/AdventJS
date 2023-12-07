function findNaughtyStep(original, modified) {
  const [characters1, characters2] = original.length > modified.length ? [original, modified] : [modified, original]
  const result = characters1.split("").filter((char, i) => (char) !== characters2[i])
  return result[0] ?? ''
}
module.exports = findNaughtyStep
