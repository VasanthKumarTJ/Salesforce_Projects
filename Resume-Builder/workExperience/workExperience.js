import { LightningElement, track } from 'lwc';

export default class WorkExperience extends LightningElement {

    @track workExperiences =[{
            id:0,
            jobTitle: '',
            company: '',
            startDate: '',
            endDate: ''
        }]
     
        handleWorkExpChange(event) {
            let index = event.target.dataset.index;
            let field = event.target.dataset.field;
            this.workExperiences[index][field] = event.target.value;
            this.updateResume();
        }
    
        updateResume(){
    
            let updateWorkExpEvt = new CustomEvent('updateworkexp', {
                detail: this.workExperiences
            });
            this.dispatchEvent(updateWorkExpEvt);
    
        }
    
        addWorkExp(){
 
            this.workExperiences.push({
                id: this.workExperiences.length,
                jobTitle: '',
                company: '',
                startDate: '',
                endDate: '' 
            }); 
     
        }

}