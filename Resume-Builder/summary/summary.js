import { LightningElement } from 'lwc';

export default class Summary extends LightningElement {

    summary = {}

    handleSummaryChange(event){

        this.summary = event.target.value;
        
        this.updateResume();
    }

    updateResume(){

        let updatesummaryevt = new CustomEvent('updatesummary', {
            detail: this.summary
        });
        this.dispatchEvent(updatesummaryevt);

    }

}