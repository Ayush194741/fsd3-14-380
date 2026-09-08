let teams = [
  {
    id: 1,
    tname: "Rusty",
    tl: "Aashish Raj Singh",
    email: "ashi.raj@gmail.com",
    memebers: 6,
  },
  {
    id: 2,
    tname: "code nova",
    tl: "Bhavya Sengar",
    email: "bhav.seng@gmail.com",
    memebers: 6,
  },
];
let nextId = 3;

export const getallteams =()=> teams;

export const getTeamsById =(id)=>teams.find((team) => team.id===id);

export const addTeam =(newTeam) => {
    const team = {id: nextId++, newTeam };
    teams.push(team);
    return team;
};
export const updateTeamById=(id,updateTeam)=>{
    const team = getTeamById(id);
    if(!team) return null;
    Object.assign(team,updateTeam);
    return team;
};
export const deleteTeam=(id)=>{
    const index=teams.findIndex((team)=>team.id === id);
    if(index == -1) return false;
    teams.splice(index,1);
    return true;
};
