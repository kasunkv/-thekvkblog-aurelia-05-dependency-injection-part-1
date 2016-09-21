import {ProfileData} from 'profileData';

export class Home {
    static inject = [ProfileData];
    constructor(profileData) {
        this.message = '';
        this.profileData = profileData; // Saving the injected service for later use.

        this.profile = this.profileData.profiles[0];
    }
}