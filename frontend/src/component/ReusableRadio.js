import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Button, Popup } from 'semantic-ui-react';
import Rodal from 'rodal';

import './ReusableRadio.css';

import Pusher from 'pusher-js';

const test_case_correct_order = [
	6, 1, 2, 4, 5, 1, 2, 4, 5,  
]

class ReusableRadio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			max_stage_reached: 0,
			currently_viewing_stage: 0,
			selectedOption: null,
			optionsDisabled: false,
		}
		this.options = this.props.options
	}

	componentDidMount() {
		Pusher.logToConsole = true;
		this.pusher = new Pusher('db488d0af19f8f0ca2b2', {
			cluster: 'mt1',
			forceTLS: true
		});

		this.channel = this.pusher.subscribe('private-my-channel');
		this.channel.bind('my-event', function(data) {
			alert(JSON.stringify(data));
		});
		this.channel.bind('client-line-choice', function(data) {
			alert(JSON.stringify(data));
		})
	}
	
	handleOptionChange = (changeEvent) => {
		let newValue = changeEvent.target.value;
		this.channel.trigger('client-line-choice', newValue);
		this.setState({
			selectedOption: newValue
		});
	};

	handleNextLineGuess = (event) => {
		event.preventDefault();
		let solution = test_case_correct_order[this.state.max_stage_reached];
		if (solution == this.state.selectedOption) {
			// submited answer choice is correct
			alert("correct!");
			this.setState({
				max_stage_reached: this.state.max_stage_reached + 1,
				currently_viewing_stage: this.state.currently_viewing_stage + 1
			});
		} else {
			alert("incorrect!")
		}

	}


	
	handleClickPrevious = (event) => {
		let currently_viewing_stage = this.state.currently_viewing_stage;
		let max_stage_reached = this.state.max_stage_reached;
		if (max_stage_reached === 0) {
			return;
		}
		if (max_stage_reached === currently_viewing_stage && 
			this.state.selectedOption !== test_case_correct_order[currently_viewing_stage - 1].toString()) {
				console.log("User clicked around to think through what the next solution was");
				this.setState({
					selectedOption: test_case_correct_order[currently_viewing_stage - 1].toString()
				});
		} else if (currently_viewing_stage > 1) {
			let newStage = currently_viewing_stage - 1;
		this.setState({
				currently_viewing_stage: newStage,
				selectedOption: test_case_correct_order[newStage - 1].toString(),
				optionsDisabled: true,
			})
		
		}
	}

	handleClickNext = (event) => {
		let currently_viewing_stage = this.state.currently_viewing_stage;
		if (currently_viewing_stage === this.state.max_stage_reached - 1) {
			this.setState({
				currently_viewing_stage: currently_viewing_stage + 1,
				selectedOption: test_case_correct_order[currently_viewing_stage].toString(),
				optionsDisabled: false
			})
		} else {
			this.setState({
				currently_viewing_stage: currently_viewing_stage + 1,
				selectedOption: test_case_correct_order[currently_viewing_stage].toString()
			})
		}
	}

	isSelected = (event) => event.target.value ===this.state.selectedOption;

	render() {
			const { options } = this.props.options; 
			const {currently_viewing_stage, max_stage_reached} = this.state;

			let nextButton;
			if (currently_viewing_stage >= max_stage_reached) {
				nextButton = <Button onClick={this.handleNextLineGuess}>Check Answer</Button>
			} else {
				nextButton = <Button onClick={this.handleClickNext}>Next</Button>
			}
			return (
				<div className="ReusableRadio">
					<form onSubmit={this.handleFormSubmit}>
						{this.props.options.map((item, key) => 
							<div className="form-check" style={{display:"flex", flexDirection:"row", margin: "0"}}>
								<label style={{width: "100%", display: "flex"}}>
									<input
										style={{margin: "auto"}}
										type="radio"
										name="react-tips"
										value={item.value}
										checked={this.state.selectedOption === item.value}
										onChange={this.handleOptionChange}
										className="select-input"
										disabled={this.state.optionsDisabled}
									/>
									<SyntaxHighlighter language="python" style={docco} className="select-code">
										{item.code}
									</SyntaxHighlighter>
									{/* <Rodal visible={true}>
                    <div>Content</div>
                </Rodal> */}
								</label>
							</div>		
						)}
						</form>
						<div className="form-group">
							<Button onClick={this.handleClickPrevious}>
								Previous
							</Button>
							{/* {if}
							{(this.state.currently_visiting_step >= this.state.currently_solving_step ?
							
							) }
							<button onClick={
									(currently_visiting_step => currently_solving_step ?
										this.handleNextLineGuess : this. )this.handleNextLineGuess
								}>
								Next
							</button>
							 */}
							 {nextButton}
							<div className="tracing-info">
								<h4>
									Currently traced through first {this.state.max_stage_reached} lines of code
								</h4>
								<h4>
								Step Viewing: {this.state.currently_viewing_stage}
								</h4>
							</div>
						</div>
						
							{/* <div className="form-group">
									<button type="submit">
											Save
									</button>
							</div> */}

					</div>
		)
	}
}

export default ReusableRadio;