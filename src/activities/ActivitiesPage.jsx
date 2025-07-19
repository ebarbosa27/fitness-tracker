import useQuery from "../api/useQuery";
import AddActivity from "./AddActivity";
import DeleteActivity from "./DeleteActivity";
import { useAuth } from "../auth/AuthContext";

export default function ActivitiesPage() {
  const activities = useQuery("/activities", "allActivities");
  const { token } = useAuth();

  if (activities.error) {
    return (
      <>
        <h1>Error fetching activities</h1>
      </>
    );
  }

  if (activities.loading) {
    return (
      <>
        <h1>Loading activities...</h1>
      </>
    );
  }

  return (
    <>
      <h1>Activities</h1>
      {activities.data ? (
        <div>
          <ul>
            {activities.data.map((activity, idx) => (
              <li key={idx}>
                <p>{activity.name}</p>
                <DeleteActivity activity={activity} />
              </li>
            ))}
          </ul>
          <br />
          {token ? <AddActivity /> : ""}
        </div>
      ) : (
        <p>Imagine all the activities!</p>
      )}
    </>
  );
}
