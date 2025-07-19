import useMutation from "../api/useMutation";

export default function DeleteActivity({ activity }) {
  const deleteActivity = useMutation("DELETE", `/activity/${activity.id}`, ["allActivities"]);

  function handleDelete() {
    deleteActivity.mutate("");
  }

  return <button onClick={handleDelete}>Delete</button>;
}
