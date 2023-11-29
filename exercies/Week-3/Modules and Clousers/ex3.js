const YOUTUBE_URL = "https://www.youtube.com/watch?v="
const SongsManager = function(){
  const songs = {}
  const addSong = function(song, url){
    songs[song] = url.replace(YOUTUBE_URL, "")
  }
  const getSong = function(song){
    console.log(YOUTUBE_URL + songs[song])
  }
  return {
    addSong: addSong,
    getSong: getSong
  }
}
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ