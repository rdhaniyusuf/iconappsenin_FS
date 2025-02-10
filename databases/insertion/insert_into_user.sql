insert into 
  at_sys_msuser (
    user_name, 
    user_fullname, 
    user_pass, 
    user_email, 
    user_number, 
    created_by, 
    created_at, 
    modified_by, 
    modified_at, 
    is_active
  )
values
  (
    'appsenin.admin', 
    'Appsenin Admin', 
    'admin', 
    'appsenin.admin@test.com', 
    '621234',  
    '0', 
    'now()', 
    '0', 
    'now()', 
    true
  );
