export const getDashboardData = async() => {
  const data = await fetch("https://reqres.in/api/users");
  const dashboardData = await data.json();
  return dashboardData;
}