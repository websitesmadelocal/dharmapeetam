export const fetchEvents = async () => {
  try {
    const res = await fetch(
      "https://opensheet.elk.sh/139_Qvy8qM0fySpDjQUN_6llx-yPWL1Mt0_Ksln-0cI8/Events_Dharmapeetam"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};