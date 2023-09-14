export default function sortByKey(arr, key) {
  arr.sort((a, b) => a[key] - b[key]);
  return arr;
}
