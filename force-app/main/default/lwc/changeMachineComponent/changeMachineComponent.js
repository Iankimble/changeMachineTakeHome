import { LightningElement, wire } from 'lwc';
import doChange from '@salesforce/apex/ChangeMachineController.doChange';

export default class ButtonGroupBasic extends LightningElement {
	// Kept it simple; Wanted to confirm that when a button was selected I could return the string value from the label attribute.c/changeMachineComponent
	// I then wanted to pass the value into a variable and pass that variable into the function that will connect to the apex class.c/changeMachineComponent

	// buttonResult;
	// test(event) {
	// 	this.buttonResult = event.target.label;
	// }
	// @wire(doChange, { testButtonParamApex: '$buttonResult' })
	// apexResult;

	buttonClick;
	isChange;
	isMachine;
	isChangeMachine;

	makeChange(event) {
		this.buttonClick = event.target.label;
		if (this.buttonClick == 'change') {
			this.isChange = true;
			this.isMachine = false;
		} else if (this.buttonClick == 'machine') {
			this.isChange = false;
			this.isMachine = true;
		} else if (this.buttonClick == 'changeMachine') {
			this.isChange = true;
			this.isMachine = true;
		} else {
			this.isChange = false;
			this.isMachine = false;
		}
	}

	changeFunction() {}
	machineFunction() {}
	changeMachineFunction() {}

	@wire(doChange, { change: '$isChange', machine: '$isMachine' })
	apexResult;
}
