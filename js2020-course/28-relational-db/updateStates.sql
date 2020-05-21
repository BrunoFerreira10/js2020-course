update states 
set name = 'Maranhão'
WHERE initials = 'MA'

select name from states WHERE initials = 'MA'

update states
set name = 'Paraná', 
    population = 11.32
where initials = 'PR'

select st.name, initials, population
 from states st WHERE initials = 'PR'