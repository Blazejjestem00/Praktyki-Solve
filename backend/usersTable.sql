Table users {
  id                  serial        [primary key]
  first_name          varchar(50)   [not null]
  surname             varchar(50)   [not null]
  email               varchar(255)  [unique, not null]
  gender              varchar(20)   [not null]       // 'male', 'female'
  created_at          timestamptz   [default: `now()`]
  updated_at          timestamptz   [default: `now()`]
}

Table swipes {
  id          serial      [primary key]
  swiper_id   integer     [not null, ref: > users.id]
  swiped_id   integer     [not null, ref: > users.id]
  direction   varchar(10) [not null]   // 'like', 'pass', 'super_like'
  created_at  timestamptz [default: `now()`]

  indexes {
    (swiper_id, swiped_id) [unique]
  }
}

Table matches {
  id          serial      [primary key]
  user1_id    integer     [not null, ref: > users.id]
  user2_id    integer     [not null, ref: > users.id]
  matched_at  timestamptz [default: `now()`]

  indexes {
    (user1_id, user2_id) [unique]
  }
}

--https://dbdiagram.io/d