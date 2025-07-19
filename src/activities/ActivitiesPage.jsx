import { useState } from "react";
import useQuery from "../api/useQuery";

export default function ActivitiesPage() {
  const { data, loading, error } = useQuery("/activities", "allActivities");

  if (error) {
    return (
      <>
        <h1>Error fetching activities</h1>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h1>Loading activities...</h1>
      </>
    );
  }

  return (
    <>
      <h1>Activities</h1>
      {data ? (
        <ul>
          {data.map((activity, idx) => (
            <li key={idx}>{activity.name}</li>
          ))}
        </ul>
      ) : (
        <p>Imagine all the activities!</p>
      )}
    </>
  );
}
