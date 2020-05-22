insert into company 
    (name, cnpj)
values
    ('Bradesco', 95694186000132),
    ('Vale', 27887148000146),
    ('Cielo', 01598317000134);

alter table company modify cnpj varchar(14);

desc company;

insert into company_unitys
    (company_id, city_id, headquarter)
values
    (1,0,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);