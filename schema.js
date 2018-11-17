const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');
const config = require('./config');

//Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: {type: GraphQLInt},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        rocket: {type: RocketType}
    })
});

//Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: {
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString}
    }
});

//Root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        launches: {//all launches query
            type: new GraphQLList(LaunchType),
            resolve(parent, args){
                return axios.get(config.API_LAUNCHES)
                        .then(res => res.data);
            }
        },
        launch: { //launch query with flight number
            type: LaunchType,
            args: {
                flight_number: {type: GraphQLInt}
            },
            resolve(parent, args){
                return axios.get(config.API_LAUNCHES+args.flight_number)
                        .then(res => res.data);
            }
        },
        rockets: { //all rockets query
            type: new GraphQLList(RocketType),
            resolve(parent, args){
                return axios.get(config.API_ROCKETS)
                        .then(res => res.data);
            }
        },
        rocket: {//rocket query with rocket id
            type: RocketType,
            args: {
                rocket_id: {type: GraphQLString}
            },
            resolve(parent, args){
                return axios.get(config.API_ROCKETS+args.rocket_id)
                        .then(res => res.data);
            }
        }
    }
});

const MySchema = new GraphQLSchema({
    query: RootQuery
});

module.exports = MySchema;