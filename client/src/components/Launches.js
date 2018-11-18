import React,{ Component }  from 'react';
import LaunchItem from './LaunchItem';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches{
            flight_number,
            mission_name,
            launch_date_local,
            launch_success  
        }
    }
`;

class Launches extends Component{
    render(){
        return(
            <div>
                <h1 className="display-4 my-3">Launches</h1>
                <div className="my-3">
                    <p> <span className="px-3 mr-2 bg-success"/> Success</p>
                    <p> <span className="px-3 mr-2 bg-danger" /> Failed</p>
                </div>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return (<h4>Loading ...</h4>);
                            if(error) console.log(error);

                            console.log(data)
                            return(
                                <div>
                                    {data.launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch} />)}
                                </div>
                            );
                        }
                    }
                </Query>
            </div>
        );
    }
}

export default Launches;