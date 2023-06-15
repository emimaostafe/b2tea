create table produsestoc
(
    id        integer not null
        primary key,
    nume      varchar(100),
    pret      numeric(10, 2),
    cantitate integer
);


create table clienti
(
    id         integer not null
        primary key,
    urlreferer varchar(255)
);


create table mese
(
    id          integer not null
        primary key,
    tablenumber integer,
    isavailable boolean
);



create table comenzi
(
    id          integer not null
        primary key,
    clientid    integer
        references clienti,
    tableid     integer
        references mese,
    istakeaway  boolean,
    datacomanda timestamp
);



create table detaliicomanda
(
    comandaid integer
        references comenzi,
    produsid  integer
        references produsestoc,
    quantity  integer
);



INSERT INTO produsestoc (nume, pret, cantitate) VALUES
                                                    ('Jasmine', 15, 25),
                                                    ('Matcha', 20, 25),
                                                    ('Sencha', 15, 25),
                                                    ('Dragonwell', 20, 25),
                                                    ('Gunpowder', 18, 25),
                                                    ('Gyokuro', 25, 25),
                                                    ('Silver Needle', 25, 25),
                                                    ('White Peony', 20, 25),
                                                    ('Shou Mei', 20, 25),
                                                    ('Darjeeling White', 17, 25),
                                                    ('Ceylon White', 18, 25),
                                                    ('African White', 22, 25),
                                                    ('Assam', 22, 25),
                                                    ('Darjeeling', 20, 25),
                                                    ('Earl Grey', 23, 25),
                                                    ('Nimbu', 25, 25),
                                                    ('Keemun', 18, 25);