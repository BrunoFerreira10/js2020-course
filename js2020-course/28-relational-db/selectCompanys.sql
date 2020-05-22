select c.name as Company, ct.name as City
from company c, company_unitys cu, cities ct
where c.id = cu.company_id
and ct.id = cu.city_id
and headquarter;