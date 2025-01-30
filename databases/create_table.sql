CREATE TABLE at_sys_msuser (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    user_fullname VARCHAR(100) NOT NULL,
    user_pass VARCHAR(255) NOT NULL,
    user_email VARCHAR(100) NOT NULL UNIQUE,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_by INT NOT NULL,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE at_sys_msrole (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_by INT NOT NULL,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE at_sys_msuserrole (
    userrole_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_by INT NOT NULL,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES at_sys_msuser(user_id),
    FOREIGN KEY (role_id) REFERENCES at_sys_msrole(role_id)
);

CREATE TABLE at_sys_msexceltemplate (
    template_id SERIAL PRIMARY KEY,
    template_name VARCHAR(100) NOT NULL UNIQUE,
    template_description TEXT,
    template_file BYTEA NOT NULL,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_by INT NOT NULL,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE at_ab_mstipeabsen (
    tipeabsen_id SERIAL PRIMARY KEY,
    tipeabsen_name VARCHAR(50) NOT NULL UNIQUE,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_by INT NOT NULL,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE at_ab_trabsen (
    absen_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    tipeabsen_id INT NOT NULL,
    absen_date DATE NOT NULL,
    absen_time TIME NOT NULL,
    absen_status VARCHAR(20) NOT NULL,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_by INT NOT NULL,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES at_sys_msuser(user_id),
    FOREIGN KEY (tipeabsen_id) REFERENCES at_ab_mstipeabsen(tipeabsen_id)
);

CREATE TABLE at_ct_trcuti (
    cuti_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    cuti_start_date DATE NOT NULL,
    cuti_end_date DATE NOT NULL,
    cuti_reason TEXT NOT NULL,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_by INT NOT NULL,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES at_sys_msuser(user_id)
);

CREATE TABLE at_lb_mstipelembur (
    tipelembur_id SERIAL PRIMARY KEY,
    tipelembur_name VARCHAR(50) NOT NULL UNIQUE,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_by INT NOT NULL,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE at_lb_trlembur (
    lembur_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    tipelembur_id INT NOT NULL,
    lembur_date DATE NOT NULL,
    lembur_start_time TIME NOT NULL,
    lembur_end_time TIME NOT NULL,
    lembur_reason TEXT NOT NULL,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_by INT NOT NULL,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES at_sys_msuser(user_id),
    FOREIGN KEY (tipelembur_id) REFERENCES at_lb_mstipelembur(tipelembur_id)
);
