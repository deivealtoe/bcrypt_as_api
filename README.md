## Bcrypt as API

This project was created to make me feel a bit less scared of the npm package called knex (it is a flexible, portable and not that hard to use multi-dialect query builder).

I needed to start somewhere and decided to start with it.

### This is a simple project

+ **/create_hash**
  + Default salt number is 10, but it can be modified by passing the parameter **?salt=**. It must be between 1 - 16.
  + It is a POST request where you pass the text to be hashed. Returns the hash.
+ **/compare_hashs**
  + It is a POST request where you pass the text and the hash to be compared. Returns true or false.
+ **/get_all_hashes_saved**
  + It is a GET request that returns all hashes saved in the database.
