//addArrayProperty
function addArrayProperty(obj, key, arr) {
  // your code here
  obj.key = arr;
}

//Contador de propiedades
const objectPropertiesCounter = (obj) => {
  return Object.keys(obj).length;
 };