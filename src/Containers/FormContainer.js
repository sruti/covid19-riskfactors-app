import React, { Component } from 'react'
import FormRowContainer from './FormRowContainer';
import Button from 'react-bootstrap/Button'


export class FormContainer extends Component {

    state = {
        show: false,
    }

    handleChange = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        return (
            <section className="mainContainer" >
                {this.props.data[0][1].map((rowData) => {
                    return <FormRowContainer
                        rowData={rowData}
                        key={rowData.title}
                        handleClick={this.props.handleClick}
                        section="basic"
                        currentParentState={rowData.showing}
                        exceptions={this.props.exceptions}
                        alt40YesState={this.state.alt40YesState}
                        alt40NoState={this.state.alt40NoState}
                        astYesState={this.state.astYesState}
                        astNoState={this.state.astNoState}
                        rr24YesState={this.state.rr24YesState}
                        rr24NoState={this.state.rr24NoState}
                    />
                })
                }
                {this.state.show ?
                    <>
                        <Button variant="link" onClick={this.handleChange}>Hide Labs</Button>
                        {this.props.data[1][1].map((rowData) =>
                            <FormRowContainer
                                rowData={rowData}
                                key={rowData.title}
                                handleClick={this.props.handleClick}
                                section="advanced"
                                currentParentState={rowData.showing}
                                exceptions={this.props.exceptions}
                            />)}
                    </>
                    :
                    <Button variant="link" onClick={this.handleChange}>Labs</Button>
                }
            </section>
        )
    }
}

export default FormContainer
