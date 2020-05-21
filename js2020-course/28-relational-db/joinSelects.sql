select * from states s, cities c

select * from states s, cities c
where s.id = c.state_id

select 
    s.name as State, 
    c.name as City, 
    s.region as Region
from states s, cities c
where s.id = c.state_id


select 
    s.name as State, 
    c.name as City, 
    s.region as Region
from states s
inner join cities c on s.id = c.state_id
