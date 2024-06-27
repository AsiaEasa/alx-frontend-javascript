export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newN) {
    if (typeof newN !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newN;
  }

  get length() {
    return this._length;
  }

  set length(newL) {
    if (typeof newL !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newL;
  }

  get students() {
    return this._students;
  }

  set students(newS) {
    if (!Array.isArray(newS) || newS.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newS;
  }
}
