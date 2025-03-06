import { LightningElement, track } from 'lwc';

export default class EducationDetails extends LightningElement {

    @track educations =[{
        id:0,
        degree: '',
        year: '',
        university: '',
    }]
 
    handleEducationChange(event) {
        let index = event.target.dataset.index;
        let field = event.target.dataset.field;
        this.educations[index][field] = event.target.value;
        this.updateResume();
    }

    updateResume(){

        let updateEducationEvt = new CustomEvent('updateeducation', {
            detail: this.educations
        });
        this.dispatchEvent(updateEducationEvt);

    }

    addEducation(){
        this.educations.push({
            id: this.educations.length,
            degree: '',
            year: '',
            university: '',
        }); 

        console.log('educations after adding: ', this.educations); 
    }
}