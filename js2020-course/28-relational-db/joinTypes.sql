select * 
from cities c 
inner join mayors m on c.id = m.cities_id;

select * 
from cities c 
left join mayors m on c.id = m.cities_id;

select * 
from cities c 
right join mayors m on c.id = m.cities_id;

-- Not MySql supported
-- select * 
-- from cities c 
-- full join mayors m on c.id = m.cities_id;

select * 
from cities c 
right join mayors m on c.id = m.cities_id
union
select * 
from cities c 
left join mayors m on c.id = m.cities_id;

select * 
from cities c 
right join mayors m on c.id = m.cities_id
union all
select * 
from cities c 
left join mayors m on c.id = m.cities_id;