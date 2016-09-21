import {ProfileData} from 'profileData';
import {inject} from 'aurelia-framework';


@inject(ProfileData)
export class About {
    constructor(profileData) {
        this.aboutMessage = 'This is the Hello Aurelia app used in Building Apps with Aurelia blog series by The KVK Blog';
        this.profiles = profileData.profiles;
    }
}