CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION "pgcrypto";

CREATE TABLE region (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
  climate_type text NOT NULL,
  title text NOT NULL,
  description text,
  image_thumb uuid,
  image_cover uuid
);

CREATE TABLE vineyard (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
  name text NOT NULL,
  location point,
  description text,
  picture_thumb uuid,
  picture_cover uuid,
  region_id uuid REFERENCES region(id)
);

CREATE TABLE wine (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
  name text NOT NULL,
  vintage integer NOT NULL,
  vineyard_id uuid REFERENCES vineyard(id),
  alcohol real NOT NULL,
  sugar real NOT NULL,
  acid real NOT NULL,
  brix real NOT NULL,
  body real NOT NULL,
  color text NOT NULL,
  is_red boolean NOT NULL,
  tannin real NOT NULL,
  fruity boolean NOT NULL,
  spicy boolean NOT NULL,
  tart boolean NOT NULL,
  label_description text,
  price money NOT NULL
);

CREATE TABLE grape (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
  name text NOT NULL,
  description text,
  image_thumb uuid,
  berry_skin_color text,
  also_known_as text,
  idea_soil text,
  general text,
  cool text,
  mid text,
  hot text
);

CREATE TABLE grape_component (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
  wine_id uuid REFERENCES wine(id),
  grape_id uuid REFERENCES grape(id),
  percent real
);

CREATE TABLE foods (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
  name text NOT NULL,
  picture uuid,
  fatty boolean NOT NULL,
  sweet boolean NOT NULL,
  dense boolean NOT NULL,
  starchy boolean NOT NULL,
  delicate boolean NOT NULL,
  strong boolean NOT NULL,
  description text
);

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
  name text NOT NULL,
  email text NOT NULL,
  password text,
  role smallint NOT NULL DEFAULT 0,
  likes bigint NOT NULL DEFAULT 0,
  bio text
);

CREATE TABLE comments (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
  user_id uuid REFERENCES users(id),
  title text,
  date_posted timestamp NOT NULL,
  body text NOT NULL,
  stars integer NOT NULL DEFAULT 0,
  wine_id uuid REFERENCES wine(id)
);

CREATE TABLE vintage_attrs (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
  year int NOT NULL,
  region_id uuid REFERENCES region(id),
  comment_ text
);
