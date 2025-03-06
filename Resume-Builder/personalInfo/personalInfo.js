import { LightningElement, track } from 'lwc';

export default class PersonalInfo extends LightningElement {

    PersonalInfo = {}

    handlePIchange(event){

        let fieldname = event.target.dataset.field;
        let value = event.target.value;
        
        this.PersonalInfo[fieldname] = value;
        
        this.updateResume();
    }

    updateResume(){

        let updatePIEvent = new CustomEvent('updatepi', {
            detail: this.PersonalInfo
        });
        this.dispatchEvent(updatePIEvent);

    }
}