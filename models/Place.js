export class Place {
  constructor(title, imageUri, location) {
    this.id = new Date().toString() + Math.random().toString();
    this.title = title;
    this.imageUri = imageUri;
    this.location = location;
  }
}
