import React, {Component} from 'react';
import {TextField, Button, MenuItem} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import _ from '@lodash';

class FormIGPAIM extends Component {


    ragioneSocOptions = [
        'S.r.l.',
        'SA',
        'Ditta semplice',
        'Societa\' con piu\' persone'
    ];

    state = {
        form: {
            name: 'IPAIM',
            default: {
                nomeDitta: 'Nome della ditta',
                ragioneSociale: 'Ragione Sociale',
                descrizioneDitta: 'Di cosa si occupa la ditta?',
            },
            values: {
                nomeDitta: '',
                ragioneDitta: '',
                descrizioneDitta: ''
            }
        }
    }

    handleChange = (event) => {
        let updatedValue = {
            form: _.set(
                {...this.state.form}, 'values.'+ event.target.name, event.target.value
            )
        }
        this.setState(updatedValue);
    };

    canBeSubmitted = () => {
        return true;
        // const {name} = this.state.selectedForm;
        // return (
        //     name.length > 0 &&
        //     !_.isEqual(this.props.product.data, this.state.selectedForm)
        // );
    }

    render(){
        const {form} = this.state;
        const {saveForm} = this.props;

        return(
            <div>
                <h1>Indennita' giornaliera per aziende</h1>
                <p>Infortuni e Malattia</p>
                <div className="flex">
                    <TextField
                        className="mt-8 mb-16 mr-8"
                        error={form.name === ''}
                        required
                        autoFocus
                        id="nomeDitta"
                        name="nomeDitta"
                        label={form.default.nomeDitta}
                        type="text"
                        value={form.values.nomeDitta}
                        onChange={(event) => this.handleChange(event)}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        className="mt-8 mb-16 mr-8"
                        id="ragioneDitta"
                        name="ragioneDitta"
                        onChange={this.handleChange}
                        label={form.default.ragioneSociale}
                        select
                        value={form.values.ragioneDitta}
                        variant="outlined"
                        fullWidth
                    >
                        {this.ragioneSocOptions.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <TextField
                    className="mt-8 mb-16"
                    id="descrizioneDitta"
                    name="descrizioneDitta"
                    onChange={this.handleChange}
                    label={form.default.descrizioneDitta}
                    type="text"
                    value={form.values.descrizioneDitta}
                    multiline
                    rows={5}
                    variant="outlined"
                    fullWidth
                />


                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                    <Button
                        className="whitespace-no-wrap"
                        variant="contained"
                        disabled={!this.canBeSubmitted()}
                        onClick={() => saveForm(form)}
                    >
                        Save
                    </Button>
                </FuseAnimate>
            </div>
        );
    };

}

export default FormIGPAIM;