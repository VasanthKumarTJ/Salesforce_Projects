import { api, LightningElement } from 'lwc';

export default class PreviewResume extends LightningElement {
    @api personalinfo = { fullName: '', email: '', phone: '', address: '' };
    @api skills =[];
    @api educations = [];
    @api workExperiences = [];
    @api summary = '';

    

}