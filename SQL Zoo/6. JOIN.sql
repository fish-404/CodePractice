/* 1
 * The first example shows the goal scored by a player with the last name 'Bender'. The * says to list all the columns in the table - a shorter way of saying matchid, teamid, player, gtime
 *
 * Modify it to show the matchid and player name for all goals scored by Germany. To identify German players, check for: teamid = 'GER'
 */
select
    matchid
    , player
from goal
where teamid = 'GER'

/* 2
 * From the previous query you can see that Lars Bender's scored a goal in game 1012. Now we want to know what teams were playing in that match.
 *
 * Notice in the that the column matchid in the goal table corresponds to the id column in the game table. We can look up information about game 1012 by finding that row in the game table.
 * 
 * Show id, stadium, team1, team2 for just game 1012
 */
select 
    id
    , stadium
    , team1
    , team2
from game
where id = '1012'

/* 3
 * You can combine the two steps into a single query with a JOIN.
 * The FROM clause says to merge data from the goal table with that from the game table. The ON says how to figure out which rows in game go with which rows in goal - the matchid from goal must match id from game. (If we wanted to be more clear/specific we could say
 * ON (game.id=goal.matchid)
 * 
 * The code below shows the player (from the goal) and stadium name (from the game table) for every goal scored.
 * 
 * Modify it to show the player, teamid, stadium and mdate for every German goal.
 */
select 
    player
    , teamid
    , stadium
    , mdate
from game
inner join goal on id = matchid
where teamid = 'GER'

/* 4
 * Show the team1, team2 and player for every goal scored by a player called Mario player LIKE 'Mario%'
 */
select 
    team1
    , team2
    , player
from game
inner join goal on id = matchid
where player like 'Mario%'

/* 5
 * The table eteam gives details of every national team including the coach. You can JOIN goal to eteam using the phrase goal JOIN eteam on teamid=id
 * 
 * Show player, teamid, coach, gtime for all goals scored in the first 10 minutes gtime<=10
 */
select 
    player
    , teamid
    , coach
    , gtime
from goal
inner join eteam on teamid = id
where gtime <= 10

/* 6
 * To JOIN game with eteam you could use either
 * game JOIN eteam ON (team1=eteam.id) or game JOIN eteam ON (team2=eteam.id)
 * 
 * Notice that because id is a column name in both game and eteam you must specify eteam.id instead of just id
 * 
 * List the dates of the matches and the name of the team in which 'Fernando Santos' was the team1 coach.
 */
select 
    mdate
    , teamname
from game
inner join eteam on team1 = eteam.id
where coach = 'Fernando Santos'

/* 7
 * List the player for every goal scored in a game where the stadium was 'National Stadium, Warsaw'
 */
select player
from goal
inner join game on matchid = id
where stadium = 'National Stadium, Warsaw'

/* 8
 * The example query shows all goals scored in the Germany-Greece quarterfinal.
 * Instead show the name of all players who scored a goal against Germany.
 */
select distinct player
from game
inner join goal on matchid = id
where 
    team1 = 'GER'
    or team2 = 'GER'
    and teamid != 'GER'
      
/* 9
 * Show teamname and the total number of goals scored.
 * COUNT and GROUP BY
 * You should COUNT(*) in the SELECT line and GROUP BY teamname
 */
select 
    teamname
    , count(*)
from eteam
inner join goal on id = teamid
group by teamname

/* 10
 * Show the stadium and the number of goals scored in each stadium.
 */
select 
    stadium
    , count(*)
from game
inner join on matchid = id
group by stadium

/* 11
 * For every match involving 'POL', show the matchid, date and the number of goals scored.
 */
select
    matchid
    , mdate
    , count(*)
from game
inner join goal on matchid = id
where 
    team1 = 'POL'
    or team2 = 'POL'
group by 
    mdate
    , matchid

/* 12
 * For every match where 'GER' scored, show matchid, match date and the number of goals scored by 'GER'
 */
select 
    matchid
    , mdate
    , count(*)
from goal
inner join game on matchid = id
where teamid = 'GER'
group by
    matchid
    , mdate

/* 13
 * List every match with the goals scored by each team as shown. This will use "CASE WHEN" which has not been explained in any previous exercises.
 */
select
    mdate
    , team1
    , sum(
        case 
            when teamid = team1 then 1
            else 0
        end
    ) as score1
    , team2
    , sum(
        case 
            when teamid = team2 then 2
            else 0
        end
    ) as score2
from game
full join on id = matchid
group by
    mdate
    , matchid
    , team1
    , team2
order by
    mdate
    , matchid
    , team1
    , team2
