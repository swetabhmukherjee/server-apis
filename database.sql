create table Server(
	id serial not null,
	ram int4 not null,
	cpu int4 not null,
	os varchar(64) not null,
	graphics int4 not null,
	storage int4 not null,
	create_at timestamptz not null,
	updated_At timestamptz not null
	
);