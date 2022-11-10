export const setIntersectStyles = (sectionID, titleID, theme) => {
  document.getElementById(sectionID).style.opacity = 1;
  document.getElementById(sectionID).style.backgroundColor =
    "rgba(0, 4, 255, 0.05)";
  theme
    ? (document.getElementById(titleID).style.color = "rgb(21, 0, 255)")
    : (document.getElementById(titleID).style.color = "gold");
};

export const removeIntersectStyles = (sectionID, titleID, theme) => {
  document.getElementById(sectionID).style.opacity = 0;
  document.getElementById(sectionID).style.backgroundColor = "transparent";
  theme
    ? (document.getElementById(titleID).style.color = "black")
    : (document.getElementById(titleID).style.color = "white");
};
