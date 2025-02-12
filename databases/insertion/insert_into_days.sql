<<<<<<< Updated upstream
-- Active: 1739191634895@@127.0.0.1@5432@appsenindb
=======
<<<<<<< Updated upstream
-- Active: 1738430153803@@127.0.0.1@5432@appsenindb@public
=======
-- Active: 1739156989671@@127.0.0.1@5432@appsenindb
>>>>>>> Stashed changes
>>>>>>> Stashed changes
INSERT INTO at_sys_msdays (days_name, created_by, modified_by, is_active)
    VALUES ('Senin', 1, 1, TRUE),
        ('Selasa', 1, 1, TRUE),
        ('Rabu', 1, 1, TRUE),
        ('Kamis', 1, 1, TRUE),
        ('Jumat', 1, 1, TRUE),
        ('Sabtu', 1, 1, TRUE),
<<<<<<< Updated upstream
        ('Minggu', 1, 1, TRUE);

INSERT INTO at_sys_msrole (role_name, created_by, modified_by, is_active)
    VALUES ('Administrator', 2, 2, TRUE);
=======
<<<<<<< Updated upstream
        ('Minggu', 1, 1, TRUE);
=======
        ('Minggu', 1, 1, TRUE);

INSERT INTO at_sys_msrole (role_name, created_by, modified_by, is_active)
    VALUES('Team_Leader', 2, 2, TRUE),
          ('Tech_Writer', 2, 2, TRUE),
          ('Tech_Support', 2, 2, TRUE);

select * from at_sys_msrole
>>>>>>> Stashed changes

INSERT INTO at_sys_msposition (position_name, created_by, modified_by, is_active)
    VALUES ('Appsenin_Position', 2, 2, TRUE),
            ('Team Leader', 2, 2, TRUE),
            ('Technical Support', 2, 2, TRUE),
            ('Technical Writer', 2, 2, TRUE);

<<<<<<< Updated upstream
=======
select * from at_sys_msposition

>>>>>>> Stashed changes
INSERT INTO at_sys_msdepartment (department_name, created_by, modified_by, is_active)
    VALUES ('Appsenin', 2, 2, TRUE),
           ('Korporat-1', 2, 2, TRUE);

--set foreign key

INSERT INTO at_sys_msuserdepartment (user_id, position_id, department_id, created_by, modified_by, is_active)
<<<<<<< Updated upstream
    VALUES (1, 1, 1, 1, 1, TRUE);

insert into at_sys_msuserrole (user_id, role_id, created_by, modified_by, is_active)
    values (1, 1, 2, 2, TRUE);

=======
    -- VALUES (1, 1, 1, 1, 1, TRUE)
    VALUES (6,2,1,2,2,TRUE),
    (7,3,1,2,2,TRUE),
    (8,4,1,2,2,TRUE)
    ;

select * from at_sys_msuserdepartment

insert into at_sys_msuserrole (user_id, role_id, created_by, modified_by, is_active)
    -- values (1, 1, 2, 2, TRUE);
    VALUES (6,2,2,2,TRUE),
    (7,3,2,2,TRUE),
    (8,4,2,2,TRUE)

SELECT * FROM at_sys_msuserrole
>>>>>>> Stashed changes
>>>>>>> Stashed changes
