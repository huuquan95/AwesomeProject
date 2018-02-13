import Realm from 'realm';
export const INFO_SCHEMA = "UserInformation";
export const FAVORITE_SCHEMA = "FavoriteMovies";
export const InfoSchema = {
    name: INFO_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        date: 'date',
        email: 'string',
        isMale: 'int'
    }
};
export const FavoriteSchema = {
    name: FAVORITE_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        poster_path: 'string',
        release_date: 'string',
        vote_average: 'float',
        overview: 'string'
    }
};

const databaseOptions = {
    schema: [InfoSchema, FavoriteSchema],
    schemaVersion: 3,
};

const defautInfo = { id: 0, name: 'Quinto Dinh', date: '11/26/1995', email: 'quinto@enclave', isMale: 1 }

export const insertInfo = (newInfo = defautInfo) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(INFO_SCHEMA, newInfo);
            resolve(newInfo);
        });
    })
        .catch((error) => reject(error));
});

export const updateInfo = (info = defautInfo) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let updatingInfo = realm.objectForPrimaryKey(INFO_SCHEMA, info.id);
            updatingInfo.name = info.name;
            updatingInfo.date = info.date;
            updatingInfo.email = info.email;
            updatingInfo.isMale = info.isMale;
            resolve(info);
        });
    })
        .catch((error) => reject(error));;
});

export const queryAllInfos = () => new Promise((resolve, reject) => {

    Realm.open(databaseOptions).then(realm => {
        let allInfos = realm.objects(INFO_SCHEMA);
        resolve(allInfos);
    })
        .catch((error) => reject(error));;
});

export const insertFavoriteMovies = (newMovie) => new Promise((resolve, reject) => {

    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(FAVORITE_SCHEMA, newMovie);
            resolve(newMovie);
        });
    })
        .catch((error) => reject(error));
});

export const deleteFavoriteMovies = (movieId) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let movie = realm.objectForPrimaryKey(FAVORITE_SCHEMA, movieId);
            realm.delete(movie)
            resolve();
        });
    })
        .catch((error) => reject(error));;
});

export const queryAllFavoriteMovies = () => new Promise((resolve, reject) => {

    Realm.open(databaseOptions).then(realm => {
        let allFavoriteMovies = realm.objects(FAVORITE_SCHEMA);
        resolve(allFavoriteMovies);
    })
        .catch((error) => reject(error));;
});

export default new Realm(databaseOptions);