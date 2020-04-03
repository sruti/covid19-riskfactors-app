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
        let { basicData, advancedData, handleClick, state, handleYNClick, setColor } = this.props
        return (
            <section className="mainContainer" >
                {basicData.map((rowData) => {
                    return <FormRowContainer
                        rowData={rowData}
                        key={rowData.title}
                        handleClick={handleClick}
                        handleYNClick={handleYNClick}
                        section="basic"
                        currentParentState={state[rowData.stateName]}
                        setColor={setColor}
                        state={this.props.state}
                    />
                })
                }
                {this.state.show ?
                    <>
                        <Button variant="link" onClick={this.handleChange}>Hide Labs</Button>
                        {advancedData.map((rowData) =>
                            <FormRowContainer
                                rowData={rowData}
                                key={rowData.title}
                                handleClick={handleClick}
                                handleYNClick={handleYNClick}
                                section="advanced"
                                currentParentState={state[rowData.stateName]}
                                setColor={setColor}
                                state={this.props.state}
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
