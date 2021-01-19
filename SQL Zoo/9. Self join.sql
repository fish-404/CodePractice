/* 1
 * How many stops are in the database.
 */
select count(id) from stops

/* 2
 * Find the id value for the stop 'Craiglockhart'
 */
select id
from stops
where name = 'Craiglockhart'

/* 3
 * Give the id and the name for the stops on the '4' 'LRT' service.
 */
select 
    id, 
    name
from stops 
inner join route on stop = id
where 
    num = '4'
    and company = 'LRT'

/* 4
 * The query shown gives the number of routes that visit either London Road (149) or Craiglockhart (53). Run the query and notice the two services that link these stops have a count of 2. Add a HAVING clause to restrict the output to these two routes. 
 */
select 
    company
    , num
    , count(*)
from route
where
    stop = 149
    or stop = 53
group by 
    company
    , num
having count(*) = 2

/* 5
 * Execute the self join shown and observe that b.stop gives all the places you can get to from Craiglockhart, without changing routes. Change the query so that it shows the services from Craiglockhart to London Road.
 */
select 
    route_a.company
    , route_a.num
    , route_a.stop
    , route_b.stop
from route as route_a
inner join route as route_b on 
    route_a.company = route_b.company 
    and route_a.num = route_b.num
where 
    route_aa.stop = 53
    and route_b.stop = 149

/* 6
 * The query shown is similar to the previous one, however by joining two copies of the stops table we can refer to stops by name rather than by number. Change the query so that the services between 'Craiglockhart' and 'London Road' are shown. If you are tired of these places try 'Fairmilehead' against 'Tollcross'
 */
select
    route_a.company
    , route_a.num
    , stop_a.name
    , stop_b.name
from route as route_a 
inner join route as route_b on 
    route_a.company = route_b.company
    and route_a.num = route_b.num
inner join stops as stop_a on route_a.stop = stop_a.id
inner join stops as stop_b on route_b.stop = stop_b.id
where  
    stop_a.name='Craiglockhart'
    and stopb.name = 'London Road'

/* 7
 * Give a list of all the services which connect stops 115 and 137 ('Haymarket' and 'Leith')
 */
select 
    distinct route_a.company
    , route_a.num
from route as route_a
inner join route as route_b on 
    route_a.company = route_b.company
    and route_a.num = route_b.num
where 
    route_a.stop = 115
    and b.stop = 137

/* 8
 * Give a list of the services which connect the stops 'Craiglockhart' and 'Tollcross'
 */
select
    route_a.company
    , route_a.num
from route as route_a
inner join route as route_b on 
    route_a.company = route_b.company 
    and route_a.num = route_b.num
inner join stops as stop_a on route_a.stop = stop_a.id
inner join stops as stop_b on route_b.stop = stop_b.id
where 
    stopa.name='Craiglockhart'
    and stopb.name = 'Tollcross'
      
/* 9
 * Give a distinct list of the stops which may be reached from 'Craiglockhart' by taking one bus, including 'Craiglockhart' itself, offered by the LRT company. Include the company and bus no. of the relevant services.
 */
select
    distinct stop_b.name
    , route_a.company
    , route_a.num
from route as route_a 
inner join route as route_b on 
    route_a.company = route_b.company
    and route_a.num = route_b.num
inner join stops as stop_a on route_a.stop = stop_a.id
inner join stops as stop_b on route_b.stop = stop_b.id
where
    a.company = 'LRI'
    and stop_a.name = 'Craiglockhart'
   
/* 10
 * Find the routes involving two buses that can go from Craiglockhart to Lochend.
 * Show the bus no. and company for the first bus, the name of the stop for the transfer,
 * and the bus no. and company for the second bus.
 */
select 
    route_a.num
    , route_a.company
    , stop_b.name
    , route_d.num
    , route_d.company
from route as route_a
inner join route as route_b on 
    route_a.company = route_b.company
    and route_a.num = route_b.num
inner join route as route_c on route_b.stop = route_c.stop
inner join route as route_d on 
    route_d.company = route_c.company
    and route_c.num = route_d.num
inner join stops as stop_a on route_a.stop = stop_a.id
inner join stops as stop_b on route_b.stop = stop_b.id
inner join stops as stop_c on route_c.stop = stop_c.id
inner join stops as stop_d on route_d.stop = stop_d.id
where stopa.name = 'Craiglockhart'
and stopd.name = 'Lochend'
