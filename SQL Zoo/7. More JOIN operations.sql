/* 1
 * List the films where the yr is 1962 [Show id, title]
 */
select 
    id
    , title
from movie
where yr = 1962

/* 2
 * Give year of 'Citizen Kane'.
 */
select yr
from movie
where title = 'Citizen Kane'

/* 3
 * List all of the Star Trek movies, include the id, title and yr (all of these movies include the words Star Trek in the title). Order results by year.
 */
select 
    id
    , title
    , yr 
from movie
where title like '%Star Trek%'
order by yr

/* 4
 * What id number does the actor 'Glenn Close' have?
 */
select id
from actor
where name = 'Glenn Close'

/* 5
 * What is the id of the film 'Casablanca'
 */
select id 
from movie
where title = 'Casablanca'

/* 6
 * Obtain the cast list for 'Casablanca'.
 */
select name
from casting
inner join movie on movie.id = casting.movieid
inner join actor on casting.actorid = actor.id
where movie.title = 'Casablanca'

/* 7
 * Obtain the cast list for the film 'Alien'
 */
select name
from casting
inner join movie on movie.id = casting.movieid
inner join actor on casting.actorid = actor.id
where movie.title = 'Alien'

/* 8
 * List the films in which 'Harrison Ford' has appeared
 */
select title
from casting
inner join movie on movie.id = casting.movieid
inner join actor on casting.actorid = actor.id
where actor.name = 'Harrison Ford'
      
/* 9
 * List the films where 'Harrison Ford' has appeared - but not in the starring role. [Note: the ord field of casting gives the position of the actor. If ord=1 then this actor is in the starring role]
 */
select title
from casting
inner join movie on movie.id = casting.movieid
inner join actor on casting.actorid = actor.id
where 
    actor.name = 'Harrison Ford'
    and casting.ord != 1
   
/* 10
 * List the films together with the leading star for all 1962 films.
 */
select 
    title
    , name
from casting
inner join movie on movie.id = casting.movieid
inner join actor on casting.actorid = actor.id
where
    movie.yr = 1962
    and casting.ord = 1


/* 11
 * Which were the busiest years for 'Rock Hudson', show the year and the number of movies he made each year for any year in which he made more than 2 movies.
 */
select 
    yr, 
    count(title
from casting
inner join movie on movie.id = casting.movieid
inner join actor on casting.actorid = actor.id
where name = 'Rock Hudson'
group by yr
having count(title) > 1

/* 12
 * List the film title and the leading actor for all of the films 'Julie Andrews' played in.
 */
select
    title
    , name
from movie
inner join casting on movie.id = casting.movieid
inner join actor on actor.id = casting.actorid
where
    ord = 1
    and movieid in (
        select movieid
        from movie
        inner join casting on movie.id = casting.movieid
        inner join casting on actor.id = casting.actorid
        where name = 'Julie Andrews'
    )

/* 13
 * Obtain a list, in alphabetical order, of actors who've had at least 15 starring roles.
 */
select name
from movie
inner join casting on movid.id = casting.movieid
inner join actor on actor.id = casting.actorid
where ord = 1
group by name
having count(ord) >= 15
order by name

/* 14
 * List the films released in the year 1978 ordered by the number of actors in the cast, then by title.
 */
select 
    title
    , count(actorid)
from movie
inner join casting on movie.id = casting.movieid
inner join actor on actor.id = casting.actorid
where yr = 1978
group by title
order by 
    count(actorid) desc
    , title

 /* 15
 * List all the people who have worked with 'Art Garfunkel'.
 */
select name
from movie
inner join casting on movie.id = casting.movieid
inner join actor on actor.id = casting.actorid
where 
    movieid in (
        select movieid
        from movie
        inner join casting on movie.id = casting.movieid
        inner join actor on actor.id = casting.actorid
        where name = 'Art Garfunkel'
    )
    and name != 'Art Garfunkel'
order by name
