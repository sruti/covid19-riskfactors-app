import React, { Component } from 'react'
import FormRowContainer from './FormRowContainer';


export class FormContainer extends Component {

    render() {
        
        return (
            <section style={{"border":"black solid 2px"}}>
                {this.props.data.map(rowData => { 
                return <FormRowContainer 
                        rowData={rowData} 
                        key={rowData.title}
                        handleOption={this.props.handleOption}/>})}
            </section>
        )
    }
}

export default FormContainer
