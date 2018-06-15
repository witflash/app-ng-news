export class News {
  title: string;
  description: string;
  urlToImage: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
