let teams = [
  {
    id: 101,
    teamname: "Rusty",
    tl: "Aashish Raj Singh",
    email: "ashish.raj@gmail.com",
    members: 6,
  },
  {
    id: 101,
    teamname: "CodeNova",
    tl: "Bhavya Sengar",
    email: "bhavya@gmail.com",
    members: 6,
  },
];

let nextId = 3;

export const getAllTeams = () => teams;

export const getTeamById = (id) => teams.find((team) => team.id === id);

export const addTeam = (newTeam) => {
  const team = { id: nextId++, newTeam };
  teams.push(team);
  return team;
};

export const updateTeamById = (id, updateTeam) => {
  const team = getTeamById(id);
  if (!team) return null;
  Object.assign(team, updateTeam);
  return team;
};

export const deleteTeamById = (id) => {
  const index = teams.findIndex((team) => team.id === id);
  if (index == -1) return false;
  teams.splice(index, 1);
  return true;
};