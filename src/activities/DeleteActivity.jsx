import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function DeleteActivity({ activity }) {
  const { userId } = useAuth();
  const removeReq = useMutation("DELETE", `/activities/${activity.id}`, ["allActivities"]);

  function handleDelete() {
    removeReq.mutate();
  }

  if (userId === activity.creatorId) {
    return (
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
}
