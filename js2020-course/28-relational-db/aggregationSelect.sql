select 
    region as 'Region',
    sum(population) as Total
from states
group by region
order by Total desc