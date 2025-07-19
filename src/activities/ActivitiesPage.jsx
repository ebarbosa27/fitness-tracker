import useQuery from "../api/useQuery";
import DeleteActivity from "./DeleteActivity";

export default function ActivitiesPage() {
  const activities = useQuery("/activities", "allActivities");

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
        <ul>
          {activities.data.map((activity, idx) => (
            <li key={idx}>
              <p>{activity.name}</p>
              <DeleteActivity activity={activity} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Imagine all the activities!</p>
      )}
    </>
  );
}
