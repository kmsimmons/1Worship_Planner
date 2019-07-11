-- NOT COMPLETE BY ANY MEANS IF YOU NEED TO TWEAK FEEL FREE

create table users (
  user_id serial primary key,
  firstName varChar(50),
  lastName varChar(50),
  phone varChar(20)
  email varChar(50)
);

create table user_login (
  login_id serial primary key,
  password text,
  email varChar(50)
)

create table service_type (
  service_id serial primary key,
  name varChar(50),
  description varChar(300),
  frequency varChar(50),
  time varChar(50),
  date varChar(50)
)

create table plan (
  plan_id serial primary,
  name varChar(50),
  description varChar(300),
  service_id int references service_type(service_id)
)

-- NOT CONFIDENT IN THIS NEED TO COME BACK AND CLEAN UP AFTER CHECKING IN WITH EDISON OR SOMEONE WHO KNOWS MUSIC BETTER THAN ME

create table song (
  song_id serial primary key,
  name varChar(100),
  tempo int,
  meter varChar(25),
  author varChar(50)
)

create table blackout (
  blackout_id serial primary key,
  start date,
  end date,
  user_id int references users(user_id)
)