insert into cities (name, area, state_id)
values ('Campinas', 795, 32)

insert into cities (name, area, state_id)
values ('Niterói', 133.9, 26)

insert into cities (name, area, state_id)
values ('Caruaru', 920.6, 
    (
    select id from states where initials = 'PE'
    )
)    

insert into cities (name, area, state_id)
values ('Juazeiro do Norte', 248.2, 
    (
    select id from states where initials = 'CE'
    )
)   

select * from cities