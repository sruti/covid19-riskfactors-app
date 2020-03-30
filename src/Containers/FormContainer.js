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
        let {data, handleClick, state, exceptions} = this.props
        return (
            <section className="mainContainer" >
                {data[0][1].map((rowData) => {
                    return <FormRowContainer
                        rowData={rowData}
                        key={rowData.title}
                        handleClick={handleClick}
                        section="basic"
                        currentParentState={state[rowData.stateName]}
                        exceptions={exceptions}
                        rr24YesState={state.rr24YesState}
                        rr24NoState={state.rr24NoState}
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
                                handleClick={handleClick}
                                section="advanced"
                                currentParentState={state[rowData.stateName]}
                                exceptions={exceptions}
                                alt40YesState={state.alt40YesState}
                                alt40NoState={state.alt40NoState}
                                astYesState={state.astYesState}
                                astNoState={state.astNoState}
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
