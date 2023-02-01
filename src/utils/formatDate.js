export default function formatDate(date) {
  const dt = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = dt.toLocaleDateString("en-US", options);
  return formattedDate;
}
