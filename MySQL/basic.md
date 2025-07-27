<!-- created database from UI named as "tasks" then created table named as "user_records" -->

CREATE TABLE `tasks`.`user_records` (`id` INT(50) NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `mobile` INT(100) NOT NULL , `city` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

<!-- insert records -->
INSERT INTO `user_records`(`id`, `name`, `email`, `mobile`, `city`) VALUES ('1','ABC','abc@gmail.com','9088877880','knp');

<!-- select query to see insertions-->
SELECT * FROM `user_records` 

<!-- update records -->
UPDATE `user_records` SET `id`='6',`name`='xyz',`email`='aa@gmail.com',`mobile`='89989899',`city`='lko' where id ='2'

<!-- to delete records -->
DELETE FROM `user_records` WHERE id ='1'

<!-- create new databse using query -->
create DATABASE myDB;

<!-- to use datbase -->
use mydb;

<!-- create table using query -->
create TABLE users (id int(50) not null primary key ,
                    name varchar(250),
                    city varchar(100),
                    mobile varchar(100)
                   );

<!-- insert record using query -->
insert into users (`id` , `name`, `city`, `mobile`) values ('1', 'abc', 'lko' , '56677878');

INSERT INTO `user_records` (`id`, `name`, `email`, `mobile`, `city`) VALUES (NULL, 'Harry', 'harry@gmail.com', '566787', 'delhi');
<!-- to drop table -->
drop table `users` ;

<!-- CRUD operations -->
<!-- insert /create-->
insert into user_records (`id`, `name`, `email`, `mobile`,  `city`) values ('', 'ABB' ,'abb@gmail.com', '9089087908' , 'lko');
INSERT INTO `user_records` (`id`, `name`, `email`, `mobile`, `city`) VALUES (NULL, 'Harry', 'harry@gmail.com', '566787', 'delhi');

<!-- select/retrieve -->
SELECT * FROM `user_records` 
SELECT * FROM `user_records` WHERE id ='1';

<!-- update -->
update user_records set `id`='1', `name` = 'Lucky', `email` = 'ambb@gmail.com', `mobile` = '234556566' where id ='6'
<!-- delete -->
delete from user_records;

<!-- like operator -->
SELECT * FROM `user_records` WHERE name like 'kaya';

<!-- in operator -->
SELECT * FROM `user_records` WHERE id in(1,6,7);

<!-- union -->
SELECT name from user_records union select mobile from user_records;

<!-- group by -->
select * from students group by class;

<!-- having -->
select * from students group by class having class>2;