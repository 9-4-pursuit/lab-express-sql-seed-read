import UpdateSong from "../components/UpdateSong";

function New() {
  return (
    <div className="flex flex-col items-center m-6 p-6 justify-center bg-pink-50">
      <h1 className="text-4xl font-bold mb-6">Add New Song </h1>
      <UpdateSong />
    </div>
  );
}
export default New;