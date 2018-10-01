import React from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    root      : {
        display                       : 'flex',
        alignItems                    : 'center',
        '& .logo-text, & .react-badge': {
            transition: theme.transitions.create('opacity', {
                duration: theme.transitions.duration.shortest,
                easing  : theme.transitions.easing.easeInOut
            })
        }
    },
    logo      : {},
    logoIcon  : {
        width     : 0,
        height    : 0,
        transition: theme.transitions.create(['width', 'height'], {
            duration: theme.transitions.duration.shortest,
            easing  : theme.transitions.easing.easeInOut
        })
    },
    logoTesto   : {
      width: 110,
      height: 65
    },
    reactBadge: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color          : '#f7f0fb',

        flex: 'none',
        width: '140%',
        position: 'relative',
        left: '-40px'

    },
    containerTitolo: {
        left: '49px'
    }
});

function MainNavbarHeader({classes})
{
    return (
        <div className={classes.root}>
            <div className={classNames(classes.logo, "flex items-center")}>
                <img className={classNames(classes.logoIcon, "logo-icon")} src="assets/images/logos/C_Logo_inv.png" alt="logo"/>
                {/* */}
                <Typography className="text-16 ml-8 font-light logo-text" color="inherit"></Typography>

                <div className={classNames(classes.reactBadge, "react-badge flex items-center ml-16 mr-0 py-0 pl-16 pr-2 rounded")}>
                    <div className={classNames(classes.containerTitolo, "flex items-center m-0 relative" )}>
                        <span className="react-text text-14 ml-0">Agenzia</span>
                        <img className={classNames(classes.logoTesto, "logo-testo")} src="assets/images/logos/Chindamo_Testo.png" alt="logo"/>

                        {/*
                        <img
                            className="react-logo"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                            alt="react"
                            width="16"
                        />
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(withRouter(MainNavbarHeader));
