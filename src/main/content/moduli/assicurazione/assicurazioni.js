import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {List, ListItem, ListItemText, Icon, Hidden, IconButton, Typography} from '@material-ui/core';
import {FuseAnimate, FusePageCarded} from '@fuse';
import {Link} from 'react-router-dom';
import _ from '@lodash';
import FormIGPAIM from './formIGPAIM';
import firebaseService from 'firebaseService';


const styles = theme => ({
    layoutRoot   : {},
    layoutToolbar: {
        padding: 0
    },
    tabsRoot     : {
        height: 64
    },
    tabRoot      : {
        height: 64
    }
});

class Assicurazioni extends Component {

    state = {
        value: 0,
        selectedForm: {
            id: 'IGPAIM',
            name: "Assicurazioni",
            content: "",
            images: [
                {
                    url: "aaa"
                },
                {
                    url: "bbb"
                }]
        },
    }

    componentDidMount(){
    }

    handleChange = (value) => {
        this.setState({value});

        console.log(value);
    }

    handleChangeTab = (value) => {
        console.log(value);
        this.setState({selectedForm: _.set({...this.props.form}, "id", value)});
        console.log(this.state.selectedForm);
    }

    canBeSubmitted = () => {
        return true;
        // const {name} = this.state.selectedForm;
        // return (
        //     name.length > 0 &&
        //     !_.isEqual(this.props.product.data, this.state.selectedForm)
        // );
    }

    render(){
        const {classes} = this.props;
        const {selectedForm} = this.state;

        return(
            <FusePageCarded
                classes={{
                    root   : classes.layoutRoot,
                    toolbar: classes.layoutToolbar
                }}
                header={
                    <div className="flex flex-1 w-full items-center justify-between">
                        <div className="flex flex-col items-start py-24">
                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/apps/e-commerce/products">
                                    <Icon className="mr-4 text-20">arrow_back</Icon>
                                    Indietro
                                </Typography>
                            </FuseAnimate>

                            <div className="flex items-center max-w-full">
                                <FuseAnimate animation="transition.expandIn" delay={300}>
                                    <img className="w-32 sm:w-48 mr-8 sm:mr-16 rounded" src="assets/images/ecommerce/product-image-placeholder.png" alt={selectedForm.name}/>
                                </FuseAnimate>
                                <div className="flex flex-col min-w-0">
                                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                        <Typography className="text-16 sm:text-20 truncate">
                                            {selectedForm.name ? selectedForm.name : 'Assicurazioni'}
                                        </Typography>
                                    </FuseAnimate>
                                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                        <Typography variant="caption">Compilazione modulo</Typography>
                                    </FuseAnimate>
                                </div>
                            </div>


                            <Hidden lgUp>
                                <IconButton
                                    onClick={(ev) => this.pageLayout.toggleRightSidebar()}
                                    aria-label="open left sidebar"
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                        </div>
                    </div>
                }
                content={
                    <div className="p-24">
                        {selectedForm.id === "IGPAIM" &&
                            (
                                <div>
                                    <FormIGPAIM saveForm={(data) => {
                                        firebaseService.saveIGPAIM(data);
                                    }}/>
                                </div>
                            )
                        }
                        {selectedForm.id === "ICPA" &&
                        (
                            <div> ITEM 2</div>
                        )
                        }
                        {selectedForm.id === "VTP" &&
                        (
                            <div> ITEM 3</div>
                        )
                        }
                    </div>
                }
                rightSidebarHeader={
                    <div className="p-24">
                        <h4></h4>
                    </div>
                }
                rightSidebarContent={
                    <div className="p-24">
                        <h4>Formulari</h4>
                        <br/>
                        <div>
                            <List dense={true} >
                                <ListItem button onClick={() => this.handleChangeTab("IGPAIM")}>
                                    <ListItemText
                                        primary="Ind. giornaliera per aziende"
                                    />
                                </ListItem>
                                <ListItem button onClick={() => this.handleChangeTab("ICPA")}>
                                    <ListItemText
                                        primary="Cose per aziende"
                                    />
                                </ListItem>
                                <ListItem button onClick={() => this.handleChangeTab("VTP")}>
                                    <ListItemText
                                        primary="Vita e terzo pilastro"
                                    />
                                </ListItem>
                                <ListItem button onClick={() => this.handleChangeTab("CASA")}>
                                    <ListItemText
                                        primary="Casa"
                                    />
                                </ListItem>
                                <ListItem button onClick={() => this.handleChangeTab("AUTO")}>
                                    <ListItemText
                                        primary="Auto"
                                    />
                                </ListItem>
                                <ListItem button onClick={() => this.handleChangeTab("MAL")}>
                                    <ListItemText
                                        primary="Malattia"
                                    />
                                </ListItem>
                            </List>
                        </div>
                    </div>
                }
                innerScroll
                onRef={instance => {
                    this.pageLayout = instance;
                }}
            />
        );
    }

}


export default withStyles(styles, {withTheme: true}) (Assicurazioni);