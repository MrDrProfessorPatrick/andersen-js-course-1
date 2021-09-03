

class Musician {
    constructor(albumsUrl) {
      this.albumsUrl = albumsUrl;
    }
  
    async getAlbums() {
      const response = await fetch(this.albumsUrl);
      const albums = await response.json();
      console.log(albums)
      return albums;
    }
  }
  
  const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
  
  console.log(musician.getAlbums())