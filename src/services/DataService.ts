export default class DataService {
  static index() {
    return fetch('table.json').then((response) => response.json());
  }
}
