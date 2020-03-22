import React, { Component } from 'react'
import FormOptionText from '../Components/FormOptionText'
import FormOptionButton from '../Components/FormOptionButton'

export class FormRowContainer extends Component {
    render() {
        return (
            <section>
                form row
                <FormOptionText/>
                <FormOptionButton/>
            </section>
        )
    }
}

export default FormRowContainer
