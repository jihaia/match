import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { performMatch } from '../actions/index';

import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



export class SearchForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            readyToSubmit: true,
            countryCode: 'US'
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event){
        this.props.performMatch({countryCode: this.state.countryCode});
    }


    render() {
        return (
            <Card style={{margin: '15px'}}>

                <CardTitle title="Direct+ Match"/>

                <CardHeader
                    title="Required Information"
                    subtitle="The country of origin is required for all match requests."
                />

                <CardText>
                    <TextField
                        hintText="e.g. US"
                        floatingLabelText="Enter a country code"
                        fullWidth={true}
                        onChange={event => this.setState({readyToSubmit: event.target.value.length >= 2, countryCode: event.target.value })}
                        value={this.state.countryCode}
                    />
                </CardText>

                <CardHeader
                    title="Optional Information"
                    subtitle="Supply one or more of the items below."
                />

                <CardText>
                    <TextField hintText="e.g. ACME Chemicals" floatingLabelText="Company name" fullWidth={true} />
                    <TextField hintText="e.g. 1500 Somewhere Street" floatingLabelText="Street address" fullWidth={true} />
                    <TextField hintText="e.g. Nowhereville" floatingLabelText="City" fullWidth={true} />
                    <TextField hintText="e.g. 12345" floatingLabelText="Postal Code" fullWidth={true} />
                    <TextField hintText="e.g. 1500 Somewhere Street" floatingLabelText="Street address" fullWidth={true} />
                    <TextField hintText="e.g. 80012345678" floatingLabelText="Telephone Number" fullWidth={true} />
                </CardText>


                <CardActions>
                    <FlatButton label="Match Now" secondary={true} disabled={!this.state.readyToSubmit} onClick={ this.onFormSubmit } />
                </CardActions>
            </Card>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ performMatch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);
