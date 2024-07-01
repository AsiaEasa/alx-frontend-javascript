export default function createInt8TypedArray(length, position, value) {
  const B = new ArrayBuffer(length);
  
  const V = new DataView(B);
  
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  
  V.setInt8(position, value);
  
  return V;
}
