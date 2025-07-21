import useMutation from "../api/useMutation";

export default function AddActivity() {
  const addReq = useMutation("POST", "/activities", ["allActivities"]);

  function handleAddActivity(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const newActivity = { name: formData.get("name"), description: formData.get("description") };
    addReq.mutate(newActivity);
  }

  if (addReq.loading) {
    return <div>Loading . . .</div>;
  }

  return (
    <form onSubmit={handleAddActivity}>
      <h2>Add new activity</h2>
      <input type="text" placeholder="Name" name="name" />
      <input type="text" placeholder="Description" name="description" />
      <input type="submit" />
      {addReq.error ? <p className="errorMessage">{addReq.error}</p> : ""}
    </form>
  );
}
