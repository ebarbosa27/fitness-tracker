import useMutation from "../api/useMutation";

export default function AddActivity() {
  const addReq = useMutation("POST", "/activities", ["allActivities"]);

  function handleAddActivity(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newActivity = { name: formData.get("name"), description: formData.get("description") };

    addReq.mutate(newActivity);
  }

  return (
    <form onSubmit={handleAddActivity}>
      <p>Add new activity</p>
      <input type="text" placeholder="Name" name="name" />
      <input type="text" placeholder="Description" name="description" />
      <input type="submit" />
    </form>
  );
}
