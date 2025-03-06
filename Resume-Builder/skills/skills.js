import { LightningElement, track } from 'lwc';

export default class Skills extends LightningElement {

    @track skills = [{
        id: 0,
        name: '',
    }]

    handleSkillChange(event) {
        this.skills[event.target.dataset.index].name = event.target.value;
        this.updateResume();
    }

    updateResume(){

        let updateSkillEvt = new CustomEvent('updateskill', {
            detail: this.skills
        });
        this.dispatchEvent(updateSkillEvt);

    }

    addSkill(){
        this.skills.push({
            id: this.skills.length,
            name: ''
        }); 

        console.log('Skills after adding: ', this.skills); 
    }
}