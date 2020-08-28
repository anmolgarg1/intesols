import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);
const database_name = "intesols.db";
const database_version = "1.0";
const database_displayname = "Offline Database";
const database_size = 200000;

export default class Database {
    initDB() {
        let db;
        return new Promise((resolve) => {
          console.log("Plugin integrity check ...");
          SQLite.echoTest()
            .then(() => {
              console.log("Integrity check passed ...");
              console.log("Opening database ...");
              SQLite.openDatabase(
                database_name,
                database_version,
                database_displayname,
                database_size
              )
                .then(DB => {
                  db = DB;
                  console.log("Database OPEN");
                  db.executeSql('SELECT 1 FROM ContactDetails LIMIT 1').then(() => {
                      console.log("Database is ready ... executing query ...");
                  }).catch((error) =>{
                      console.log("Received error: ", error);
                      console.log("Database not yet ready ... populating data");
                      db.transaction((tx) => {
                          tx.executeSql('CREATE TABLE IF NOT EXISTS ContactDetails (name, email, country, imageName)');
                      }).then(() => {
                          console.log("Table created successfully");
                      }).catch(error => {
                          console.log(error);
                      });
                  });
                  resolve(db);
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              console.log("echoTest failed - plugin not functional");
            });
          });
      };
      closeDatabase(db) {
        if (db) {
          console.log("Closing DB");
          db.close()
            .then(status => {
              console.log("Database CLOSED");
            })
            .catch(error => {
                console.log(error);
            });
        } else {
          console.log("Database was not OPENED");
        }
      };
      listContact() {
        return new Promise((resolve) => {
          const contactDetails = [];
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT  cd.name, cd.email,cd.country,cd.imageName FROM ContactDetails cd', []).then(([tx,results]) => {
                console.log("Query completed");
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  console.log(`Name: ${row.name}`)
                  const { name, email, country,imageName } = row;
                  contactDetails.push({
                    name,
                    email,
                    country,
                    imageName
                  });
                }
                console.log(contactDetails);
                resolve(contactDetails);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }
      addContact(contact) {
        return new Promise((resolve) => {
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('INSERT INTO ContactDetails VALUES (?, ?, ?, ?)', [contact.name, contact.email, contact.country, contact.imageName]).then(([tx, results]) => {
                resolve(results);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }
}