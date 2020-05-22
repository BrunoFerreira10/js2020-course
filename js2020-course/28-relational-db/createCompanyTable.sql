create table if not exists mayors (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    cnpj int unsigned,
    PRIMARY KEY (id),
    unique key (cnpj)    
);

create table if not exists company_unitys (
    company_id INT UNSIGNED NOT NULL,
    city_id INT UNSIGNED NOT NULL,
    headquarter tinyint(1) NOT NULL,    
    PRIMARY KEY (company_id, city_id)
);