# Database Setup for PostgreSQL

This document provides instructions for setting up and managing the PostgreSQL database for the project.

## Prerequisites

- PostgreSQL installed on your machine
- Basic knowledge of SQL and PostgreSQL

## Database Configuration

1. **Create a new database:**

    ```sql
    CREATE DATABASE your_database_name;
    ```

2. **Connect to the newly created database:**

    ```sh
    psql -d your_database_name
    ```

3. **Create a new user with a password:**

    ```sql
    CREATE USER your_username WITH PASSWORD 'your_password';
    ```

4. **Grant privileges to the user:**

    ```sql
    GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_username;
    ```

## Running Migrations

To apply the database schema changes, run the following command:

```sh
psql -d your_database_name -f path_to_your_schema_file.sql
```

## Backup and Restore

- **Backup the database:**

    ```sh
    pg_dump your_database_name > backup.sql
    ```

- **Restore the database:**

    ```sh
    psql your_database_name < backup.sql
    ```

## Additional Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [psql Command Line Tool Documentation](https://www.postgresql.org/docs/current/app-psql.html)
