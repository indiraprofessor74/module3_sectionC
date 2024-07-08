const Song = {
    title: "",
    artist: "",
    genre: "",
  
    // Function to simulate playing the song (prints a message)
    playSong: function() {
      console.log(`Now playing: "${this.title}" by ${this.artist}`);
    }
  };
const song1 = Object.create(Song);
song1.title = "Bohemian Rhapsody";
song1.artist = "Queen";
song1.genre = "Rock";

const song2 = Object.create(Song);
song2.title = "A Sky Full of Stars";
song2.artist = "Coldplay";
song2.genre = "Pop";
const playlist = [song1, song2];

// Play each song in the playlist using playSong()
playlist.forEach(song => song.playSong());

