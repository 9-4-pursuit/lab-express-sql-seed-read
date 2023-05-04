export default function SongEdit () {
  return (<div className="SongEdit">
    <form>

    <label htmlFor="name">Song Name:</label>
    <input 
      type="text"
      id="name"
      name="name"></input>

    <label htmlFor="artist">Artist:</label>
    <input 
      type="text"
      id="artist"
      name="artist"></input>

    <label htmlFor="album">Album:</label>
    <input
      type="text"
      id="album"
      name="album"></input>

    <label htmlFor="time">Duration:</label>
    <input 
      type="text"
      id="time"
      name="time"
      placeholder="00:00"></input>

    <label htmlFor="is_favorite">Favorite:</label>
    <input
      type="checkbox"
      id="is_favorite"
      name="is_favorite"/>   

    <input type="submit"/>  

    </form>
  </div>);
}