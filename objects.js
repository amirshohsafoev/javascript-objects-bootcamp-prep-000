var  playlist = {artistNames: 'song titles'}
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
function removeFromPlaylis(playlis, aristName){
 return delete.playlist.artistName
}