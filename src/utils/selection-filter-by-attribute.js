export default function selectionFilterByAttribute(collection = [], attribute) {
  const attributeMap = {};

  collection.forEach((item = {}) => {
    const { [attribute]: filterAttribute } = item;
    attributeMap[filterAttribute] ? attributeMap[filterAttribute].push(item) : attributeMap[filterAttribute] = [item];
  });

  return attributeMap;
}
