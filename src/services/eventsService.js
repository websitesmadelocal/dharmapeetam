export const fetchEvents = async () => {
  try {
    const res = await fetch(
      "https://opensheet.elk.sh/1p6UBGOQwadI-Al8P0e-0v_mX6zLOEqfBppdYCVRruts/Events_Dharmapeetam"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
export const fetchPopupEvents   = async () => {
  try {
    const res = await fetch(
      "https://opensheet.elk.sh/1p6UBGOQwadI-Al8P0e-0v_mX6zLOEqfBppdYCVRruts/PopupEvents_Dharmapeetam"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

//https://docs.google.com/spreadsheets/d/1p6UBGOQwadI-Al8P0e-0v_mX6zLOEqfBppdYCVRruts/edit?usp=sharing






//https://drive.google.com/file/d/11IdO4ymBYOBHhX3s6X7FzAB2zPzc-hmK/view?usp=sharing

//https://drive.google.com/uc?export=view&id=11IdO4ymBYOBHhX3s6X7FzAB2zPzc-hmK