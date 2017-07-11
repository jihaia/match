import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import { indigo500, indigo700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchForm from '../containers/SearchForm';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {navigatorOpened: false};
        this.onToggleNavigator = this.onToggleNavigator.bind(this);

    }

    onToggleNavigator(event){
        this.setState({navigatorOpened: !this.state.navigatorOpened});
        console.log(this.state);
    }

    render() {
        const theme = getMuiTheme({
            ...lightBaseTheme,
            palette: {
                // primary1Color: indigo500,
                pickerHeaderColor: indigo500,
                primary2Color: indigo700
            }
        });

        return (
            <MuiThemeProvider muiTheme={theme}>
                <div className="tool-container">
                    <AppBar
                        title='D&B Tools'
                        className="header"
                        style={{ position: 'fixed', top: 0 }}
                        onLeftIconButtonTouchTap={this.onToggleNavigator}
                    />
                    <Drawer open={this.state.navigatorOpened} docked={false} >
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                    <SearchForm />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
