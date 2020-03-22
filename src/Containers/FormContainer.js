import React, { Component } from 'react'
import FormRowContainer from './FormRowContainer';


export class FormContainer extends Component {

    render() {
        // console.log(this.props);
        
        return (
            <section style={{"border":"black solid 2px"}}>
                BASICS | MORTALITY | ARDS | ARDS Death
                {this.props.data.map(rowData => <FormRowContainer rowData={rowData}/>)}
                
            </section>
        )
    }
}

export default FormContainer
