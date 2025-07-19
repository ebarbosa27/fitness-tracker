import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function DeleteActivity({ activity }) {
  const { userId } = useAuth();
  const { mutate, loading, error } = useMutation("DELETE", `/activities/${activity.id}`, [
    "allActivities",
  ]);

  function handleDelete() {
    mutate();
  }

  if (!userId) return;

  if (loading) {
    return (
      <div>
        <p>Loading . . .</p>
      </div>
    );
  }

  if (error) {
    alert("Issue deleting activity: \n" + error);
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
