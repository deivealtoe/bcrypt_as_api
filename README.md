## Bcrypt as API

Simple API to hash e compare hash using bcrypt.

### This is a simple project

+ **/create_hash**
  + Default salt number is 10, but it can be modified by passing the parameter **?salt=**. It must be between 1 - 16.
  + It is a POST request where you pass the text to be hashed. Returns the hash.
  + ![Print of a request creating a hash in Insomnia](https://raw.githubusercontent.com/deivealtoe/bcrypt_as_api/master/_images/create_hash.png)
+ **/compare_hashs**
  + It is a POST request where you pass the text and the hash to be compared. Returns true or false.
  + ![Print of a request comparing a hash in Insomnia](https://raw.githubusercontent.com/deivealtoe/bcrypt_as_api/master/_images/compare_hash.png)
+ **/get_all_hashes_saved**
  + It is a GET request that returns all hashes saved in the database.
  + ![Print of a request getting all hashes saved in the database](https://raw.githubusercontent.com/deivealtoe/bcrypt_as_api/master/_images/get_all_hashes_saved.png)

#### In production server it won't be a database saving hashes
