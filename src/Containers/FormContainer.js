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
                        currentParentState={this.props.state[rowData.stateName]}
                        exceptions={this.props.exceptions}
                        rr24YesState={this.props.state.rr24YesState}
                        rr24NoState={this.props.state.rr24NoState}
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
                                currentParentState={this.props.state[rowData.stateName]}
                                exceptions={this.props.exceptions}
                                alt40YesState={this.props.state.alt40YesState}
                                alt40NoState={this.props.state.alt40NoState}
                                astYesState={this.props.state.astYesState}
                                astNoState={this.props.state.astNoState}
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
