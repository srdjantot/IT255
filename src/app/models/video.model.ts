import { SafeResourceUrl } from '@angular/platform-browser';

export class Video {
    loading = true;
    constructor(public title: string, public description: string, public link: SafeResourceUrl) { }
}
