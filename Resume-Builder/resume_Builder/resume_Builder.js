import { LightningElement } from 'lwc';

export default class Resume_Builder extends LightningElement {

    PersonalInfo = {}
    summary = ''
    skills =[]
    educations = []
    workExperiences = []

    handleUpdatePI(event){
        this.PersonalInfo = JSON.parse(JSON.stringify(event.detail));
        console.log('Personal Info from resume builder: ', this.PersonalInfo);
    }

    handleUpdateSummary(event){
        this.summary = event.detail;
        console.log('summary Info: ', this.summary);        
    }

    handleUpdateSkills(event){
        this.skills = event.detail;        
        console.log('summary Info: ', this.skills);        
    }
    handleUpdateEducation(event){
        this.educations = event.detail;        
        console.log('summary Info: ', this.educations);        
    }

    handleWorkExp(event){
        this.workExperiences = event.detail;
        console.log('workExperiences Info: ', this.workExperiences);
    }
}