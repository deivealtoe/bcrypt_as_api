## Bcrypt as API

This project was created to make me feel a bit less scared of the npm package called knex (it is a flexible, portable and not that hard to use multi-dialect query builder).

I needed to start somewhere and decided to start with it.

### This is a simple project

By default, the salt value is **10**

+ **/create_hash**
  + It is a POST request where you pass the text to be hashed. Returns the hash.
+ **/compare_hashs**
  + It is a POST request where you pass the text and the hash to be compared. Returns true or false.
+ **/get_all_hashes_saved**
  + It is a GET request that returns all hashes saved in the database.
