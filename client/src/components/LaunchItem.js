import React,{ Component }  from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


class LaunchItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            launch: this.props.launch
        } 
    }

    renderIsSucccess = (isSuccess) => {
        if(isSuccess){
            return(<div><h4>Mission: <span className="text-success">{this.state.launch.mission_name}</span></h4></div>);
        }else{
            return(<div><h4>Mission: <span className="text-danger">{this.state.launch.mission_name}</span></h4></div>);
        }
    };

    render(){
        return(
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-9">
                        { this.renderIsSucccess(this.state.launch.launch_success) }
                        <p>Date: <Moment format="DD-MMM-YYYY HH:mm">{this.state.launch.launch_date_local}</Moment></p>
                    </div>
                    <div className="col-md-3">
                        <Link to={`/launch/${this.state.launch.flight_number}`} 
                              className="btn btn-secondary">
                                Launch Details
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LaunchItem;