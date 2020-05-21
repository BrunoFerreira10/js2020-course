select * from states

select name as 'State name', initials from states
WHERE region = 'South'

select name as 'State name', initials from states
WHERE population >= 10
order by population desc

